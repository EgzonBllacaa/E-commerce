import React from "react";
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <div>
      <h2>Sorry the payment got cancelled</h2>
      <Link to={"/shop"}>Go back to shop</Link>
    </div>
  );
};

export default CancelPage;
