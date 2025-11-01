<script lang="ts">
	import { LayoutGrid, Home, BriefcaseBusiness, LibraryBig, X } from '@lucide/svelte';

	const navigation = $state([
		{
			name: 'Home',
			path: '/',
			icon: Home
		},
		{
			name: 'Project',
			path: '/project',
			icon: BriefcaseBusiness
		},
		{
			name: 'Blog',
			path: '/blog',
			icon: LibraryBig
		}
	]);

	// Navigation state Changes
	let isMenuOpen = $state<boolean>(true);
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<nav
	class="fixed bottom-4 right-4 z-10 flex cursor-pointer gap-2 rounded-full bg-[#26262a] p-4"
	onclick={() => {
		isMenuOpen = !isMenuOpen;
	}}
>
	<button class="h-full w-full transition-transform duration-300" aria-label="Toggle nav">
		{#if isMenuOpen}
			<LayoutGrid class="h-6 w-6 rotate-90 transition-transform" aria-hidden="true" />
		{:else}
			<X class="h-6 w-6 -rotate-90 transition-transform" aria-hidden="true" />
		{/if}
	</button>
	{#if !isMenuOpen}
		<ul
			class="absolute bottom-16 right-0 z-10 flex flex-col gap-2 rounded-lg border border-[#212529] bg-[#0d0d0f] p-1"
		>
			<li class="flex flex-col gap-2">
				{#each navigation as { name, path, icon }}
					<a
						class="flex w-full items-center gap-1 rounded-md bg-[#212121] px-2.5 py-1 text-gray-200"
						aria-current="page"
						href={path}
					>
						<!-- svelte-ignore svelte_component_deprecated -->
						<svelte:component this={icon} class="h-5 w-5" />
						{name}
					</a>
				{/each}
			</li>
		</ul>
	{/if}
</nav>
