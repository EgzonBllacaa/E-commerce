import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SlideCart = ({ product, removeFromCart, addToCart, removeProduct }) => {
  console.log(product);
  return (
    <div className="flex flex-col justify-between border-b pb-1 border-zinc-300 w-full sm:w-sm md:w-md">
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-1 py-4">
          <div className="flex gap-2">
            <img
              src={
                (product?.images?.[0] || product?.images?.[1]) ??
                "https://picsum.photos/200"
              }
              className="max-w-12 h-auto"
              alt=""
            />
            <div>
              <span className="font-medium text-zinc-800">{product.title}</span>
              <p className="text-zinc-400">
                Price for each unit:{" "}
                <span className="text-black font-semibold">
                  ${product.price}
                </span>
              </p>
              <div className="flex gap-3 items-center border-red-300">
                <button
                  className="border rounded-3xl px-1.5 cursor-pointer  text-zinc-400"
                  onClick={() => removeFromCart(product.id)}
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  className="border rounded-3xl  px-1.5  cursor-pointer hover:bg-zinc-200  hover:text-black text-zinc-400"
                  onClick={() => addToCart(product)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => removeProduct(product.id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};

export default SlideCart;
