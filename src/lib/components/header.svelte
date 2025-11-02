<script lang="ts">
	import { MessageCircleMore, FileUser } from '@lucide/svelte';
</script>

<header
	class="flex flex-col-reverse items-start justify-center gap-2"
	data-sveltekit-noscroll
	data-sveltekit-preload-code="eager"
>
	<section>
		<h1
			class="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-4xl
		font-bold text-transparent sm:text-3xl"
		>
			<strong>Emediong Matthew</strong>
		</h1>
		<p class="text-lg">
			<!-- Full-Stack Web Developer specialized in <b>Svelte</b>, <b>Svelte-Kit</b>, <b>TypeScript</b>,
			<b> Node-Js </b> -->
			Frontend Web Developer specialized in <b>Svelte</b>, <b>Svelte-Kit</b>, <b>TypeScript</b>,
			<b>Express.js/Node.js</b>, focused on building Scalable, Performant Web Application With
			clean, maintainable code.
		</p>
		<div class="item-center mt-4 flex gap-4">
			<a
				href="#contact"
				type="button"
				class="relative flex items-center justify-center gap-1 rounded-md border px-2 py-1 text-[clamp(0.8rem,2vw,1rem)] text-gray-200"
				aria-label="aria-label"
			>
				<MessageCircleMore class="py-1" aria-hidden="true" />
				<span>lets talk</span>
				<!-- Ping animation -->
				<span class="absolute right-0 top-0 -mr-1 -mt-1 flex size-3">
					<span
						class=" absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"
					></span>
					<span class=" relative inline-flex size-2.5 rounded-full bg-green-500"></span>
				</span>
			</a>
			<!-- <a
				href="/"
				type="button"
				class="flex items-center justify-center gap-1 rounded-md border px-2 py-1 text-[clamp(0.8rem,2vw,1rem)] text-gray-200"
				aria-label="aria-label"
			>
				<FileUser class="py-1" aria-hidden="true" />
				<span>Resume</span></a
			> -->
		</div>
	</section>
	<img
		src="/avatar.jpg"
		alt="Emediong Matthew's profile"
		class="tw-shadow mb-2 aspect-square w-1/3 rounded-2xl"
		style="color:transparent"
	/>
	<!-- <img
		alt=""
		fetchpriority="high"
		width="100"
		height="100"
		class="tw-shadow aspect-square rounded-2xl bg-[#dcdcdc]"
		src="/avatar.jpg"
	/> -->
</header>
