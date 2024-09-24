<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>


<svelte:head>
    <title>Woolnut Designs</title> 
</svelte:head>

<div class="c-catalog">
	{#each data.products as product}
    <a href="/products/{product.slug}">
      <div class="bodoni-moda-regular c-listing">
      <img class="c-listing__image" src="{product.image_url}" alt="" />
      <div class="c-listing__text">
        <div class="c-listing__name">{product.title}</div>
        <div class="c-listing__price">${@html product.price_in_cents / 100}</div>
      </div>
      </div>
    </a>
	{/each}
</div>
