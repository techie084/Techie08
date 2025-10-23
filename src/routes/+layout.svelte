<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/component/navbar.svelte';
	import Seo from '$lib/component/shared/seo.svelte';
	import Analytics from '$lib/component/analytics.svelte';

	const defaultMeta = {
		title: 'Emediong Matthew - Frontend Developer | SvelteKit & TypeScript',
		description:
			'Frontend web developer specialized in Svelte, SvelteKit, TypeScript Express.js/Node.js Mongodb. Building scalable, performant web applications with clean code.',
		ogImage: 'https://wisdommatthew.com/og-image.png'
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

<style global>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
