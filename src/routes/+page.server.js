import medusa from '$lib/server/medusa'

export const load = async function () {
  const products = await medusa.getProducts()

   return {
     products
   }
}
