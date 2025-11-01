<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Seo from '$lib/components/shared/seo.svelte';
	import Analytics from '$lib/components/analytics.svelte';

	const defaultMeta = {
		title: 'Emediong Matthew | Software Developer',
		description:
			'Software Developer specialized in Svelte, SvelteKit, TypeScript Express.js/Node.js Mongodb. Building scalable, performant web applications with clean code.',
		ogImage: 'https://emediong08.vercel.app/og-image.png'
	};

	let { children } = $props();
</script>

<!-- Seo data -->
<Seo meta={defaultMeta} />
<Analytics />

<main id="app" class="font-Overpass">
	{@render children()}
	<Navbar />
</main>
