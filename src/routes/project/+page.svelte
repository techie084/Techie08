<script lang="ts">
	import * as index from '$lib/index';
	import Navbar from '$lib/component/navbar.svelte';
	import Seo from '$lib/component/shared/seo.svelte';
</script>

<Seo
	title="{index.title} - {index.description[2]}"
	description="Projects section | Wisdom Matthew"
	url="https://techie08.vercel.app/projects"
	image="https://techie08.vercel.app/image"
/>

<section class="space-y-4 px-4 py-12">
	<h2 class="">Projects</h2>
	<div>
		Nothing to see here yet but you can check out my <a
			class="text-blue-400 hover:text-blue-600"
			href="https://github.com/techie084"
			target="_blank">Github</a
		>
	</div>
</section>

<Navbar />
