'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type BrandKit = {
	id: string;
	bio?: string | null;
	logoUrl?: string | null;
	colors?: unknown;
};

export function HomeDashboard({ locale }: { locale: string }) {
	const [brandKit, setBrandKit] = useState<BrandKit | null | undefined>(undefined);
	useEffect(() => {
		fetch('/api/brandkit')
			.then((r) => (r.ok ? r.json() : null))
			.then(setBrandKit)
			.catch(() => setBrandKit(null));
	}, []);

	return (
		<div className="space-y-6">
			{/* Acțiuni rapide */}
			<div className="flex flex-wrap gap-3">
				<Link href={`/${locale}/templates`}><Button>Creează material</Button></Link>
				<Link href={`/${locale}/calendar`}><Button variant="outline">Programează postare</Button></Link>
				<Link href={`/${locale}/assets`}><Button variant="ghost">Încarcă imagini</Button></Link>
				<Link href={`/${locale}/brandkit`}><Button variant="ghost">Trusa de brand</Button></Link>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				{/* Status BrandKit */}
				<Card className="lg:col-span-1">
					<CardHeader>
						<CardTitle className="text-base">Status Trusă de brand</CardTitle>
					</CardHeader>
					<CardContent className="text-sm text-foreground/80 space-y-2">
						{brandKit === undefined && <div>Se încarcă...</div>}
						{brandKit === null && (
							<div className="space-y-2">
								<div>Nu ai încă o trusă de brand configurată.</div>
								<Link href={`/${locale}/brandkit`}><Button size="sm">Setează-ți trusa</Button></Link>
							</div>
						)}
						{brandKit && (
							<div className="space-y-2">
								<div className="font-medium">Bio</div>
								<div className="line-clamp-3">{brandKit.bio ?? '—'}</div>
								<Link href={`/${locale}/brandkit`} className="inline-block"><Button size="sm" variant="outline">Editează</Button></Link>
							</div>
						)}
					</CardContent>
				</Card>

				{/* Previzualizare șabloane */}
				<Card className="lg:col-span-2">
					<CardHeader>
						<CardTitle className="text-base">Șabloane recomandate</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
							{[
								{ id: 't1', title: 'Anunț târg local' },
								{ id: 't2', title: 'Lansare serie nouă' },
								{ id: 't3', title: 'Flyer A5' },
							].map((t) => (
								<div key={t.id} className="border rounded-md p-3 text-sm flex items-center justify-between">
									<div className="font-medium truncate pr-2">{t.title}</div>
									<Link href={`/${locale}/templates`}><Button size="sm">Deschide</Button></Link>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>

			{/* Calendar shortcut */}
			<Card>
				<CardHeader>
					<CardTitle className="text-base">Următorii pași</CardTitle>
				</CardHeader>
				<CardContent className="text-sm text-foreground/80 space-y-2">
					<div>1) Setează-ți Trusa de brand pentru a personaliza materialele.</div>
					<div>2) Alege un șablon și creează primul material.</div>
					<div>3) Programează o postare pentru săptămâna aceasta.</div>
					<div className="pt-2"><Link href={`/${locale}/calendar`}><Button size="sm">Deschide Calendar</Button></Link></div>
				</CardContent>
			</Card>
		</div>
	);
} 