<script lang="ts">
	export let title = 'Wisdom Matthew';
	export let description = 'Wisdom Matthew, a Frontend Web Developer';
	export let image = 'https://techie08.vercel.app/og-image.png';
	export let url = 'https://techie08.vercel.app';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>
