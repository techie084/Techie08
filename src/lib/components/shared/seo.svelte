<script lang="ts">
	import { page } from '$app/state';
	import type { SEOMeta } from '$lib/utils/seo';
	export let meta: SEOMeta;

	// import { generateStructuredData } from '$lib/utils/seo';
	// $: structuredData = generateStructuredData('person');
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{meta.title}</title>
	<meta name="title" content={meta.title} />
	<meta name="description" content={meta.description} />
	{#if meta.keywords}
		<meta name="keywords" content={meta.keywords.join(', ')} />
	{/if}

	<!-- Canonical URL -->
	<link
		rel="canonical"
		href={meta.canonical || `https://emediong08.vercel.app${page.url.pathname}`}
	/>

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta
		property="og:url"
		content={meta.ogUrl || `https://emediong08.vercel.app${page.url.pathname}`}
	/>
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:image" content={meta.ogImage} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta
		property="twitter:url"
		content={meta.ogUrl || `https://wisdommatthew.com${page.url.pathname}`}
	/>
	<meta property="twitter:title" content={meta.title} />
	<meta property="twitter:description" content={meta.description} />
	<meta property="twitter:image" content={meta.ogImage} />
	<meta property="twitter:creator" content="@yourtwitter" />

	<!-- Additional SEO -->
	<meta name="author" content="Emediong Matthew" />
	<meta name="robots" content={meta.noindex ? 'noindex, nofollow' : 'index, follow'} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="theme-color" content="#0f172a" />
	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

	<!-- Preconnect to external resources -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="dns-prefetch" href="https://www.google-analytics.com" />

	<!-- Structured Data (JSON-LD) -->
	<!-- {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}<\/script>`} -->
</svelte:head>
