import React from "react";
import SectionLine from "./SectionLine";
import { useParams } from "react-router-dom";
import { useProductStore } from "../stores/UseProductStore";
import { useCartStore } from "../stores/UseCartStore";

const DetailsCard = () => {
  const { id } = useParams();
  const products = useProductStore((state) => state.products);
  const { cart } = useCartStore();
  const cartProductQuantity = cart.find((product) => product.id === Number(id));
  console.log(cartProductQuantity);
  const product = products.find((p) => p.id === Number(id));
  const { addToCart, removeFromCart } = useCartStore();
  const discountAmount = product?.price * (product?.discountPercentage / 100);
  const previousPrice = product?.price + discountAmount;
  const formattedDiscount = discountAmount.toFixed(2);

  if (!product) return <p>Loading...</p>;
  console.log(formattedDiscount);
  return (
    <div className="flex items-center justify-center  w-full gap-4 flex-wrap">
      <div className="w-1/2 min-w-[300px]">
        <img className="w-auto" src={product?.images[0]} alt="" />
      </div>
      <div className="w-1/3 min-w-[300px]">
        <div className="flex flex-col gap-7">
          {/* Name of the product and some more info */}
          <div className="flex flex-col gap-2">
            <span className="underline text-sm text-zinc-700">
              {product?.brand}
            </span>
            <h2 className="text-4xl font-medium">{product?.title}</h2>
            <div className="flex items-center flex-wrap gap-4 text-sm">
              <span className="underline">Rate</span>
              <span>Warranty: 1 year</span>
              <span>Origin of brand: USA and Canada</span>
              <span>
                Code: <small className="underline">123124app</small>
              </span>
            </div>
          </div>
          {/* Price */}
          <div className="flex flex-col gap-1">
            <span className="line-through text-zinc-400">
              ${previousPrice.toFixed(2)}
            </span>
            <div className="flex gap-1">
              <span className="font-semibold text-3xl">${product?.price}</span>
              <small className="text-zinc-400 text-sm">
                Including Tax <br /> Without Tax
              </small>
            </div>
            <span className="text-teal-800">
              You save ${formattedDiscount}
              <small className="bg-teal-100 px-2 py-1 rounded-xl">
                {Math.round(product?.discountPercentage)}%
              </small>
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <SectionLine children={"Amount"} />
            <div className="flex items-center gap-3   border-zinc-300">
              <div className="flex border  rounded-md border-zinc-300">
                <span
                  onClick={() => removeFromCart(product?.id)}
                  className="px-3 py-1"
                >
                  -
                </span>
                <span className="px-5 border-r border-l py-1 border-zinc-300">
                  {cartProductQuantity?.quantity || 0}
                </span>
                <span onClick={() => addToCart(product)} className="px-3 py-1">
                  +
                </span>
              </div>
              {product.stock && (
                <span className="text-teal-950 bg-teal-100 px-2 rounded-xl">
                  Currently in stock: {product.stock}
                </span>
              )}
            </div>
            <div className="flex gap-5 items-center">
              <button
                onClick={addToCart}
                className="bg-accent hover:bg-teal-900 hover:text-white cursor-pointer w-full py-3 rounded-3xl"
              >
                Buy now
              </button>
              <button
                onClick={addToCart}
                className="border w-full py-3 rounded-3xl border-zinc-200 hover:border-zinc-500 cursor-pointer"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
