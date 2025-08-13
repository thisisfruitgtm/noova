import { NextResponse } from 'next/server';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

const schema = z.object({ email: z.string().email(), password: z.string().min(6), name: z.string().min(1) });

export async function POST(req: Request) {
	const json = await req.json();
	const parsed = schema.safeParse(json);
	if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
	const { email, password, name } = parsed.data;
	const exists = await prisma.user.findUnique({ where: { email } });
	if (exists) return NextResponse.json({ error: 'Email deja folosit' }, { status: 409 });
	const passwordHash = await bcrypt.hash(password, 10);
	await prisma.user.create({ data: { email, name, passwordHash } });
	return NextResponse.json({ ok: true });
} 