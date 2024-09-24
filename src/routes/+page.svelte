<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>


<svelte:head>
    <title>Woolnut Designs</title> 
</svelte:head>

<div class="c-catalog">
	{#each data.products as product}
    <a href="/products/{product.handle}">
      <div class="bodoni-moda-regular c-listing">
      <img class="c-listing__image" src="{product.variants[0].images[0].url}" alt="" />
      <div class="c-listing__text">
        <div class="c-listing__name">{product.title}</div>
        <div class="c-listing__price">${@html product.variants[0].prices[0].amount / 100}</div>
      </div>
      </div>
    </a>
	{/each}
</div>
