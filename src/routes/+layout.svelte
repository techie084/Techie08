<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import '../app.css';
	let { children } = $props();
</script>

{@render children()}

<!-- injectAnalytics({ mode: dev ? "development" : "production"}); -->
