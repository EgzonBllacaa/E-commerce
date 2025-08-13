import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// STRIPE API endpoint
console.log(process.env.STRIPE_SECRET_KEY);
app.post("/api/checkout", async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!req.body.items || !Array.isArray(req.body.items)) {
    return res.status(400).json({ error: "Invalid items data" });
  }

  try {
    console.log(req.body.items.map((item) => item.price_data.product_data));
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: req.body.items,
      mode: "payment",
      success_url: `${process.env.VITE_CLIENT_URL}/success`,
      cancel_url: `${process.env.VITE_CLIENT_URL}/cancel`,
    });
    const { url } = session;
    res.status(200).json({ url });
  } catch (error) {
    console.error("Stripe error:", error);
    return res.status(500).json({
      error: "Internal server error",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
