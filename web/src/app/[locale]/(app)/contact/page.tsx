import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
	return (
		<main className="p-8 max-w-3xl mx-auto space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Contacte</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<Input placeholder="Email expeditor" />
					<Input placeholder="Subiect" />
					<Textarea placeholder="Mesaj" />
					<Button>Trimite</Button>
				</CardContent>
			</Card>
		</main>
	);
} 