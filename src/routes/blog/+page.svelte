<script lang="ts">
	import { Github } from '@lucide/svelte';
	import Seo from '$lib/components/shared/seo.svelte';
	import { pages } from '$lib/config/seo';
	let { data } = $props();
</script>

<Seo meta={pages.blog} />

<section class="h-full w-full space-y-4">
	<h1
		class="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl text-transparent sm:text-3xl"
	>
		<strong class="flex h-full w-full">Blog's</strong>
	</h1>

	{#each data as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}

	<div class="my-8 w-full rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 pb-3">
		<div class="mb-2 flex justify-between">
			<p class="text-[clamp(1.3rem,3vw,1.6rem)]">👋Thanks for Reading!</p>
			<a
				class="flex items-center gap-2 rounded-lg bg-[#02040A] px-2 py-1 text-lg text-blue-100 transition-colors hover:bg-neutral-900"
				target="_blank"
				href="https://github.com/techie084"><Github class="w-5" /> Follow</a
			>
		</div>
		<p class="text-lg">
			If you enjoy this post then consider sharing it and/or following me on Github.
		</p>
	</div>
</section>
