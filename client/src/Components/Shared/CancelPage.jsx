import React from "react";
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
      <h2 className="text-4xl font-medium ">Sorry the payment got cancelled</h2>
      <Link to={"/shop"} className="hover:underline">
        Go back to shop
      </Link>
    </div>
  );
};

export default CancelPage;
