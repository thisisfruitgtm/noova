import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { brandKitSchema } from '@/lib/validators';

export async function GET() {
	const session = await getServerSession(authOptions);
	if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const user = await prisma.user.findUnique({ where: { email: session.user.email }, include: { brandKit: true } });
	if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	return NextResponse.json(user.brandKit ?? null);
}

export async function PATCH(req: Request) {
	const session = await getServerSession(authOptions);
	if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const user = await prisma.user.findUnique({ where: { email: session.user.email } });
	if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const json = await req.json();
	const parsed = brandKitSchema.safeParse(json);
	if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
	const d = parsed.data;
	const defaultColors = { primary: '#8B4513', secondary: '#D2691E', accent: '#228B22', bg: '#FAF0E6', text: '#2F4F4F', hi: '#CD853F' } as any;
	const createData = {
		userId: user.id,
		logoUrl: d.logoUrl ?? null,
		colors: (d.colors ?? defaultColors) as any,
		fontHeadings: d.fontHeadings ?? null,
		fontBody: d.fontBody ?? null,
		bio: d.bio ?? null,
		crafts: (d.crafts ?? []) as any,
		specialties: (d.specialties ?? []) as any
	} satisfies Parameters<typeof prisma.brandKit.create>[0]['data'];
	const updateData = {
		...(d.logoUrl !== undefined ? { logoUrl: d.logoUrl } : {}),
		...(d.colors !== undefined ? { colors: d.colors as any } : {}),
		...(d.fontHeadings !== undefined ? { fontHeadings: d.fontHeadings } : {}),
		...(d.fontBody !== undefined ? { fontBody: d.fontBody } : {}),
		...(d.bio !== undefined ? { bio: d.bio } : {}),
		...(d.crafts !== undefined ? { crafts: d.crafts as any } : {}),
		...(d.specialties !== undefined ? { specialties: d.specialties as any } : {})
	} satisfies Parameters<typeof prisma.brandKit.update>[0]['data'];
	const upserted = await prisma.brandKit.upsert({
		where: { userId: user.id },
		create: createData,
		update: updateData
	});
	return NextResponse.json(upserted);
} 