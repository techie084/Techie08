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
