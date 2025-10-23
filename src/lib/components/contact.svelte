<script lang="ts">
	import Footer from './footer.svelte';
	import { Twitter, Github, Facebook, Instagram, Mail } from '@lucide/svelte';

	const Socials = [
		{
			title: 'Mail',
			link: 'mailto:wisdommathew08@gmail.com',
			icon: Mail
		},
		{
			title: 'Twitter',
			link: 'https://x.com/techie084',
			icon: Twitter
		},
		{
			title: 'Github',
			link: 'https://github.com/techie084',
			icon: Github
		},
		{
			title: 'Facebook',
			link: 'https://facebook.com/techie084',
			icon: Facebook
		},
		{
			title: 'Instagram',
			link: 'https://instagram.com/techiee08',
			icon: Instagram
		}
	];
</script>

<section id="contact" class="w-full space-y-4">
	<h2>Socials</h2>

	<section class="flex w-full flex-wrap gap-3">
		{#each Socials as social}
			<a
				class="flex w-max items-center justify-center gap-2 rounded-md bg-[#26262a] p-2 text-gray-200"
				href={social.link}
				target="_blank"
				aria-hidden="true"
				><svelte:component this={social.icon} /> <span>{social.title}</span>
			</a>
		{/each}
	</section>
</section>

<Footer />
