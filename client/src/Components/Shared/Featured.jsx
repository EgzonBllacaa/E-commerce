import { useQuery } from "@tanstack/react-query";
import UseFetch from "./UseFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Circles } from "react-loader-spinner";
import { ClipLoader } from "react-spinners";
import {
  faCircle,
  faDotCircle,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const Featured = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => UseFetch("https://dummyjson.com/products?limit=15"),
  });
  // i get the products
  const products = data?.products || [];
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const endIndex = page * itemsPerPage + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);
  if (isLoading)
    return (
      <div className="flex justify-center">
        {/* <Circles color="text-black" /> */}
        <Loader />
      </div>
    );

  return (
    <Layout>
      <div className="py-12 flex flex-col gap-12">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-medium">Featured</h2>
          <div className="flex items-center gap-2 cursor-pointer">
            {Array.from({ length: totalPages }).map((_, i) => (
              <FontAwesomeIcon
                onClick={() => setPage(i)}
                key={i}
                icon={page === i ? faCircle : faDotCircle}
              />
            ))}
          </div>
        </div>
        <div className="flex overflow-x-auto  justify-center gap-6 ">
          {paginatedProducts.length === 0 ? (
            <p>There are no products yet.</p>
          ) : (
            paginatedProducts.map((product) => (
              <div
                key={product.id}
                className="min-w-64 max-w-80 w-full flex flex-col  gap-3"
              >
                <Link to={`/shop/${product.id}`}>
                  <div className="bg-light-gray">
                    <img
                      className="max-w-full"
                      src={product.images[0]}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col gap-1 font-semibold">
                    <span>
                      {Array.from({ length: Math.round(product.rating) }).map(
                        (_, i) => (
                          <FontAwesomeIcon
                            className="text-zinc-600"
                            key={i}
                            icon={faStar}
                          />
                        )
                      )}
                    </span>
                    <h4 className="font-semibold leading-7">{product.title}</h4>
                    <span className="text-sm leading-5 font-semibold">
                      ${product.price}
                    </span>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Featured;
