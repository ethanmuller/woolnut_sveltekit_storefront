<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
    <title>{data.title} | Woolnut Designs</title> 
</svelte:head>

<div class="l-product">
  <div class="l-product__left">
    <img class="c-alpha-image" src="{data.variants[0].images[0].url}" alt="" />
  </div>
  <div class="l-product__right c-product-detail bodoni-moda-regular">
    <h1 class="c-product-detail__name">{data.title}</h1>
    <div class="c-product-detail__price">${@html data.variants[0].prices[0].amount / 100}</div>
    <div class="c-product-detail__buy">
    <form action="/checkout" method="POST">
      <input type="hidden" name="handle" value="{data.handle}" />
        <input type="submit" class="c-btn tilt-warp" value="Buy Now" />
    </form>
    </div>
  </div>
</div>
