import DetailsCard from "../ProductDetailsComponents/DetailsCard";
import DescriptionsCard from "../ProductDetailsComponents/DescriptionsCard";
import Layout from "../Shared/Layout";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import UseFetch from "../Shared/UseFetch";
import { useProductStore } from "../stores/UseProductStore";
import { useEffect } from "react";
import Loader from "../Shared/Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => UseFetch(`https://dummyjson.com/products/${id}`),
  });

  const setProducts = useProductStore((state) => state.setProducts);

  useEffect(() => {
    if (data) {
      setProducts([data]);
    }
  }, [data, setProducts]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error loading product</p>;

  return (
    <Layout className="flex flex-col gap-10 py-10">
      <DetailsCard />
      <DescriptionsCard />
    </Layout>
  );
};

export default ProductDetails;
