import { MedusaClient } from 'sveltekit-medusa-client'
import { MEDUSA_BACKEND_URL } from '$env/static/private'

export const load = async function () {
   const medusa = new MedusaClient(MEDUSA_BACKEND_URL)
  const products = await medusa.getProducts()

   return {
     products
   }
}
