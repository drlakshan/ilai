export type WritingPlatform = {
	title: string;
	description: string;
	url: string;
	cta: string;
};

export type FeaturedWriting = {
	title: string;
	type: string;
	publication: string;
	description: string;
	url: string;
};

export const writingPlatforms: WritingPlatform[] = [
	{
		title: 'Substack',
		description: 'The main public writing home for reflections on AI, learning, medicine, and professional judgement.',
		url: 'https://drlakshan.substack.com/',
		cta: 'Visit Substack',
	},
	{
		title: 'LinkedIn',
		description: 'A place for shorter public notes, professional updates, talks, and ongoing conversation.',
		url: 'https://www.linkedin.com/in/mtd-lakshan-78738213/',
		cta: 'Follow on LinkedIn',
	},
];

export const featuredWriting: FeaturedWriting[] = [
	{
		title: 'Branching Learning Hypothesis',
		type: 'Academic writing',
		publication: 'SSRN',
		description: 'A more formal expression of thinking around learning, structure, and how knowledge develops.',
		url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5741222',
	},
	{
		title: 'Obsidian: Thinking Space versus Second Brain',
		type: 'Essay',
		publication: 'Medium',
		description: 'A reflection on knowledge work, cognition, and the distinction between storing information and cultivating thought.',
		url: 'https://medium.com/@lakshent/obsidian-understanding-the-distinction-thinking-space-versus-second-brain-320f15372d7e',
	},
	{
		title: 'Infinite Learner Substack',
		type: 'Public writing stream',
		publication: 'Substack',
		description: 'Ongoing writing on AI, education, professional practice, and how to think well in an age of powerful tools.',
		url: 'https://drlakshan.substack.com/',
	},
];
