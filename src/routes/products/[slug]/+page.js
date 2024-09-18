import { products } from '../../products';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const maybeProduct = products.products.find((p) => p.slug === params.slug)

  if (maybeProduct) {
    return maybeProduct
  }
	error(404, 'Not found');
}
