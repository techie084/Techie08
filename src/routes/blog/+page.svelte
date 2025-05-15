<script lang="ts">
	import { Github, SmilePlus } from '@lucide/svelte';
	import Seo from '$lib/component/shared/seo.svelte';
	import Navbar from '$lib/component/navbar.svelte';
	import * as index from '$lib/index';

	const BlogPosts = [
		{
			title: 'svelte is better',
			description: '',
			date: '',
			links: ['blog/0', ''],
			icon: SmilePlus
		}
	];
</script>

<Seo
	title="{index.title} | {index.description[1]}"
	description={index.description[1]}
	url={'https://localhost:5173/'}
/>

<section class="h-full w-full space-y-4">
	<h1
		class="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl text-transparent sm:text-3xl"
	>
		<strong class="flex h-full w-full">Blog's</strong>
	</h1>

	<!-- {#each BlogPosts as posts}
		<div class="flex w-full items-center gap-4 rounded-lg border border-[#26262a] p-2">
			<svelte:component this={posts.icon} class="size-[clamp(2.5rem,5vw,2.25rem)] shrink-0" />
			<div class="flex w-full flex-col gap-1">
				<div class="flex items-center justify-between gap-2">
					<h3 class="line-clamp-3 text-start">{posts.title}</h3>
					<div class="flex">
						{#each posts.links as link, i}
							<a class="flex size-[clamp(2rem,5vw,2.25rem)] shrink-0" href={link} target="_blank"> -->
	<!-- {#each posts.linkIcons as icon, j}
									{#if i === j}
										<svelte:component this={icon} />
									{/if}
								{/each} -->
	<!-- </a>
						{/each}
					</div>
				</div>
				<p class="line-clamp-2 text-start text-[clamp(0.8rem,2vw,1.1rem)] text-gray-200">
					{posts.description}
				</p>
			</div>
		</div>
	{/each} -->

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

<Navbar />
