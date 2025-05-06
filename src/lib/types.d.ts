export interface Post {
	meta: {
		title: string;
		date: string;
		description: string;
		tags: string[];
		draft?: boolean;
	};
	postSlug: string;
}
