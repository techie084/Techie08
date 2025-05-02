<script lang="ts">
	import { UserRoundCog } from '@lucide/svelte';
</script>

<section class="w-full space-y-4">
	<h2>Experience</h2>

	<div class="flex w-full items-center gap-2">
		<UserRoundCog
			class="size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-gray-200"
			aria-hidden="true"
		/>
		<div class="flex flex-col gap-1">
			<div class="flex flex-wrap items-center gap-2">
				<h3 class="text-start">Freelance</h3>
				<span class="rounded-sm bg-[#26262a] p-1 text-xs">Contract</span>
				<span class="rounded-sm bg-[#26262a] p-1 text-xs">January, 2025 - Present</span>
			</div>
			<p class="text-start text-[clamp(1rem,1.18vw,1.1rem)] text-gray-200">
				Front-end Web Developer
			</p>
		</div>
	</div>
</section>
