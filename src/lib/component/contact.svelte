<script lang="ts">
	import Footer from './footer.svelte';
	import { Github } from '@lucide/svelte';
</script>

<section>
	<h2>Find or Contact Me on</h2>
	<div class="flex w-full flex-wrap gap-4">
		<a
			class="flex w-max items-center gap-2 rounded-md bg-slate-800 px-2 py-1 hover:bg-gray-700"
			target="_blank"
			href="https://github.com/techie084"
		>
			<Github /><span>Github</span>
		</a>
	</div>
</section>

<Footer/>
