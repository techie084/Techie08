<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<main id="app" class="font-Overpass">
	{@render children()}
</main>
