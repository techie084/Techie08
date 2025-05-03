<script lang="ts">
	import { LibraryBig, ArrowRight } from '@lucide/svelte';
	import * as config from '$lib/config';
	import { formatDate } from '$lib/config';
	import Seo from '$lib/component/shared/seo.svelte';
	export let data;
</script>

<Seo title={config.title} />

<section class="w-full h-full space-y-4 px-4 py-12">
	<h2>I Write stuff You might wanna read here 😌</h2>

	<ul class="grid gap-2">
		{#each data.posts as post}
			<li class="post max-w-[60px] pb-8 last:border-b-[#333]">
				<a href={post.slug} class="title capitalize">{post.title}</a>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
