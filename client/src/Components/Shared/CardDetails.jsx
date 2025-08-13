import { faCartArrowDown, faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useCartStore } from "../stores/UseCartStore";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardDetails = ({ product }) => {
  const { addToCart } = useCartStore();
  // sm:max-w-70 md:max-w-80 w-80 md:min-h-80
  return (
    <div
      key={product.id}
      className="flex flex-col gap-3 w-full  lg:max-w-[330px] 2xl:max-w-[330px] relative"
    >
      <Link to={`/shop/${product.id}`}>
        <img
          src={product.images[0]}
          className="relative w-full   2xl:max-w-110 bg-light-gray "
          alt={product.title}
        />
      </Link>
      <span
        onClick={() => addToCart(product)}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <FontAwesomeIcon icon={faCartArrowDown} />
      </span>
      <div className="flex flex-col gap-2">
        <p className="absolute text-sm sm:text-base uppercase font-bold px-4 bg-white top-4 left-4">
          New
        </p>
        {Math.round(product.discountPercentage) > 0 && (
          <p className="absolute uppercase font-bold px-4 text-sm sm:text-base bg-accent top-12 left-4">
            -{Math.round(product.discountPercentage)}%
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="flex gap-1">
          {Array.from({ length: Math.round(product.rating) }).map(
            (_, index) => (
              <FontAwesomeIcon
                className="text-zinc-600"
                key={index}
                icon={faStar}
              />
            )
          )}
        </span>
        <Link to={`/shop/${product.id}`}>
          <h4 className=" font-semibold text-neutral_07-100">
            {product.title}
          </h4>
        </Link>
        <div className="flex justify-between">
          <span className="text-sm font-semibold text-black">
            ${product.price}
          </span>
          <span>{product.warrantyInformation}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
