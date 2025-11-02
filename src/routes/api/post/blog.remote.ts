import { prerender } from '$app/server';
import { posts } from '/home/emediong/Public/my-portfolio/src/routes/blog/data.ts';
// src/routes/blog/data.ts
export const getPosts = prerender(async () => {
	const post = posts.map((post) => ({
		slug: post.slug,
		title: post.title,
		content: post.content
	}));

	return post;
});

// export const blogPost = query(async ({ params }) => {
// 	const post = await import(`../../lib/posts/${params.slug}.md`);

// 	return {
// 		content: post.default,
// 		metadata: post.metadata
// 	};
// });

// 	const sortedPosts = filteredPosts.sort(
// 		(first, second) => new Date(second.meta.date).getTime() - new Date(first.meta.date).getTime()
// 	);
// 	return json(sortedPosts);
