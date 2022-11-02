import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			// https://dev.to/jiftuq/comment/1k4nb
			// Allow serving files from one level up to the project root
			allow: ['..'],
		},
	},
};

export default config;
