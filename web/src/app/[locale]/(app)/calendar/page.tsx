'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type Item = { id: string; title: string; date: string };

export default function CalendarPage() {
	const [title, setTitle] = useState('');
	const [date, setDate] = useState('');
	const [items, setItems] = useState<Item[]>([]);

	function addItem() {
		if (!title || !date) return;
		setItems((prev) => [{ id: crypto.randomUUID(), title, date }, ...prev]);
		setTitle('');
		setDate('');
	}

	return (
		<main className="p-8 max-w-3xl mx-auto space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Calendar</CardTitle>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
						<Input placeholder="Titlu" value={title} onChange={(e) => setTitle(e.target.value)} />
						<Input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
						<Button onClick={addItem}>Adaugă</Button>
					</div>
					<ul className="space-y-2">
						{items.map((it) => (
							<li key={it.id} className="flex items-center justify-between border rounded-md p-2">
								<div>
									<div className="font-medium">{it.title}</div>
									<div className="text-xs text-foreground/70">{new Date(it.date).toLocaleString('ro-RO')}</div>
								</div>
								<Button variant="ghost" onClick={() => setItems((prev) => prev.filter((p) => p.id !== it.id))}>Șterge</Button>
							</li>
						))}
					</ul>
				</CardContent>
			</Card>
		</main>
	);
} 