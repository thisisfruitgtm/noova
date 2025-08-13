import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['ro-RO'],
	defaultLocale: 'ro-RO',
	localePrefix: 'always'
});

export const config = {
	matcher: ['/((?!_next|.*\..*).*)']
}; 