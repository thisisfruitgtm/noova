import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: Promise<Record<string, string>> }) {
	const { slug } = await params;
	const link = await prisma.link.findUnique({ where: { slug } });
	if (!link) return NextResponse.redirect(new URL('/', process.env.NEXTAUTH_URL ?? 'http://localhost:3000'));
	await prisma.link.update({ where: { slug }, data: { clicks: { increment: 1 } } });
	return NextResponse.redirect(link.targetUrl);
} 