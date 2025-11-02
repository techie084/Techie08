<script lang="ts">
	// importing component
	import Header from '$lib/components/header.svelte';
	import HeaderNav from '$lib/components/headerNav.svelte';
	import Stack from '$lib/components/stack.svelte';
	import Contact from '$lib/components/contact.svelte';
	import Experience from '$lib/components/experience.svelte';
	import Project from '$lib/components/project.svelte';
	import Blog from '$lib/components/blog.svelte';
	import Seo from '$lib/components/shared/seo.svelte';
	import { pages } from '$lib/config/seo';

	// svelte content
	// 	import { onMount } from 'svelte';
	// 	import gsap from 'gsap';

	// 	let showLoader: boolean = true;
	// 	let logoText: HTMLHeadingElement;
	// 	let loaderOverlay: HTMLDivElement;

	// 	onMount(() => {
	// 		const tl = gsap.timeline();

	// 		tl.fromTo(
	// 			logoText,
	// 			{ scale: 0.8, opacity: 0, y: 50 },
	// 			{ scale: 1, opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
	// 		)
	// 			.to(logoText, {
	// 				delay: 0.6,
	// 				opacity: 0,
	// 				y: -50,
	// 				duration: 0.8,
	// 				ease: 'power2.inOut'
	// 			})
	// 			.to(loaderOverlay, {
	// 				opacity: 1,
	// 				duration: 0.6,
	// 				onComplete: () => {
	// 					showLoader = false;
	// 				}
	// 			});
	// 	});
	//
</script>

<!-- Loader Overlay -->
<!-- {#if showLoader}
	<div
		bind:this={loaderOverlay}
		class="fixed inset-0 z-50 flex items-center justify-center bg-[#0d0d0f]"
	>
		<h1 bind:this={logoText} class=" text-5xl font-bold tracking-widest text-white">
			Emediong Matthew
		</h1>
	</div>
{/if} -->

<Seo meta={pages.home} />

<!-- components -->
<main class="flex max-w-full flex-auto flex-col items-center justify-center space-y-10">
	<!-- Tranparent nav-bar -->
	<HeaderNav />

	<!-- Header -->
	<Header />

	<!-- tech stack -->
	<Stack />

	<!-- experience -->
	<Experience />

	<!-- project -->
	<Project />

	<!-- blog -->
	<Blog />

	<!-- contact -->
	<Contact />
</main>

<!-- https://drealdumore.vercel.app/ -->
