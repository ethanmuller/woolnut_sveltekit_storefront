import { MedusaClient } from 'sveltekit-medusa-client'
import { MEDUSA_BACKEND_URL } from '$env/static/private'

export const load = async function ({params}) {
   const medusa = new MedusaClient(MEDUSA_BACKEND_URL)
  const product = await medusa.getProduct(params.slug)

   return product
}
