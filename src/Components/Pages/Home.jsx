import Hero from "../HomeComponents/Hero";
import Featured from "../Shared/Featured";
import ShopByCategories from "../Shared/ShopByCategories";
import { useQuery } from "@tanstack/react-query";
import UseFetch from "../Shared/UseFetch";
import HurryUp from "../HomeComponents/HurryUp";
import ShippingDetails from "../HomeComponents/ShippingDetails";
import ShopCollection from "../HomeComponents/ShopCollection";
import LatestArticles from "../HomeComponents/LatestArticles";
import NewsLetter from "../HomeComponents/NewsLetter";
import Layout from "../Shared/Layout";
import hurryUp from "../../assets/hurryUp.png";
import FullWidth from "../Shared/FullWidth";
import Loader from "../Shared/Loader";

const Home = () => {
  const categoriesUrl = "https://dummyjson.com/products/categories";
  const postsUrl = "https://dummyjson.com/posts?limit=3";
  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
    error: categoriesError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => UseFetch(categoriesUrl),
  });

  const {
    data: Allposts,
    isLoading: postsIsLoading,
    isError: postsIsError,
    error: postsError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => UseFetch(postsUrl),
  });

  if (categoriesIsLoading || postsIsLoading) return <Loader />;
  if (categoriesIsError || postsIsError)
    return (
      <p className="text-red-700">
        {categoriesError?.message || postsError?.message}
      </p>
    );
  // Transform strings into objects
  const slicedCategories = categories.slice(0, 6);
  const shopCollectionData = categories.slice(12, 15);

  return (
    <>
      <Hero />
      <Featured />
      {slicedCategories && (
        <ShopByCategories slicedCategories={slicedCategories} />
      )}
      <FullWidth>
        <HurryUp
          img={hurryUp}
          limited={"Limited Edition"}
          title={"HURRY UP! 30% OFF"}
          callToAction={"Shop now"}
          description={"Find clubs that are right for your game"}
          timer
        />
      </FullWidth>
      <Layout>
        <ShippingDetails />
      </Layout>
      <ShopCollection shopCollectionData={shopCollectionData} />
      <LatestArticles posts={Allposts.posts} />
      <NewsLetter />
    </>
  );
};

export default Home;
