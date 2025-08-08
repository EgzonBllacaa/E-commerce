import React from "react";

const ButtonCta = ({
  children,
  accent,
  type = "button",
  className = "w-full",
}) => {
  return (
    <button
      type={type}
      className={`${
        accent === true ? "bg-accent" : "bg-black"
      } px-14 py-3 cursor-pointer rounded-lg text-center text-lg font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonCta;
