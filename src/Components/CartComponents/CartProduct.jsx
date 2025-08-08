import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = ({ removeFromCart, addToCart, removeProduct, product }) => {
  const totalPriceProduct = product.quantity * product.price;

  return (
    <div className="flex justify-between border-b py-10 border-zinc-300 items-center">
      <div className="flex gap-3 ">
        <img src={product.images[0]} className="w-32" alt="" />
        <div className="flex flex-col gap-1">
          <span className="font-bold">{product.title}</span>
          <span className="text-zinc-400">
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </span>
          <div className="flex gap-2 items-center text-zinc-500">
            <FontAwesomeIcon icon={faX} />
            <span onClick={() => removeProduct(product.id)}>Remove</span>
          </div>
        </div>
      </div>
      <div className="flex gap-25 items-center">
        <div className="flex items-center gap-2 px-2 border rounded">
          <button onClick={() => removeFromCart(product.id)}>-</button>
          <span>{product.quantity}</span>
          <button onClick={() => addToCart(product)}>+</button>
        </div>
        <span className="text-lg">${product.price}</span>
        <span className="font-bold text-lg">
          ${totalPriceProduct.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartProduct;
