import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const robots = `User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/

Sitemap: https://wisdommatthew.com/sitemap.xml

User-agent: AdsBot-Google
Allow: /

User-agent: Googlebot
Allow: /`;

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400'
		}
	});
};
