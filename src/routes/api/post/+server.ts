import { json } from '@sveltejs/kit';
import { fetchMarkdownPosts } from '$lib/Utils';

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const filteredPosts = allPosts.filter((post) => !post.meta);
	const sortedPosts = filteredPosts.sort(
		(first, second) => new Date(second.meta.date).getTime() - new Date(first.meta.date).getTime()
	);

	return json(sortedPosts);
};
