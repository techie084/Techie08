<script lang="ts">
	import { SlidersHorizontal, AppWindow, ArrowRight, Github, ArrowUpRight } from '@lucide/svelte';

	interface Project {
		// id: number;
		title: string;
		description: string;
		// lonngDescripton: string;
		// image: string;
		tags: (typeof Github | typeof ArrowUpRight)[];
		icon: typeof SlidersHorizontal | typeof AppWindow;
		links: string[];
	}

	const projects: Project[] = [
		{
			title: 'Browser Extension Manager UI',
			description: 'Browser extension manager for managing extensions',
			icon: AppWindow,
			links: ['https://browser-extension-ui.vercel.app', 'https://github.com/techie084'],
			tags: [Github, ArrowUpRight]
		},
		{
			title: 'Animation Poll',
			description: 'Poll system used to vote based on question asked',
			icon: SlidersHorizontal,
			links: ['https://animation-poll.vercel.app', 'https://github.com/techie084'],
			tags: [Github, ArrowUpRight]
		}
	];
</script>

<section class="w-full space-y-4">
	<h2 class="flex items-center justify-between">
		Projects <a href="/project"><ArrowRight class="h-6 w-6 cursor-pointer text-gray-200" /></a>
	</h2>

	{#each projects as project}Analytics.svelte
		<div class="flex w-full items-center gap-2 rounded-lg border border-[#26262a] p-2">
			<svelte:component
				this={project.icon}
				class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-gray-200"
			/>
			<div class="flex w-full flex-col gap-1">
				<div class="flex items-center justify-between gap-2">
					<h3 class="line-clamp-3 text-start">{project.title}</h3>
					<div class="flex justify-between gap-2">
						{#each project.links as link, i}
							<a
								href={link}
								target="_blank"
								class="flex items-center gap-1 rounded-sm text-xs capitalize text-gray-200"
								aria-hidden="true"
							>
								{#each project.tags as tag, j}
									{#if i === j}
										<svelte:component this={tag} class="h-5 w-5" />
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
