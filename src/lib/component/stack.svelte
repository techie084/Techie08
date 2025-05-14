<script lang="ts">
	const stacks = [
		{
			title: 'SvelteKit',
			link: 'https://svelte.dev',
			image: 'Svelte.svg'
		},
		{
			title: 'JavaScript',
			link: 'https://developer.mozilla.org/en-Us/docs/Web/JavaScript',
			image: 'JavaScript.svg'
		},
		{
			title: 'Git',
			link: 'https://git-smc.com',
			image: 'Git.svg'
		},
		{
			title: 'TailwindCss',
			link: 'https://tailwindcss.com',
			image: 'TailwindCSS-Light.svg'
		},
		{
			title: 'TypeScript',
			link: 'https://Typescriptlang.org',
			image: 'TypeScript.svg'
		},
		{
			title: 'GoLang',
			link: 'https://go.dev',
			image: 'GoLang.svg'
		},
		{
			title: 'NodeJs',
			link: 'https://nodejs.org',
			image: 'NodeJS-Dark.svg'
		},
		{
			title: 'MongoDB',
			link: 'https://mongodb.com',
			image: 'MongoDB.svg'
		},
		{
			title: 'Supabase',
			link: 'https://supabase.com',
			image: 'Supabase-Light.svg'
		}
	];
</script>

<section class="space-y-4">
	<h2>Tech Stack</h2>
	<div class="mt-3 flex w-full flex-wrap gap-2">
		{#each stacks as stack}
			<a
				class=" flex w-max items-center gap-2 rounded-md bg-[#26262a] p-2 text-gray-200"
				target="_blank"
				href={stack.link}
				><img class="h-7 w-7" src={stack.image} alt={stack.image} />{stack.title}
			</a>
		{/each}
	</div>
</section>
