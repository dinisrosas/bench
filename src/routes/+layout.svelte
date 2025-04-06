<script>
	import { partytownSnippet } from '@qwik.dev/partytown/integration';
	let { children } = $props();
</script>

<svelte:head>
	<script>
		// Forward the necessary functions to the web worker layer
		partytown = {
			forward: ['dataLayer.push', 'cookieYes', 'document.cookie']
		};
	</script>

	{@html '<script>' + partytownSnippet({ debug: true }) + '</script>'}

	<script
		id="cookieyes"
		type="text/partytown"
		src="https://cdn-cookieyes.com/client_data/5367f90b13433cd884c0b2e5/script.js"
	></script>
</svelte:head>

{@render children()}
