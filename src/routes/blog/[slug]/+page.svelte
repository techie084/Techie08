<script lang="ts">
	// import Post1 from "$lib/blog-posts/svelte-is-better.md"

	let { data } = $props();
	$inspect(data);
</script>

<!-- <Post1 /> -->
<h1>{data.title}</h1>
<p>{data.body}</p>
