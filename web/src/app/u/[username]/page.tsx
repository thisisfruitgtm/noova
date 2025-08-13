import { prisma } from '@/lib/prisma';

export default async function Microsite({ params }: { params: Promise<{ username: string }> }) {
	const { username } = await params;
	const user = await prisma.user.findFirst({ where: { username }, include: { brandKit: true } });
	if (!user) return null;
	return (
		<main className="p-8 max-w-3xl mx-auto space-y-4">
			<h1 className="text-2xl font-bold">{user.name ?? user.username}</h1>
			<p className="text-foreground/80">{user.brandKit?.bio ?? 'Meșteșugar din România'}</p>
			<div className="text-sm">Oraș/Județ: {user.city ?? '-'} / {user.county ?? '-'}</div>
		</main>
	);
} 