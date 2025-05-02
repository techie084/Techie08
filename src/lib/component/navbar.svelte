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

	// const navChange ()=>{

	// }
</script>

<nav class="fixed bottom-4 right-4 z-10 flex cursor-pointer gap-2 rounded-full bg-[#26262a] p-4">
	<LayoutGrid class="inline-block h-5 w-5 shrink-0" aria-hidden="true" />
	<!-- <Home /> -->
	<!-- <LibraryBig /> -->
	<!-- <Wrench /> -->
	<ul
		class="rounded-3 absolute bottom-14 right-0 z-10 flex flex-col gap-2 border border-[#212529] bg-[#212221] p-2"
	>
		{#if isMenuOpen}
			<li>
				{#each navigation as nav}
					{nav.icon}
					<a
						class="flex w-full items-center gap-2 rounded-md bg-[#26262a] px-2 py-1 text-gray-200"
						aria-current="page"
						href={nav.path}>{nav.name}</a
					>
				{/each}
			</li>
		{/if}
	</ul>
</nav>
