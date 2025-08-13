import Stripe from "stripe";

const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method should only be POST" });
  }
  try {
    if (!req.body.items || !Array.isArray(req.body.items)) {
      return res.status(400).json({ error: "Invalid items data" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items,
      mode: "payment",
      success_url: `${import.meta.env.VITE_CLIENT_URL}/success`,
      cancel_url: `${import.meta.env.VITE_CLIENT_URL}/cancel`,
      //   shipping_address_collection: {
      //     allowed_countries: ["US", "GB", "DE", "FR", "ES", "IT", "AL"], // Add countries you want to support
      //   },
      //   shipping_options: [
      //     {
      //       shipping_rate_data: {
      //         type: "fixed_amount",
      //         fixed_amount: {
      //           amount: 1500, // $15.00
      //           currency: "eur",
      //         },
      //         display_name: "Standard Shipping",
      //         delivery_estimate: {
      //           minimum: {
      //             unit: "business_day",
      //             value: 5,
      //           },
      //           maximum: {
      //             unit: "business_day",
      //             value: 7,
      //           },
      //         },
      //       },
      //     },
      //   ],
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return res.status(500).json({
      error: "Failed to create checkout session",
      details: error.message,
    });
  }
}
