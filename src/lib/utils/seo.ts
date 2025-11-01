import { siteConfig } from '$lib/config/seo';

export interface SEOMeta {
	title: string;
	description: string;
	keywords?: string[];
	ogImage?: string;
	ogUrl?: string;
	twitter?: string;
	canonical?: string;
	noindex?: boolean;
	nofollow?: boolean;
}

export const generateMetaTags = (seo: SEOMeta) => {
	return {
		title: seo.title,
		description: seo.description,
		keywords: seo.keywords?.join(', ') || '',
		'og:title': seo.title,
		'og:description': seo.description,
		'og:image': seo.ogImage || siteConfig.ogImage,
		'og:url': seo.ogUrl || siteConfig.url,
		'og:type': 'website',
		'twitter:card': 'summary_large_image',
		'twitter:title': seo.title,
		'twitter:description': seo.description,
		'twitter:image': seo.ogImage || siteConfig.ogImage,
		'twitter:creator': seo.twitter,
		viewport: 'width=device-width, initial-scale=1',
		robots: seo.noindex ? 'noindex, nofollow' : 'index, follow',
		canonical: seo.canonical || siteConfig.url
	};
};

// Generate structured data (JSON-LD)
export const generateStructuredData = (type: 'person' | 'organization' | 'creativeWork') => {
	const baseStructure = {
		'@context': 'https://schema.org',
		'@type':
			type === 'person' ? 'Person' : type === 'organization' ? 'Organization' : 'CreativeWork',
		name: siteConfig.author,
		url: siteConfig.url,
		email: siteConfig.email,
		image: siteConfig.ogImage
	};

	if (type === 'person') {
		return {
			...baseStructure,
			jobTitle: 'Full-stack Developer',
			sameAs: [siteConfig.github, siteConfig.linkedin, `https://twitter.com/${siteConfig.twitter}`],
			worksFor: {
				'@type': 'Organization',
				name: 'Freelance'
			}
		};
	}
	return baseStructure;
};
