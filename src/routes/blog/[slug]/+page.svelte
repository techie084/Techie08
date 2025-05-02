<script lang="ts">
	import * as config from "$lib/config";
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section class="py-12 px-4">
	<h2>I Write stuff You might wanna read here 😌</h2>

	<ul class="post">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{post.date}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
