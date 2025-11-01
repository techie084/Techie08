interface PostMetaData {
	title: string;
	date: string;
	description: string;
	tags: string[];
	author: string;
}

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('$lib/blog-posts/*.md', { eager: true });
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path]) => {
			// must adjust this every time you change the path of the blog posts
			const metadata = Promise<{ metadata: PostMetaData }>;
			// const postSlug = path.slice(0, -3);
			const postSlug = path.split('/').pop()?.replace('.md', '') ?? '';

			return {
				meta: metadata,
				postSlug: postSlug
			};
		})
	);

	return allPosts;
};

export function timeAgo(dateInput: string | number | Date) {
	const date = new Date(dateInput);
	const now = new Date();
	const diffInTime = now.getTime() - date.getTime();
	const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
	const months = (now.getFullYear() - date.getFullYear()) * 12 + (now.getMonth() - date.getMonth());
	const years = Math.floor(months / 12);

	if (years > 0) {
		return years === 1 ? `${years} year ago` : `${years} years ago`;
	} else if (months > 0) {
		return months === 1 ? `${months} month ago` : `${months} months ago`;
	} else if (diffInDays === 0) {
		return 'Today';
	} else {
		return diffInDays === 1 ? `${diffInDays} day ago` : `${diffInDays} days ago`;
	}
}
