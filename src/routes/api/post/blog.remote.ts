import { query } from '$app/server';
import { posts } from './data';

export const getPosts = query(async () => {
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
