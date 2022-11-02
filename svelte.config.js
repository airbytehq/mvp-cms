import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';


// mdsvex config
const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	layout: {
		_: './src/mdsvexlayout.svelte' // default mdsvex layout
	},
};


/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.html', ...mdsvexConfig.extensions],
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
