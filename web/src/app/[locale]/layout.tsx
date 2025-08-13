import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import '../globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-headings',
	display: 'swap'
});

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-body',
	display: 'swap'
});

export const metadata: Metadata = {
	title: 'Noova',
	description: 'Tot marketingul tău, într-un singur loc.'
};

export default async function RootLayout({
	children,
	params
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const messages = (await import(`../../messages/${locale}.json`)).default;
	return (
		<html lang={locale}>
			<body className={`${montserrat.variable} ${openSans.variable} antialiased bg-background text-foreground`}>
				<NextIntlClientProvider locale={locale} messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
} 