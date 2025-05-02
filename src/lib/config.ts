import { dev } from '$app/environment';

export const title = 'Wisdom Blogs';
export const description = 'Random Stuff';
export const url = dev ? 'https://localhost:5173/' : 'https://techie08.vercel.app/Blog';

export type Categories = 'Svelte-Kit' | ' Svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};
