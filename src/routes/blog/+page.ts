import type { Post } from "$lib/config";

export async function load({ fetch }) {
	const response = await fetch("api/post");
	const posts: Post[] = await response.json();
	return { posts };
}
