import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (e) => {
	const { slug } = e.params;
	const response = await fetch(`api/posts/${slug}`);
	const data = await response.json();
	console.log(data);

	return {
		title: data.title,
		body: data.body
	};
};
