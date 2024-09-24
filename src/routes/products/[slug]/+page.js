import { error } from '@sveltejs/kit';
import Medusa from "@medusajs/medusa-js";

const regionId = "reg_01J8JG4VNPHQZD7HQHBMXQNFWS";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const response = await fetch("http://localhost:9000/store/products")

  if (response.ok) {
    const json = await response.json();

    const matchHandle = json.products.find((p) => params.slug == p.handle)
    if (matchHandle) {
      return matchHandle;
    }
  }

  // const products = await medusa.products.list({ handle: params.slug });

  // const maybeProduct = products.products.find((p) => p.slug === params.slug)

  // if (maybeProduct) {
  //   return maybeProduct
  // }
  // if (products.length > 0) {
  //   return products[0]
  // }
	error(404, 'Not found');
}
