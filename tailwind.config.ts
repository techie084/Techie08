import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			Overpass: 'Overpass'
		},

		extend: {
			color: {
				brand: {
					background: '#151615',
					textGray: '#b4b6b8',
					link: '#6eb8ff',
					text: '#DBDFDF',
					elevate: '#27272A'
				}
			}
		}
	},

	plugins: [typography]
} satisfies Config;
