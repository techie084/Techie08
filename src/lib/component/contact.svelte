<script lang="ts">
	import Footer from './footer.svelte';
	import { Twitter, Github, Facebook, Instagram, Mail } from '@lucide/svelte';
</script>

<section class="w-full space-y-4">
	<h2>Socials</h2>
	<div class="flex w-full flex-wrap gap-3">
		<a
			class="flex w-max items-center gap-2 rounded-md bg-[#26262a] p-2 text-gray-200"
			href="mailto:@wisdommatthew08@gmail.com"
			aria-hidden="true"
			><Mail /> <span>Mail</span>
		</a>
		<a
			class="flex w-max items-center gap-2 rounded-md bg-[#26262a] p-2 text-gray-200"
			href="https://x.com/techie084"
			aria-disabled="true"
			><Twitter /> <span>Twitter</span>
		</a>
		<a
			class="flex w-max items-center gap-2 rounded-md bg-[#26262a] p-2 text-gray-200"
			target="_blank"
			href="https://github.com/techie084"
			aria-hidden="true"
		>
			<Github /><span>Github</span>
		</a>
		<a
			class="flex w-max items-center gap-2 rounded-md bg-[#26262a] p-2 text-gray-200"
			target="_blank"
			href="https://facebook.com/itzking.wisy"
			aria-hidden="true"
		>
			<Facebook /><span>Facebook</span>
		</a>
		<a
			class="flex w-max items-center gap-2 rounded-md bg-[#26262a] p-2 text-gray-200"
			target="_blank"
			href="https://instagram.com/techiee08"
			aria-hidden="true"
		>
			<Instagram /><span>Instagram</span>
		</a>
	</div>
</section>

<Footer />
