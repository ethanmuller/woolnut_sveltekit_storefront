import medusa from '$lib/server/medusa'
import { redirect } from '@sveltejs/kit';
import { STRIPE_SECRET_KEY, BASE_URL } from '$env/static/private';
import Stripe from 'stripe'
const stripe = new Stripe(STRIPE_SECRET_KEY)

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    // TODO: check if product is free
    const formData = await request.formData()
    const productHandle = formData.get('handle')
    const product = await medusa.getProduct(productHandle)
    let name = product.title
    if (product?.subtitle) {
      name += ` - ${product.subtitle}`
    }

    if (!product) return;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name,
              images: [product.variants[0].images[0].url],
            },
            unit_amount: product.variants[0].prices[0].amount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['US'],
      },
      success_url: `${BASE_URL}/complete?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${BASE_URL}/cancel`,
    })
    redirect(302, session.url)
    // return { product }
  }
};
