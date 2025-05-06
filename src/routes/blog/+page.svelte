<script lang="ts">
	import { Github } from '@lucide/svelte';
	import Seo from '$lib/component/shared/seo.svelte';
	import Navbar from '$lib/component/navbar.svelte';
	import * as index from '$lib/index';
</script>

<Seo
	title="{index.title} - {index.description[1]}"
	description={index.description[1]}
	url={'https://localhost:5173/'}
/>

<section class="h-full w-full space-y-4 px-4 py-12">
	<h2>Nothing here for now</h2>

	<div class="my-8 w-full rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 pb-3">
		<div class="flex justify-between pb-1">
			<h2>👋 Thanks for reading !</h2>
			<a
				class="flex items-center gap-2 rounded-lg bg-[#02040A] px-2 py-1 text-lg text-blue-100 transition-colors hover:bg-neutral-900"
				target="_blank"
				href="https://github.com/techie084"><Github class="w-5" /> Follow</a
			>
		</div>
		<p class="text-lg">
			if you enjoy this post then consider sharing it and/or following me on Github.
		</p>
	</div>
</section>

<Navbar />
