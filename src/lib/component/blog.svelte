<script lang="ts">
	import { LibraryBig, ArrowRight } from '@lucide/svelte';
</script>

<section class="w-full space-y-4">
	<h2 class="flex items-center justify-between">
		Blog <a href="/blog"><ArrowRight class="h-6 w-6 cursor-pointer text-gray-200" /></a>
	</h2>

	<a href="/blog" class="flex w-full cursor-pointer items-center gap-2 rounded-lg border border-[#26262a] p-2">
		<LibraryBig class=" size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-gray-200" aria-hidden="true" />
		<div class="flex w-full flex-col gap-1">
			<h3 class=" line-clamp-2 break-all text-start hover:cursor-pointer group-hover:text-gray-200">
				Set-up A Svelte-Kit Project: Beginner's Guide
			</h3>
			<p class="line-clamp-2 text-start text-[clamp(0.8rem,1.8vw,1.1rem)] text-gray-200">
				A comprehensive guide to setting up a svelte-kit project from installation to development
			</p>
		</div>
	</a>
</section>
