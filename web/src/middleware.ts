import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: ['ro-RO'],
	defaultLocale: 'ro-RO',
	localePrefix: 'as-needed'
});

export const config = {
	matcher: [
		'/((?!_next|.*\\..*|api|u|r|favicon.ico|service-worker.js).*)'
	]
}; 