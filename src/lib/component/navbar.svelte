<script lang="ts">
	import { fly, fade } from 'svelte/transition';
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
	<button class="h-full w-full">
		{#if isMenuOpen}
			<span class="flex h-6 w-6 shrink-0 items-center" out:fade={{ duration: 0 }}>
				<LayoutGrid aria-hidden="true" />
			</span>
		{:else}
			<span
				class="flex h-6 w-6 shrink-0 items-center justify-center"
				in:fly={{ y: 5, duration: 20 }}
			>
				<X aria-hidden="true" />
			</span>
		{/if}
	</button>
	{#if !isMenuOpen}
		<ul
			class="absolute bottom-16 right-0 z-10 flex flex-col gap-2 rounded-lg border border-[#212529] bg-[#26262a] p-2 ease-in-out"
		>
			<li class="flex flex-col gap-2">
				{#each navigation as nav}
					<a
						class="flex w-full items-center gap-2 rounded-md bg-[#37373c] px-2 py-1 text-gray-200"
						aria-current="page"
						href={nav.path}><svelte:component this={nav.icon} /> {nav.name}</a
					>
				{/each}
			</li>
		</ul>
	{/if}
</nav>

<!-- <Home /> -->
<!-- <LibraryBig /> -->
<!-- <Wrench /> -->
