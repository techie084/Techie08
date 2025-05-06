<script lang="ts">
	import Seo from '$lib/component/shared/seo.svelte';
	import * as index from '$lib/index';
	let { data } = $props();
</script>

<Seo title="{index.title} - {data.title}" description={data.desc} />
