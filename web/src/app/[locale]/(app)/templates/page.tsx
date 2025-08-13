import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const templates = [
	{ id: 't1', title: 'Anunț târg local', kind: 'social', size: 'square' },
	{ id: 't2', title: 'Lansare serie nouă', kind: 'social', size: 'story' },
	{ id: 't3', title: 'Flyer A5', kind: 'print', size: 'A5' }
];

export default function TemplatesPage() {
	return (
		<main className="p-8 max-w-5xl mx-auto">
			<h1 className="text-xl font-semibold mb-6">Șabloane</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{templates.map((tpl) => (
					<Card key={tpl.id}>
						<CardHeader>
							<CardTitle className="text-base">{tpl.title}</CardTitle>
						</CardHeader>
						<CardContent className="flex items-center justify-between text-sm text-foreground/70">
							<div>
								<div>Tip: {tpl.kind}</div>
								<div>Dimensiune: {tpl.size}</div>
							</div>
							<Dialog>
								<DialogTrigger asChild>
									<Button>Creează</Button>
								</DialogTrigger>
								<DialogContent>
									<DialogHeader>
										<DialogTitle>Editor șablon (WIP)</DialogTitle>
									</DialogHeader>
									<p className="text-sm text-foreground/70">În curând vei putea edita conținutul, imaginile și culorile direct aici.</p>
								</DialogContent>
							</Dialog>
						</CardContent>
					</Card>
				))}
			</div>
		</main>
	);
} 