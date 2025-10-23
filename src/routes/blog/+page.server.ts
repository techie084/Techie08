import { posts } from './data.js';

export const load = async () => {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			content: post.content
		}))
	};
};
