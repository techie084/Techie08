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

<!-- Seo data -->
<Seo
	title="Wisdom Matthew | Home"
	description="Frontend Web Developer."
	url="https://techie08.vercel.app/"
	image="https://techie08.vercel.app/preview.png"
/>

<!-- components -->
<main class="flex w-full flex-auto flex-col items-center justify-center space-y-10">
	<Header />
	<Stack />
	<Experience />
	<Project />
	<Blog />
	<Contact />
</main>
<Navbar />
