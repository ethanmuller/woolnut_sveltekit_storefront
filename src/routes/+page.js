import { products } from './products';
import { PUBLIC_BACKEND_URL } from '$env/static/public';


/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const response = await fetch(PUBLIC_BACKEND_URL + "/store/products")
  try {
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (error) {
    console.error(error.message)
  }
}
