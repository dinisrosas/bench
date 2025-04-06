<script>
	let { data } = $props();
</script>

<ul>
	{#each data.products as p}
		<li>{p.name}</li>
		<img src={p.image_url} width="200" height="200" alt="" />
		<button>Add to Cart</button>
	{/each}
</ul>
