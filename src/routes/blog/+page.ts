// import type { fetchMarkdownPosts } from '$lib/Utils';

export async function load({ fetch }) {
	const response = await fetch('api/post');
	const posts = await response.json();
	return { posts };
}
