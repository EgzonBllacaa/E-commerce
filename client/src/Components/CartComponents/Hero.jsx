import React, { useState } from "react";
import CouponCode from "./CouponCode";
import CartSection from "./CartSection";
import { useCartStore } from "../stores/UseCartStore";

const Hero = () => {
  const cart = useCartStore((state) => state.cart);
  const [discount, setDiscount] = useState(null);
  return (
    <div className="py-20 flex flex-col gap-10">
      <CartSection discount={discount} cart={cart} />
      <CouponCode onApplyCoupon={setDiscount} cart={cart} />
    </div>
  );
};

export default Hero;
