import { NextResponse } from 'next/server';
import { linkInputSchema } from '@/lib/validators';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function POST(req: Request) {
	const session = await getServerSession(authOptions);
	if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const user = await prisma.user.findUnique({ where: { email: session.user.email } });
	if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const json = await req.json();
	const parsed = linkInputSchema.safeParse(json);
	if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
	const { slug, targetUrl } = parsed.data;
	await prisma.link.create({ data: { userId: user.id, slug, targetUrl } });
	return NextResponse.json({ ok: true });
} 