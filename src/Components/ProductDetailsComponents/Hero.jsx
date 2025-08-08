import DetailsCard from "./DetailsCard";
import DescriptionsCard from "./DescriptionsCard";
import Layout from "../Shared/Layout";

const Hero = ({ addToCart, removeFromCart }) => {
  return (
    <Layout className="flex flex-col gap-10 py-10">
      <DetailsCard addToCart={addToCart} removeFromCart={removeFromCart} />
      <DescriptionsCard />
    </Layout>
  );
};

export default Hero;
