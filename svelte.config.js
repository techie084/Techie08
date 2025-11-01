import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
// import { mdsvexConfig } from '/mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
/** @type {import('mdsvex') from "mdsvex"} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
		// experimental: {
		// 	remoteFunctions: true
		// }
	},

	compilerOptions: {
		experimental: {
			async: true
		}
	},

	extensions: ['.svelte', '.md']
};

export default config;
