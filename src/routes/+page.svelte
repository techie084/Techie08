<script lang="ts">
	import Seo from '$lib/component/shared/seo.svelte';
	import Header from '$lib/component/header.svelte';
	import Stack from '$lib/component/stack.svelte';
	import Navbar from '$lib/component/navbar.svelte';
	import Contact from '$lib/component/contact.svelte';
	import Experience from '$lib/component/experience.svelte';
	import Project from '$lib/component/project.svelte';
	import Blog from '$lib/component/blog.svelte';

	// Testing loading animation
	import { onMount } from 'svelte';
	let showLoader: boolean = true;
	let logoText: any;
	let loaderOverlay: any;

	onMount(() => {
		const tl = gsap.timeline();

		tl.fromTo(
			logoText,
			{ scale: 0.8, opacity: 0, y: 50 },
			{ scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
		)
			.to(logoText, {
				delay: 0.6,
				opacity: 0,
				y: -50,
				duration: 0.8,
				ease: 'power2.inOut'
			})
			.to(loaderOverlay, {
				opacity: 0,
				duration: 0.6,
				onComplete: () => {
					showLoader = false;
				}
			});
	});
</script>

{#if showLoader}
	<!-- Loader Overlay -->
	<div
		bind:this={loaderOverlay}
		class="fixed inset-0 z-50 flex items-center justify-center bg-neutral-600"
	>
		<h1 bind:this={logoText} class="font-techie text-6xl font-bold tracking-widest text-white">
			Techie
		</h1>
	</div>
{/if}

<!-- Seo data -->
<Seo
	title="Wisdom Matthew | Home"
	description="Frontend Web Developer."
	url="https://techie08.vercel.app/"
	image="https://techie08.vercel.app/preview.png"
/>

{#if showLoader}{/if}

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
