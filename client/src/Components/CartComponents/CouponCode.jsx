import React, { useState } from "react";

const CouponCode = ({ onApplyCoupon }) => {
  const [couponCode, setCouponCode] = useState("");

  const handleApplyCoupon = () => {
    if (couponCode.trim().toLowerCase() === "egzonbllaca".toLowerCase()) {
      onApplyCoupon(0.5);
    } else {
      onApplyCoupon(null);
    }
  };
  return (
    <div className="flex flex-col relative gap-4 mb-20">
      <div className="flex flex-col gap-1">
        <h5 className="text-2xl font-semibold ">Have a coupon?</h5>
        <p className="text-zinc-500">
          Add your code for an instant cart discount
        </p>
      </div>
      <div className="relative border-2 px-4 py-3 border-zinc-500 text-zinc-500 w-fit ">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Coupon Code"
          className="min-w-80"
        />
        <button
          onClick={handleApplyCoupon}
          className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 text-zinc-400"
        >
          Apply
        </button>
      </div>
      <span className="text-zinc-400">
        hint: add EgzonBllaca Code and you get 50% off
      </span>
    </div>
  );
};

export default CouponCode;
