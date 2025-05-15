<script lang="ts">
	import { AppWindow, SlidersHorizontal, Github, ArrowUpRight } from '@lucide/svelte';
	import * as index from '$lib/index';
	import Navbar from '$lib/component/navbar.svelte';
	import Seo from '$lib/component/shared/seo.svelte';

	const projects = [
		{
			title: 'Browser Extension Manager UI',
			description: 'Browser extension manager for managing extensions',
			links: ['https://browser-extension-manager-ui.vercel.app', 'https://github.com/techie084'],
			icons: AppWindow,
			linkIcons: [Github, ArrowUpRight]
		},
		{
			title: 'Animation Poll',
			description: 'Poll system used to vote based on question asked',
			links: ['https://animation-poll.vercel.app', 'https://github.com/techie084'],
			icons: SlidersHorizontal,
			linkIcons: [Github, ArrowUpRight]
		}
	];
</script>

<Seo
	title="{index.title} | {index.description[2]}"
	description="Projects section | Wisdom Matthew"
	url="https://techie08.vercel.app/projects"
	image="https://techie08.vercel.app/"
/>

<section class=" h-full w-full space-y-4">
	<h1
		class="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl text-transparent sm:text-3xl"
	>
		<strong> Projects</strong>
	</h1>

	{#each projects as project}
		<div class="flex w-full items-center gap-4 rounded-lg border border-[#26262a] p-2">
			<svelte:component this={project.icons} class="size-[clamp(2.5rem,5vw,2.25rem)] shrink-0" />
			<div class="flex w-full flex-col gap-1">
				<div class="flex items-center justify-between gap-2">
					<h3 class="line-clamp-3 text-start">{project.title}</h3>
					<div class="flex">
						{#each project.links as link, i}
							<a class="flex size-[clamp(2rem,5vw,2.25rem)] shrink-0" href={link} target="_blank">
								{#each project.linkIcons as icon, j}
									{#if i === j}
										<svelte:component this={icon} />
									{/if}
								{/each}
							</a>
						{/each}
					</div>
				</div>
				<p class="line-clamp-2 text-start text-[clamp(0.8rem,2vw,1.1rem)] text-gray-200">
					{project.description}
				</p>
			</div>
		</div>
	{/each}
</section>

<Navbar />
