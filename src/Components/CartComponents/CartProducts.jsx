import CartProduct from "./CartProduct";

const CartProducts = ({
  removeFromCart,
  addToCart,
  removeProduct,
  totalPrice,
  cart,
}) => {
  return (
    <div className="w-[60%] min-w-[300px] ">
      <div className="flex justify-between items-center text-lg font-bold border-b border-zinc-300 pb-6 ">
        <p>Product</p>
        <div className="flex gap-20 items-center">
          <span>Quantity</span>
          <span>Price</span>
          <span>Total</span>
        </div>
      </div>
      {cart.map((product) => (
        <CartProduct
          key={product.id}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          removeProduct={removeProduct}
          product={product}
          totalPrice={totalPrice}
        />
      ))}
    </div>
  );
};

export default CartProducts;
