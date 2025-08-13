import type { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const credentialsSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6)
});

type SafeUser = { id: string; email: string; name: string | null };

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'database' },
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: { email: { label: 'Email', type: 'email' }, password: { label: 'Password', type: 'password' } },
			authorize: async (creds) => {
				const parsed = credentialsSchema.safeParse(creds);
				if (!parsed.success) return null;
				const { email, password } = parsed.data;
				const user = await prisma.user.findUnique({ where: { email } });
				if (!user || !('passwordHash' in user) || !user.passwordHash) return null;
				const ok = await bcrypt.compare(password, user.passwordHash as string);
				if (!ok) return null;
				const safe: SafeUser = { id: user.id, email: user.email, name: user.name };
				return safe;
			}
		})
	],
	pages: {},
	callbacks: {
		session: async ({ session }) => session
	}
}; 