import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <ClipLoader className="text-center" color="#36d7b7" size={50} />
    </div>
  );
};

export default Loader;
