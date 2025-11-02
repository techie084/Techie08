<script lang="ts">
	import { trackClick } from '$lib/utils/analytics';
	import { onMount } from 'svelte';
	import { getPosts } from '../blog.remote';

	let { params } = $props();

	const post = $derived(await getPosts(params.slug));

	onMount(() => {
		trackClick(post.);
	});
</script>

<h1>{post}</h1>
<div class="m-4 border-gray-800">{@html post.content}</div>
