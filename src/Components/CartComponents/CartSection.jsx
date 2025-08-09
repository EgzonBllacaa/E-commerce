import CartProducts from "./CartProducts";
import CartBill from "./CartBill";
import { useCartStore } from "../stores/UseCartStore";

const CartSection = ({ cart, discount }) => {
  const { removeFromCart, addToCart, removeProduct } = useCartStore();

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-bold text-6xl mb-10">Cart</h1>
      <div className="w-full flex flex-wrap items-start gap-16 ">
        <CartProducts
          cart={cart}
          removeProduct={removeProduct}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />

        <CartBill couponCode={discount} cart={cart} />
      </div>
    </div>
  );
};

export default CartSection;
