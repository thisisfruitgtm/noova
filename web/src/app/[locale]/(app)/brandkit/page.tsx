import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function BrandKitPage() {
	return (
		<main className="p-8 max-w-3xl mx-auto space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Trusa de brand</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Input placeholder="Nume atelier" />
					<Input placeholder="Logo URL" />
					<Textarea placeholder="Descriere scurtă" />
				</CardContent>
			</Card>
		</main>
	);
} 