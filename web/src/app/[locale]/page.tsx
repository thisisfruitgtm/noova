import { getTranslations } from 'next-intl/server';
import { HeroCta } from '../../components/HeroCta';
import { HomeDashboard } from '@/components/home/HomeDashboard';

export const dynamicParams = false;

export function generateStaticParams() {
	return [{ locale: 'ro-RO' }];
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	return (
		<main className="min-h-screen p-8 space-y-8">
			<div className="max-w-2xl mx-auto text-center space-y-6">
				<h1 className="text-3xl md:text-4xl font-bold text-primary font-[family-name:var(--font-headings)]">
					{t('hero.title')}
				</h1>
				<p className="text-foreground/80">{t('hero.subtitle')}</p>
				<HeroCta />
			</div>
			<HomeDashboard locale={locale} />
		</main>
	);
} 