import { products } from './products';
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const response = await fetch("http://localhost:9000/store/products")
  try {
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.error(error.message)
  }
}
