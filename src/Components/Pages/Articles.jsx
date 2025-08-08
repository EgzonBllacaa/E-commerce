import { useQuery } from "@tanstack/react-query";
import React from "react";
import UseFetch from "../Shared/UseFetch";
import Loader from "../Shared/Loader";
import ProductsDisplayed from "../ShopComponents/ProductsDisplayed";
import CardCollection from "../Shared/CardCollection";

const Articles = () => {
  const {
    data: posts,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["articles"],
    queryFn: () => UseFetch("https://dummyjson.com/posts"),
  });

  if (isError) return console.log(error);
  if (isLoading) return <Loader />;
  return (
    <>
      <CardCollection data={posts} />
    </>
  );
};

export default Articles;
