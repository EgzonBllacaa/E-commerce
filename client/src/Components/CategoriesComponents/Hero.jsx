import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import UseFetch from "../Shared/UseFetch";
import CardDetails from "../Shared/CardDetails";
import ButtonCta from "../Shared/ButtonCta";
import Loader from "../Shared/Loader";

const Hero = () => {
  const { name } = useParams();
  console.log(name);
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["category", name],
    queryFn: () => UseFetch(`https://dummyjson.com/products/category/${name}`),
  });

  console.log(products);
  console.log(name);
  if (isLoading) return <Loader />;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="py-12">
      <div className="flex items-center justify-between gap-4 mb-10">
        <h1 className="text-2xl font-bold">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h1>
        <Link to={"/"}>
          <ButtonCta className="text-white">Go back</ButtonCta>
        </Link>
      </div>
      <div className="flex items-center flex-wrap gap-13">
        {products.products.map((product) => (
          <CardDetails product={product} />
        ))}
      </div>
    </div>
  );
};

export default Hero;
