import { NextResponse } from 'next/server';
import { messageInputSchema } from '@/lib/validators';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const rateMap = new Map<string, { count: number; ts: number }>();

function allow(ip: string) {
	const now = Date.now();
	const rec = rateMap.get(ip);
	if (!rec || now - rec.ts > 60_000) {
		rateMap.set(ip, { count: 1, ts: now });
		return true;
	}
	rec.count += 1;
	rateMap.set(ip, rec);
	return rec.count <= 5;
}

export async function POST(req: Request) {
	const ip = (req.headers.get('x-forwarded-for') ?? req.headers.get('x-real-ip') ?? 'local').toString();
	if (!allow(ip)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
	const json = await req.json();
	const parsed = messageInputSchema.safeParse(json);
	if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
	const session = await getServerSession(authOptions);
	if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const user = await prisma.user.findUnique({ where: { email: session.user.email } });
	if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const msg = await prisma.message.create({ data: { userId: user.id, ...parsed.data } });
	return NextResponse.json({ ok: true, id: msg.id });
}

export async function GET() {
	const session = await getServerSession(authOptions);
	if (!session?.user?.email) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const user = await prisma.user.findUnique({ where: { email: session.user.email } });
	if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	const inbox = await prisma.message.findMany({ where: { userId: user.id }, orderBy: { createdAt: 'desc' } });
	return NextResponse.json({ items: inbox });
} 