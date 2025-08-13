import { useTranslations } from 'next-intl';
import { HeroCta } from '../../components/HeroCta';

export const dynamicParams = false;

export function generateStaticParams() {
	return [{ locale: 'ro-RO' }];
}

export default function Home() {
	const t = useTranslations();
	return (
		<main className="min-h-screen flex items-center justify-center p-8">
			<div className="max-w-2xl text-center space-y-6">
				<h1 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-headings)]">
					{t('hero.title')}
				</h1>
				<p className="text-foreground/80">{t('hero.subtitle')}</p>
				<HeroCta />
			</div>
		</main>
	);
} 