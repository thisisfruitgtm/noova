import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
	locale: locale ?? 'ro-RO',
	messages: (await import(`../messages/${locale ?? 'ro-RO'}.json`)).default
})); 