'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export function HeroCta() {
	const t = useTranslations();
	const locale = useLocale();
	return (
		<div className="flex items-center justify-center gap-3">
			<Link href={`/${locale}/templates`}>
				<Button>{t('cta.create')}</Button>
			</Link>
			<Link href={`/${locale}/calendar`}>
				<Button variant="outline">{t('cta.schedule')}</Button>
			</Link>
		</div>
	);
} 