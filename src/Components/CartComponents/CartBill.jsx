import { useState } from "react";

const CartBill = ({ cart, couponCode }) => {
  const [shippingType, setShippingType] = useState(null);

  const baseTotal = cart.reduce(
    (sum, product) => sum + product.quantity * product.price,
    0
  );

  let shippingFee = 0;
  if (shippingType === "flat") {
    shippingFee = 15;
  } else if (shippingType === "percent") {
    shippingFee = baseTotal * 0.25;
  } else {
    shippingFee = 0;
  }
  console.log(cart);
  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            price_data: {
              currency: "eur",
              product_data: {
                name: item.title || item.name,
                // images: [item.images?.[0] || item.image],
                description: item.description,
              },
              unit_amount: item.price, // Convert to cents and ensure it's an integer
            },
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Checkout failed");
      }

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to initiate checkout. Please try again.");
    }
  };

  const discountAmount = couponCode
    ? (baseTotal + shippingFee) * couponCode
    : 0;
  const finalTotal = baseTotal + shippingFee - discountAmount;

  return (
    <div className="xl:w-[30%] min-w-[200px]  w-full border rounded-xl px-6 py-6">
      <h4 className="font-bold text-lg">Cart Summary</h4>
      <div className="flex flex-col gap-4 pt-4 pb-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between  px-4 py-3 border rounded  items-center w-full">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                className=""
                value={"none"}
                checked={shippingType === null}
                onChange={() => {
                  setShippingType(null);
                }}
              />
              <label htmlFor="">Free shipping</label>
            </div>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between  px-4 py-3 border rounded   items-center w-full">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                value={"flat"}
                checked={shippingType === "flat"}
                onChange={() => {
                  setShippingType((prev) => (prev === "flat" ? null : "flat"));
                }}
              />
              <label htmlFor="">Express shipping</label>
            </div>
            <span>+$15.00</span>
          </div>
          <div className="flex justify-between  px-4 py-3 border rounded   items-center w-full">
            <div className="flex items-center gap-3">
              <input
                type="radio"
                value={"percent"}
                checked={shippingType === "percent"}
                onChange={() => {
                  setShippingType((prev) =>
                    prev === "percent" ? null : "percent"
                  );
                }}
              />
              <label htmlFor="">Pick Up</label>
            </div>
            <span>21.00%</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center py-3 border-b border-zinc-400">
            <span className="text-lg">SubTotal</span>
            <span className="font-medium text-lg">${baseTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 items-center">
            <span className="text-lg font-bold ">Total</span>
            <span className="font-medium text-lg">
              ${finalTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-black text-white cursor-pointer w-full text-lg py-2.5 rounded-lg py"
      >
        Checkout
      </button>
    </div>
  );
};

export default CartBill;
