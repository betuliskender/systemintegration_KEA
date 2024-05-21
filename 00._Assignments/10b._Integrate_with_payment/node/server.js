import express from 'express';
import { Stripe } from 'stripe';
const stripe = new Stripe('sk_test_51PIo45ErgKDnToJr543ms1Zkh8Re1UVApuqQopjVUmjE1hpxOGHke1ANVLo15Wbd2GrBShYACSEwWZAzxnfRHq0J007ay5Bi0q');

const app = express();
app.use(express.static('public'));

const localhost = 'http://localhost:8080';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: 'price_1PIoBkErgKDnToJrD9z88QMT',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${localhost}/success.html`,
    cancel_url: `${localhost}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(8080, () => console.log('Running on port 8080'));