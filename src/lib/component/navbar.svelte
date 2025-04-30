<script lang="ts">
	// import { fade } from 'svelte/motion';
	import { LayoutGrid, Home, Wrench, LibraryBig } from '@lucide/svelte';

	let isMenuOpen = $state(false);

	const navigation = $state([
		{
			name: 'Home',
			path: '/',
			icon: Home
		},
		{
			name: 'Projects',
			path: '/projects',
			icon: Wrench
		},
		{
			name: 'Blog',
			path: '/blog',
			icon: LibraryBig
		}
	]);
</script>

<nav class="fixed bottom-4 right-4 z-10 flex cursor-pointer gap-2 rounded-full bg-stone-900 p-4">
	<LayoutGrid class="shrink-0" aria-hidden="true" />
	<ul class="rounded-3 absolute bottom-14 right-0 z-10 flex flex-col gap-2 border p-2">
		{#if isMenuOpen}
			<li>
				{#each navigation as nav}
					{nav.icon}
					<a href={nav.path}>{nav.name}</a>
				{/each}
			</li>
		{/if}
	</ul>
</nav>
