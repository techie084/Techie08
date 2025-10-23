<script lang="ts">
	import { dev } from '$app/environment';
	// const GOOGLE_ANALYTICS_ID = 'UA-123456789-1';
	// const GOOGLE_ANALYTICS_DOMAIN = 'my-portfolio.com';
</script>

<svelte:head>
	{#if !dev}
		<script async src="https://www.googletagmanager.com/gtag/js?id={gaId}"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', '{gaId}');
		</script>
	{/if}
</svelte:head>
