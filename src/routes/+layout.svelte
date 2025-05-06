<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main id="app">
	{@render children()}
</main>