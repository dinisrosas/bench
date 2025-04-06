import { sveltekit } from '@sveltejs/kit/vite';
import { partytownVite } from '@qwik.dev/partytown/utils';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		partytownVite({
			dest: path.join(__dirname, 'build', '~partytown')
		})
	]
});
