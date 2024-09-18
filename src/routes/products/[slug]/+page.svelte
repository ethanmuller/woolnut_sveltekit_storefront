<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
    <title>{data.title} | Woolnut Designs</title> 
</svelte:head>

<div class="l-product">
  <div class="l-product__left">
    <img class="c-alpha-image" src="{data.image_url}" alt="" />
  </div>
  <div class="l-product__right c-product-detail bodoni-moda-regular">
    <h1 class="c-product-detail__name">{data.title}</h1>
    <div class="c-product-detail__price">${data.price_in_cents / 100}</div>
    <div class="c-product-detail__buy">
    <button class="c-btn tilt-warp">Buy Now</button>
    </div>
  </div>
</div>
