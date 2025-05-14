<script lang="ts">
	import { LayoutGrid, Home, Wrench, LibraryBig, X } from '@lucide/svelte';

	const navigation = $state([
		{
			name: 'Home',
			path: '/',
			icon: Home
		},
		{
			name: 'Project',
			path: '/project',
			icon: Wrench
		},
		{
			name: 'Blog',
			path: '/blog',
			icon: LibraryBig
		}
	]);

	// Navigation state Changes
	let isMenuOpen = $state(true);
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
			<!-- <span class="flex h-6 w-6 shrink-0 items-center"> -->
				<LayoutGrid class="h-6 w-6 rotate-90 transition-transform" aria-hidden="true" />
			<!-- </span> -->
		{:else}
			<!-- <span class="flex h-6 w-6 shrink-0 items-center justify-center"> -->
				<X class="h-6 w-6 -rotate-90 transition-transform" aria-hidden="true" />
			<!-- </span> -->
		{/if}
	</button>
	{#if !isMenuOpen}
		<ul
			class="absolute bottom-16 right-0 z-10 flex flex-col gap-2 rounded-lg border border-[#212529] bg-[#0d0d0f] p-2"
		>
			<li class="flex flex-col gap-2">
				{#each navigation as { name, path, icon }}
					<a
						class="flex w-full items-center gap-2 rounded-md bg-[#37373c] px-2 py-1 text-gray-200"
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
