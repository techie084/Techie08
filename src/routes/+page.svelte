<script lang="ts">
	import Seo from '$lib/component/shared/seo.svelte';
	import Header from '$lib/component/header.svelte';
	import Stack from '$lib/component/stack.svelte';
	import Navbar from '$lib/component/navbar.svelte';
	import Contact from '$lib/component/contact.svelte';
	import Experience from '$lib/component/experience.svelte';
	import Project from '$lib/component/project.svelte';
	import Blog from '$lib/component/blog.svelte';
</script>

<!-- links
portfolio => "https://techie08.vercel.app"
x (twitter) => https://x.com/Techie084 
github => https://github.com/techie084
facebook => https://facebook.com/h  -->

<!-- Seo data -->
<Seo
	title="Wisdom Matthew | Home"
	description="Frontend Web Developer."
	url="https://techie08.vercel.app/"
	image="https://techie08.vercel.app/preview.png"
/>

<!-- components -->
<main id="app">
	<main class="flex w-full flex-auto flex-col items-center justify-center space-y-10">
		<!-- <Loading /> -->
		<Header />
		<Stack />
		<Experience />
		<Project />
		<Blog />
		<Contact />
	</main>
	<Navbar />
</main>
