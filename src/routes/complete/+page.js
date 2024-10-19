import { STRIPE_SECRET_KEY } from '$env/static/private';
import Stripe from 'stripe'
const stripe = new Stripe(STRIPE_SECRET_KEY)

export async function load({ url }) {
  const session_id = url.searchParams.get('session_id');
  const session = await stripe.checkout.sessions.retrieve(session_id);
  console.log(session)
  
  return {
    session,
  };
}
