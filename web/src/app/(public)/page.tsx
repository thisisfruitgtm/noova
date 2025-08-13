import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PublicHome() {
	return (
		<main className="min-h-screen p-8 flex items-center justify-center">
			<div className="max-w-2xl text-center space-y-6">
				<h1 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-headings)]">Tot marketingul tău, într-un singur loc.</h1>
				<p className="text-foreground/80">Noova te ajută să îți gestionezi brandul, conținutul, postările, microsite-ul și contactele — simplu și în limba română.</p>
				<div className="flex items-center justify-center gap-3">
					<Link href="/login"><Button>Intră în cont</Button></Link>
					<Link href="/register"><Button variant="outline">Creează cont</Button></Link>
				</div>
			</div>
		</main>
	);
} 