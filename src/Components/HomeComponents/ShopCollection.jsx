import Layout from "../Shared/Layout";
import ShopCollectionCard from "./ShopCollectionCard";

const ShopCollection = ({ shopCollectionData }) => {
  return (
    <Layout>
      <div className="flex flex-col gap-12">
        <h2 className="text-4xl font-medium">Shop Collection</h2>
        <div className="sm:grid grid-cols-2 grid-rows-2 items-center gap-2">
          {shopCollectionData.map((item) => (
            <ShopCollectionCard item={item} key={item.slug} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShopCollection;
