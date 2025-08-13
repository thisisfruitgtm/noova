'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
	const [email, setEmail] = useState('demo@noova.local');
	const [password, setPassword] = useState('secret123');
	const [loading, setLoading] = useState(false);
	async function onLogin() {
		setLoading(true);
		await signIn('credentials', { email, password, callbackUrl: '/ro-RO' });
		setLoading(false);
	}
	return (
		<main className="p-8 max-w-sm mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Autentificare</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<Input placeholder="Parolă" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<Button onClick={onLogin} disabled={loading}>{loading ? 'Se autentifică...' : 'Intră în cont'}</Button>
				</CardContent>
			</Card>
		</main>
	);
} 