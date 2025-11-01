<script lang="ts">
	import { LibraryBig, ArrowRight } from '@lucide/svelte';

	const blogPost = [
		{
			title: "Setup A Svelte-Kit Project: Beginner's Guide",
			description:
				'A comprehensive guide to setting up a svelte-kit project from installation to development',
			icon: LibraryBig
		}
	];
</script>

<section class="w-full space-y-4">
	<h2 class="flex items-center justify-between">
		Blog <a href="blog"><ArrowRight class="h-6 w-6 cursor-pointer text-gray-200" /></a>
	</h2>
	{#each blogPost as blog}
		<a
			href="blog"
			class="flex w-full cursor-pointer items-center gap-2 rounded-lg border border-[#26262a] p-2"
		>
			<svelte:component
				this={blog.icon}
				class=" size-[clamp(2rem,5vw,2.25rem)] shrink-0 text-gray-200"
				aria-hidden="true"
			/>
			<div class="flex w-full flex-col gap-1">
				<h3 class="line-clamp-2 text-start group-hover:text-gray-200">
					{blog.title}
				</h3>
				<p class="line-clamp-2 text-start text-[clamp(0.8rem,1.8vw,1.1rem)] text-gray-200">
					{blog.description}
				</p>
			</div>
		</a>
	{/each}
</section>

<!-- <script lang="ts">
  import { page } from '$app/stores';
  import { Calendar, Clock, Tag, ChevronLeft } from 'lucide-svelte';

  // Frontmatter data comes from markdown
  export let title: string;
  export let description: string;
  export let date: string;
  export let author: string = 'Wisdom Matthew';
  export let tags: string[] = [];
  export let category: string = 'Article';
  export let image: string | undefined = undefined;
  export let readTime: number = 5;
</script> -->

<!-- <main class="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-20 pb-20">
  <article class="max-w-3xl mx-auto px-4"> -->
<!-- Back Button -->
<!-- <a
	href="/blog"
	class="mb-8 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
>
	<ChevronLeft size={20} />
	Back to Blog
</a> -->

<!-- Featured Image (if exists) -->
<!-- {#if image}
      <img
        src={image}
        alt={title}
        class="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
      />
    {/if} -->

<!-- Header -->
<!-- <header class="mb-12">
      <h1 class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h1>

      <p class="text-xl text-gray-300 mb-6">
        {description}
      </p>

      <div class="flex flex-wrap gap-4 text-gray-400 text-sm mb-6">
        <div class="flex items-center gap-2">
          <Calendar size={18} />
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </div>

        <div class="flex items-center gap-2">
          <Clock size={18} />
          {readTime} min read
        </div>

        <div class="flex items-center gap-2">
          <Tag size={18} />
          {category}
        </div>
      </div> -->

<!-- Tags -->
<!-- <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <span class="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {tag}
          </span>
        {/each}
      </div>
    </header> -->

<!-- Markdown Content -->
<!-- <div class="prose prose-invert prose-lg max-w-none
                prose-headings:font-bold
                prose-headings:text-white
                prose-h1:text-3xl prose-h1:mb-4 prose-h1:mt-8
                prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-6
                prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-4
                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-4
                prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-semibold
                prose-code:text-pink-400 prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-slate-800 prose-pre:border prose-pre:border-slate-700 prose-pre:rounded-lg prose-pre:p-4
                prose-ul:list-disc prose-ul:ml-6
                prose-ol:list-decimal prose-ol:ml-6
                prose-li:text-gray-300
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-400
                prose-img:rounded-lg prose-img:shadow-lg
    ">
      <slot />
    </div> -->

<!-- Author -->
<!-- <div class="border-t border-slate-700 pt-8 mt-12">
      <p class="text-gray-400">
        Written by <span class="font-semibold text-white">{author}</span>
      </p>
    </div>
  </article>
</main>

<style>
  /* Additional custom styles for code blocks */
  :global(.prose pre) {
    overflow-x: auto;
  }

  :global(.prose code) {
    font-size: 0.9em;
  }
</style> -->
