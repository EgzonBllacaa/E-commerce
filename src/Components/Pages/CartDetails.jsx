import Hero from "../ProductDetailsComponents/Hero";
import Layout from "../Shared/Layout";
import { useCartStore } from "../stores/UseCartStore";

const ProductDetails = () => {
  const { cart, addToCart, removeFromCart, removeProduct } = useCartStore();
  return (
    <Layout>
      <Hero
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        removeProduct={removeProduct}
      />
    </Layout>
  );
};

export default ProductDetails;
