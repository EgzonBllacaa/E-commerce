import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartProduct = ({ removeFromCart, addToCart, removeProduct, product }) => {
  const totalPriceProduct = product.quantity * product.price;

  return (
    <div className="flex justify-between border-b py-10 border-zinc-300 items-center">
      <div className="flex gap-3 items-center">
        {product.images[0] && (
          <img
            src={product.images[0] || "https://via.placeholder.com/150"}
            className="lg:w-32 w-full max-w-[64px] max-h-[64px] max-h-auto "
            alt=""
          />
        )}
        <div className="flex flex-col gap-1">
          <span className="font-bold  text-balance">{product.title}</span>
          <span className="text-zinc-400">
            {product.category.charAt(0).toUpperCase() +
              product.category.slice(1)}
          </span>
          <div
            onClick={() => removeProduct(product.id)}
            className="flex cursor-pointer gap-2 items-center text-zinc-500"
          >
            <FontAwesomeIcon icon={faX} />
            <span>Remove</span>
          </div>
        </div>
      </div>
      <div className="flex gap-25 items-center justify-end flex-wrap">
        <div className="flex items-center  gap-2 px-2 border rounded">
          <button
            className="cursor-pointer hover:bg-zinc-100"
            onClick={() => removeFromCart(product.id)}
          >
            -
          </button>
          <span>{product.quantity}</span>
          <button
            className="cursor-pointer hover:bg-zinc-100"
            onClick={() => addToCart(product)}
          >
            +
          </button>
        </div>
        <div>
          <span className="text-lg">${product.price}</span>
          <span className="hidden lg:block font-bold text-lg">
            ${totalPriceProduct.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
