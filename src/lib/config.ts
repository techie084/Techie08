import { dev } from '$app/environment';

export const title = 'Blog';
export const description = 'Random Stuff';
export const url = dev ? 'https://localhost:5173/' : 'https://techie08.vercel.app/Blog';

// Types
export type Categories = 'Svelte-Kit' | ' Svelte';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
};

// Utils
type Datestyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: Datestyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}
