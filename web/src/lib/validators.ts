import { z } from 'zod';

export const messageInputSchema = z.object({
	fromEmail: z.string().email(),
	name: z.string().min(1),
	subject: z.string().optional(),
	body: z.string().min(1)
});

export const linkInputSchema = z.object({
	slug: z.string().regex(/^[a-z0-9-]{3,}$/),
	targetUrl: z.string().url()
});

export const brandKitSchema = z.object({
	logoUrl: z.string().url().optional(),
	colors: z
		.object({ primary: z.string(), secondary: z.string(), accent: z.string(), bg: z.string(), text: z.string(), hi: z.string() })
		.optional(),
	fontHeadings: z.string().optional(),
	fontBody: z.string().optional(),
	bio: z.string().optional(),
	crafts: z.array(z.string()).optional(),
	specialties: z.array(z.string()).optional()
}); 