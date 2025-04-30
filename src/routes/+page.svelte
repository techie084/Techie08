<script lang="ts">
	import Seo from '$lib/component/shared/seo.svelte';
	import Header from '$lib/component/header.svelte';
	import Stack from '$lib/component/stack.svelte';
	import Navbar from '$lib/component/navbar.svelte';
	import Contact from '$lib/component/contact.svelte';
	import Experience from '$lib/component/experience.svelte';
</script>

<!-- google-site-verification=E8sWGLGhwbZYGHrEJ0xofJ_V_RWRaDYClv6Sn72Em-A -->
<!-- links -->
<!-- x link => https://x.com/Techie084 -->
<!-- portfolio link => "https://techie08.vercel.app" -->
<!-- github => https://github.com/techie084 -->

<!-- components -->
<Seo
	title="Wisdom Matthew | Home"
	description="Frontend Web Developer."
	url="https://techie08.vercel.app/"
	image="https://techie08.vercel.app/preview.png"
/>
<main id="app">
	<main class="flex w-full flex-auto flex-col items-center justify-center space-y-10">
		<Header />
		<Stack />
		<Experience />
		<Contact />
	</main>
	<Navbar />
</main>
