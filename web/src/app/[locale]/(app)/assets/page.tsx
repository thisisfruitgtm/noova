import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

export default function AssetsPage() {
	return (
		<main className="p-8 max-w-4xl mx-auto space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Bibliotecă media</CardTitle>
				</CardHeader>
				<CardContent>
					<Dialog>
						<DialogTrigger asChild>
							<Button>Încarcă imagini</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Upload</DialogTitle>
							</DialogHeader>
							<div className="text-sm text-foreground/70">WIP — aici va fi drag&drop.</div>
						</DialogContent>
					</Dialog>
				</CardContent>
			</Card>
		</main>
	);
} 