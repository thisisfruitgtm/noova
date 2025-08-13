'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	async function onRegister() {
		setLoading(true);
		setError(null);
		const r = await fetch('/api/register', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, name }) });
		setLoading(false);
		if (!r.ok) {
			const j = await r.json().catch(() => ({}));
			setError(j.error ?? 'Eroare la înregistrare');
			return;
		}
		window.location.href = '/login';
	}
	return (
		<main className="p-8 max-w-sm mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Înregistrare</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input placeholder="Nume" value={name} onChange={(e) => setName(e.target.value)} />
					<Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input placeholder="Parolă" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					{error && <div className="text-sm text-red-600">{error}</div>}
					<Button onClick={onRegister} disabled={loading}>{loading ? 'Se înregistrează...' : 'Creează cont'}</Button>
				</CardContent>
			</Card>
		</main>
	);
} 