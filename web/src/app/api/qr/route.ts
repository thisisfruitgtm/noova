import { NextResponse } from 'next/server';
import QRCode from 'qrcode';
import { z } from 'zod';

const qrSchema = z.object({ url: z.string().url() });

export async function POST(req: Request) {
	const json = await req.json();
	const parsed = qrSchema.safeParse(json);
	if (!parsed.success) return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
	const svg = await QRCode.toString(parsed.data.url, { type: 'svg', width: 512, margin: 1 });
	return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
} 