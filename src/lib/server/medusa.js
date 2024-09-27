import { MedusaClient } from 'sveltekit-medusa-client'
import { MEDUSA_BACKEND_URL } from '$env/static/private'
export default new MedusaClient(MEDUSA_BACKEND_URL)

