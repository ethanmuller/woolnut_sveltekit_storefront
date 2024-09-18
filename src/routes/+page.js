import { products } from './products';
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	return products;
}
