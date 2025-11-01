<!-- <script lang="ts">
	import { page } from '$app/state';

	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', 'MEASUREMENT_ID', {
				page_title: document.title,
				page_path: page.url.pathname
			});
		}
	}
</script> -->

<!-- <svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=MEASUREMENT_ID">
	</script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'MEASUREMENT_ID');
	</script>
</svelte:head> -->

<!-- <svelte:head>
	{#if !dev}
		<script async src="https://www.googletagmanager.com/gtag/js?id={GOOGLE_ANALYTICS_ID}"></script>
		<script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', '{gaId}');
		</script>
	{/if}
</svelte:head> -->
