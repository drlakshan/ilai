export type Institution = {
	name: string;
	badge: string;
	logo?: string;
	type: string;
	note: string;
};

export type InstitutionGroup = {
	title: string;
	intro: string;
	items: Institution[];
};

export const institutionGroups: InstitutionGroup[] = [
	{
		title: 'Universities and faculties',
		intro: 'Selected academic institutions connected through teaching, speaking, faculty development, and scholarly engagement.',
		items: [
			{
				name: 'University of Kelaniya',
				badge: 'UOK',
				logo: '/images/institutions/university-kelaniya.png',
				type: 'University',
				note: 'Academic home in medical education and a recurring context for AI-related talks and collaborations.',
			},
			{
				name: 'University of Colombo',
				badge: 'UOC',
				logo: '/images/institutions/university-colombo.png',
				type: 'University',
				note: 'Included academic presentations and journal-club related AI engagement.',
			},
			{
				name: 'University of Sri Jayewardenepura',
				badge: 'USJ',
				logo: '/images/institutions/university-sri-jayewardenepura.png',
				type: 'University',
				note: 'Panel contributions on AI in research and academic practice.',
			},
			{
				name: 'University of Moratuwa',
				badge: 'UOM',
				logo: '/images/institutions/university-moratuwa.png',
				type: 'University',
				note: 'Research symposium keynote on becoming an infinite learner in the AI era.',
			},
			{
				name: 'Universiti Kebangsaan Malaysia',
				badge: 'UKM',
				logo: '/images/institutions/universiti-kebangsaan-malaysia.png',
				type: 'International faculty',
				note: 'Lecture on NotebookLM for Medical Education and pedagogically-grounded AI workflows.',
			},
		],
	},
	{
		title: 'Medical colleges and professional societies',
		intro: 'Professional bodies, specialist colleges, and societies engaged through talks, workshops, invited sessions, or academic collaboration.',
		items: [
			{
				name: 'Ceylon College of Physicians',
				badge: 'CCP',
				type: 'Medical college',
				note: 'AI-related consensus and professional discourse in medicine.',
			},
			{
				name: 'Sri Lanka College of Paediatricians',
				badge: 'SLCP',
				logo: '/images/institutions/sri-lanka-college-paediatricians.jpg',
				type: 'Medical college',
				note: 'Teaching and public speaking on understanding and using AI intelligently.',
			},
			{
				name: 'The Physiological Society of Sri Lanka',
				badge: 'PSSL',
				logo: '/images/institutions/physiological-society-sri-lanka.ico',
				type: 'Professional society',
				note: 'Workshop on practical AI use for medical education and professional work.',
			},
			{
				name: 'College of Otorhinolaryngologists and Head & Neck Surgeons of Sri Lanka',
				badge: 'CORL',
				logo: '/images/institutions/college-otorhinolaryngologists.png',
				type: 'Specialist college',
				note: 'Specialty-level conversations linking AI with ENT practice and academic medicine.',
			},
			{
				name: 'Sri Lanka College of Radiologists',
				badge: 'SLCR',
				logo: '/images/institutions/sri-lanka-college-radiologists.png',
				type: 'Specialist college',
				note: 'Lecture on radiology learning in the AI era, linking cognitive science and machine learning.',
			},
			{
				name: 'Association of Cardiothoracic and Thoracic Surgeons of Sri Lanka',
				badge: 'ACTS',
				type: 'Professional association',
				note: 'Academic-session engagement on AI and specialist professional development.',
			},
			{
				name: 'Colombo Medical Faculty Alumni Association (CoMSAA)',
				badge: 'COMS',
				logo: '/images/institutions/comsaa.png',
				type: 'Professional association',
				note: 'Presentation on practical AI use cases for medical professionals.',
			},
			{
				name: 'Nutritional Society of Sri Lanka',
				badge: 'NSSL',
				logo: '/images/institutions/nutritional-society-sri-lanka.png',
				type: 'Professional society',
				note: 'Public speaking and academic contribution in AI-related contexts.',
			},
		],
	},
	{
		title: 'Healthcare institutions and systems',
		intro: 'Healthcare organisations where AI connects with practice, governance, education, and implementation.',
		items: [
			{
				name: 'Nawaloka Hospitals PLC',
				badge: 'NH',
				logo: '/images/institutions/nawaloka-hospitals.webp',
				type: 'Healthcare institution',
				note: 'Clinical practice and a separate director role, with past contribution to AI policy. Educational and advisory perspectives do not imply ownership of hospital data-governance operations.',
			},
			{
				name: 'Nawaloka Hospitals Research and Education Foundation',
				badge: 'NHRF',
				type: 'Research and education foundation',
				note: 'Past foundation leadership and teaching contributions, including the 27 May 2026 Learning with AI Grand Rounds. No current headship or operational ownership is implied.',
			},
			{
				name: 'Army Hospital / Military medicine academic sessions',
				badge: 'ARMY',
				type: 'Healthcare and training context',
				note: 'AI in education and training with relevance to military medicine and beyond.',
			},
		],
	},
	{
		title: 'International and cross-sector dialogue',
		intro: 'Settings where AI discussion extends beyond local teaching into broader international and interdisciplinary conversation.',
		items: [
			{
				name: 'WHO Sri Lanka',
				badge: 'WHO',
				type: 'International health organisation',
				note: 'March 2026 discussion on medical humanities and AI; a separate invited WHO-SEARO / WCO-DPRK webinar was delivered on 6 August 2026. These engagements do not imply WHO endorsement, partnership, or validation of ILAI.',
			},
			{
				name: 'Asia Pacific Laryngology Association / LAFINA',
				badge: 'APLA',
				type: 'International academic meeting',
				note: 'International conference presentation connecting AI with ENT practice.',
			},
		],
		},
];
