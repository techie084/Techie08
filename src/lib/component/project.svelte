<script lang="ts">
	import { SlidersHorizontal, Link, ScanEye, AppWindow } from '@lucide/svelte';
</script>

<section class="w-full space-y-4">
	<h2>Projects</h2>
	<div class="flex w-full items-center gap-2 rounded-lg border border-[#26262a] p-2">
		<AppWindow class=" size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-gray-200" aria-hidden="true" />
		<div class="flex w-full flex-col gap-1">
			<div class="flex items-center gap-2">
				<h3 class=" line-clamp-3 break-all text-start">Browser Ext Manager Ui</h3>
				<a
					href="https://github.com/techie084/Animation-Poll"
					target="_blank"
					class=" flex gap-1 rounded-sm bg-[#26262a] p-1 text-xs capitalize text-gray-200 hover:bg-[#393942]"
					aria-hidden="true"><Link class="h-4 w-4" aria-hidden="true" />github</a
				>
				<a
					href="https://animation-poll.vercel.app"
					target="_blank"
					class="flex gap-1 rounded-sm bg-[#26262a] p-1 text-xs capitalize text-gray-200 hover:bg-[#393942]"
					aria-hidden="true"><ScanEye class="h-4 w-4" aria-hidden="true" /> preview</a
				>
			</div>
			<p class="line-clamp-2 text-start text-[clamp(0.8rem,1.8vw,1.1rem)] text-gray-200">
				Browser extension manager for managing extensions
			</p>
		</div>
	</div>

	<div class="flex w-full items-center gap-2 rounded-lg border border-[#26262a] p-2">
		<SlidersHorizontal
			class=" size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-gray-200"
			aria-hidden="true"
		/>
		<div class="flex w-full flex-col gap-1">
			<div class="flex items-center gap-2">
				<h3 class=" line-clamp-3 break-all text-start">Animation Poll</h3>
				<a
					href="https://animation-poll.vercel.app"
					target="_blank"
					class="flex gap-1 rounded-sm bg-[#26262a] p-1 text-xs capitalize text-gray-200 hover:bg-[#393942]"
					aria-hidden="true"><Link class="h-4 w-4" aria-hidden="true" /> github</a
				>
				<a
					href="https://animation-poll.vercel.app"
					target="_blank"
					class="flex gap-1 rounded-sm bg-[#26262a] p-1 text-xs capitalize text-gray-200 hover:bg-[#393942]"
					aria-hidden="true"><ScanEye class="h-4 w-4" aria-hidden="true" /> preview</a
				>
			</div>
			<p class="line-clamp-2 text-start text-[clamp(0.8rem,1.8vw,1.1rem)] text-gray-200">
				Poll system used to voting based on question asked
			</p>
		</div>
	</div>
</section>
