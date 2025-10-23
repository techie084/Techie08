declare module '*.md ' {
	import { SvelteComponent } from 'svelte';
	export default class Component extends SvelteComponent {}
	export default Component;
	export const metadata: Record<string, unknown>, Components;
}
