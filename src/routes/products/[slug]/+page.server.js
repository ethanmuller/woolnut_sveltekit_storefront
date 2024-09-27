import medusa from '$lib/server/medusa'

export const load = async function ({params}) {
  const product = await medusa.getProduct(params.slug)

   return product
}
