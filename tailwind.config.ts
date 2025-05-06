import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			Overpass: 'Overpass'
		}
	},

	plugins: [typography]
} satisfies Config;
