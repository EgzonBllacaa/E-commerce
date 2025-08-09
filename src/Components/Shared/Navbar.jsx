import { useRef, useState } from "react";
import Cart from "../../assets/Cart.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Search from "../../assets/search.png";
import { Link } from "react-router-dom";
import Layout from "./Layout.jsx";
import { useQuery } from "@tanstack/react-query";
import UseFetch from "./UseFetch.jsx";
import { useCartStore } from "../stores/UseCartStore.js";
import SlideCart from "./SlideCart.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { useProductStore } from "../stores/UseProductStore.js";

const Navbar = () => {
  const searchRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchedValue, setSearchedValue] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const { cart, addToCart, removeFromCart, resetCart, removeProduct } =
    useCartStore();

  // total functions
  const totalProducts = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const { data } = useQuery({
    queryKey: ["search"],
    queryFn: () => UseFetch("https://dummyjson.com/products"),
  });

  // Search
  const handleSearch = () => {
    if (!searchValue.trim() || data.products.length === 0) return;
    const filtered = data.products.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(filtered);
    setSearchedValue(filtered);
  };

  const toggleSearch = () => {
    setShowSearch((prev) => !prev);
    setSearchValue("");
  };
  return (
    <Layout>
      <div className="xl:grid xl:grid-cols-3 xl:w-full flex items-center  justify-between py-[18px]">
        <div className="flex items-center gap-1">
          <button
            className="cursor-pointer block sm:hidden"
            onClick={() => setHamburgerMenu((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Link to={"/"}>
            <h2 className="text-2xl font-medium xl:justify-self-start cursor-pointer">
              3legant.
            </h2>
          </Link>
        </div>
        {/* Mobile screen size */}
        <ul
          className={`sm:hidden flex flex-col items-start gap-10 xl:justify-center absolute px-10 h-full w-full z-50 -ml-10 transition-transform duration-200 ease-in py-5 top-16 ${
            hamburgerMenu ? "translate-x-0 bg-white " : "-translate-x-140"
          }`}
        >
          <div className="relative">
            <div className="absolute">
              <input
                ref={searchRef}
                className="border border-zinc-700 rounded py-1 pl-10"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-2 top-2"
              />
            </div>
            {searchValue.trim() && (
              <div className="absolute top-8 max-h-[500px] overflow-hidden overflow-y-auto z-50 ">
                {searchedValue.map((results) => (
                  <Link
                    to={`/shop/${results.id}`}
                    onClick={() => {
                      setSearchValue("");
                      setHamburgerMenu(false);
                    }}
                  >
                    <div className="flex text-white cursor-pointer bg-zinc-800 hover:bg-zinc-900 pr-2 w-[245px] items-center justify-between">
                      <img
                        src={results.images[0]}
                        className="max-w-16"
                        alt=""
                      />
                      <div className="flex items-end flex-col">
                        <p className=" py-2">
                          {results.title.split(" ").slice(0, 2).join(" ")}
                        </p>
                        <p className="hover:text-green-300">${results.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <li className="hover:text-teal-800 border-b border-zinc-200 w-full pb-2">
            <Link to={"/"} onClick={() => setHamburgerMenu(false)}>
              Home
            </Link>
          </li>
          <li className="hover:text-teal-800 border-b border-zinc-200 w-full pb-2">
            <Link to={"/shop"} onClick={() => setHamburgerMenu(false)}>
              Shop
            </Link>
          </li>
          <li className="hover:text-teal-800 border-b border-zinc-200 w-full pb-2">
            <Link to={"/articles"} onClick={() => setHamburgerMenu(false)}>
              Articles
            </Link>
          </li>
          <li className="hover:text-teal-800 border-b border-zinc-200 w-full pb-2">
            <Link to={"/contact-us"} onClick={() => setHamburgerMenu(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Desktop screen size */}
        <ul className="sm:flex flex-wrap items-center gap-10 xl:justify-self-center hidden ">
          <li className="hover:text-teal-800">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="hover:text-teal-800">
            <Link to={"/shop"}>Shop</Link>
          </li>
          <li className="hover:text-teal-800">
            <Link to={"/articles"}>Articles</Link>
          </li>
          <li className="hover:text-teal-800">
            <Link to={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
        <div className="flex items-center relative sm:gap-2  xl:justify-self-end">
          <div className="flex gap-4">
            <img
              onClick={() => setShowCart((prev) => !prev)}
              className="min-w-5  cursor-pointer"
              src={Cart}
              alt=""
            />
            {showCart && cart.length > 0 && (
              <div className="absolute bg-white flex flex-col justify-between overflow-y-auto top-10 right-0 px-4 z-30">
                <div className="flex overflow-x-hidden justify-between items-center">
                  <p className="text-zinc-500">{totalProducts} products</p>
                  <button
                    className="text-orange-600 cursor-pointer font-medium"
                    onClick={resetCart}
                  >
                    Delete all
                  </button>
                </div>
                <div className="h-[250px] w-[320px] overflow-y-auto">
                  {cart.map((product) => (
                    <SlideCart
                      product={product}
                      addToCart={addToCart}
                      removeFromCart={removeFromCart}
                      removeProduct={removeProduct}
                      totalProducts={totalProducts}
                      resetCart={resetCart}
                    />
                  ))}
                </div>
                <Link className="bg-white w-full py-2 " to={"/cart"}>
                  <button
                    onClick={() => setShowCart(false)}
                    className="bg-amber-600 text-white w-full cursor-pointer hover:bg-amber-700 rounded-2xl font-medium py-3 "
                  >
                    Go to the Cart ${totalPrice.toFixed(2)}
                  </button>
                </Link>
              </div>
            )}
            {totalProducts >= 1 && (
              <span
                onClick={() => setShowCart((prev) => !prev)}
                className="bg-black text-white px-2 cursor-pointer  rounded-xl"
              >
                {totalProducts}
              </span>
            )}
          </div>
          <div className="relative">
            {showSearch && (
              <input
                ref={searchRef}
                className="border border-zinc-700 rounded "
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
            )}
            {searchedValue.length > 0 &&
              searchValue.trim() !== "" &&
              showSearch && (
                <div className="absolute top-7 max-h-[500px] overflow-hidden overflow-y-auto z-40  w-full">
                  {searchedValue.map((product) => (
                    <Link to={`/shop/${product.id}`}>
                      <div className="flex text-white cursor-pointer bg-zinc-800 hover:bg-zinc-900  items-center justify-between">
                        <img
                          src={product.images[0]}
                          className="max-w-16"
                          alt=""
                        />
                        <div>
                          <p className="py-2">{product.title}</p>
                          <p className="hover:text-green-300">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
          </div>
          <img
            className="min-w-5 cursor-pointer hidden sm:block"
            onClick={toggleSearch}
            src={Search}
            alt="search"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Navbar;
