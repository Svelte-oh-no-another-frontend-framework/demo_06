import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.svelte'], // Add '.ts' here
	},
});
