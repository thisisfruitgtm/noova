import { PrismaClient } from '../src/generated/prisma/index.js';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
	const email = 'demo@noova.local';
	const password = 'secret123';
	const passwordHash = await bcrypt.hash(password, 10);
	const user = await prisma.user.upsert({
		where: { email },
		update: {},
		create: {
			email,
			name: 'Demo Noova',
			username: 'demo',
			city: 'Iași',
			county: 'Iași',
			passwordHash,
			brandKit: {
				create: {
					logoUrl: null,
					colors: { primary: '#8B4513', secondary: '#D2691E', accent: '#228B22', bg: '#FAF0E6', text: '#2F4F4F', hi: '#CD853F' },
					bio: 'Meșteșugar demo din Iași',
					crafts: ['lemn'],
					specialties: ['decor']
				}
			}
		}
	});
	console.log('Seeded user:', user.email, 'password:', password);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	}); 