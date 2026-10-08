import type { MarkdownInstance } from 'astro';

export type Post = MarkdownInstance<Record<string, any>>;

// Format: /.../src/posts/2019-11-03/first-post.md -> first-post
export function getSlug(post: Post): string {
	const fileName = post.file.split('/').pop() ?? '';
	return fileName.replace('.md', '');
}

// Paper-style short date, e.g. "Nov 3, 2019"
export function formatDate(date: string | Date): string {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
}

// Published posts, newest first
export function getPosts(): Post[] {
	return Object.values(
		import.meta.glob<Post>('../posts/**/*.md', { eager: true }),
	)
		.filter((post) => post.frontmatter.published !== false)
		.sort(
			(a, b) =>
				new Date(b.frontmatter.date).valueOf() -
				new Date(a.frontmatter.date).valueOf(),
		);
}
