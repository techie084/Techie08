<script lang="ts">
	// import Post1 from '$lib/blog-posts/svelte-is-better.md';
	import { trackClick } from '$lib/utils/analytics';
	import { onMount } from 'svelte';

	let { data } = $props();

	onMount(() => {
		trackClick(data.title);
	});
</script>

<h1>{data.post.title}</h1>
<div class="m-4 border-gray-800">{data.post.content}</div>
