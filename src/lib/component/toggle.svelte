<!-- <script lang="ts">
	import { Moon, Sun } from '@lucide/svelte';
	import { fly } from 'svelte/transition';
	import { theme } from './shared/theme.svelte';
</script>

<button
	onclick={theme.toggle}
	aria-label="toggle theme"
	class="fixed right-4 top-4 z-10 overflow-hidden rounded-lg border-none bg-[#26262a] p-2 font-[inherit] shadow-none"
>
	{#if theme.current === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun /> <span>light</span>
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
			<span>Dark</span>
		</div>
	{/if}
</button>

<style>
	* {
		display: flex;
		gap: 0.5rem;
	}
</style> -->
