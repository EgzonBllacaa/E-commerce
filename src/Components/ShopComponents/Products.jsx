import { useEffect, useState } from "react";
import Layout from "../Shared/Layout";
import ProductsDisplayed from "./ProductsDisplayed";
import FilterSection from "./FilterSection";
import { useQuery } from "@tanstack/react-query";
import UseFetch from "../Shared/UseFetch";
import { CircleLoader } from "react-spinners";
import { useProductStore } from "../stores/UseProductStore";
import Loader from "../Shared/Loader";
import Pagination from "./Pagination";

const CATEGORIES_ALL = "All Rooms";

const CATEGORIES = [
  CATEGORIES_ALL,
  "beauty",
  "fragrances",
  "furniture",
  "groceries",
];

const PRICE_RANGES = [
  { label: "All Price", min: 0, max: Infinity },
  { label: "$0.00 - $9.99", min: 0.0, max: 9.99 },
  { label: "$10.00 - $49.99", min: 10.0, max: 49.99 },
  { label: "$50.00 - $249.99", min: 50.0, max: 249.99 },
  { label: "$250.00 - $500.00", min: 250.0, max: 500.0 },
  { label: "$400.00+", min: 300.0, max: Infinity },
];
const Products = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(CATEGORIES_ALL);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const categoriesUrl = "https://dummyjson.com/products?limit=100";

  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["category details"],
    queryFn: () => UseFetch(categoriesUrl),
  });

  useEffect(() => {
    if (!data || !data.products) return;

    let filtered = [...data.products];

    if (selectedCategories !== CATEGORIES_ALL) {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategories.toLowerCase()
      );
    }

    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter((product) =>
        selectedPriceRanges.some(
          (range) => product.price >= range.min && product.price <= range.max
        )
      );
    }

    setFilteredData(filtered);
    useProductStore.getState().setProducts(filtered);
  }, [data, selectedCategories, selectedPriceRanges]);

  if (isLoading) return <Loader />;
  if (isError) return <p>{error}</p>;
  return (
    <Layout className="pt-16 pb-24">
      <div className="flex flex-col md:flex-row  gap-10">
        <div className="w-full md:max-w-1/4 ">
          <FilterSection
            CATEGORIES={CATEGORIES}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            PRICE_RANGES={PRICE_RANGES}
            selectedPriceRanges={selectedPriceRanges}
            setSelectedPriceRanges={setSelectedPriceRanges}
          />
        </div>

        <ProductsDisplayed
          setSelectedCategories={setSelectedCategories}
          setSelectedPriceRanges={setSelectedPriceRanges}
          CATEGORIES_ALL={CATEGORIES_ALL}
          selectedCategories={selectedCategories}
          filteredData={filteredData}
          data={data}
        />
      </div>
    </Layout>
  );
};

export default Products;

// How the fuck should i be able to add these items to cart????
// answer: by putting cart into state
// i mean i know i built it but i totally forgot it
// i should add zustand in my project than add like an item

//  inside of the zustand or i can do it outside aswell but i need to pass in like a lot of props
// i should just add crud if its not there add it if it is there delete it YEEEY :)
// its not even crud is more like cd create and delete
// but still i don't know how to build it so i am going to ask chatgpt

// yeah simply add two functions one for adding and one for deleting
// for adding you simply  check the cart if it finds the item inside
// and if it doesn't than it adds it otherwise it doesn't do anything

// the remove function takes an id that onclick of a button it refactors
// the cart so that everything now its in the cart except  the one you just clicked
