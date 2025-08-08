import Layout from "../Shared/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import shop_hero from "../../assets/shop_hero_products.jpg";

const Hero = () => {
  return (
    <Layout>
      <div className="relative">
        <img
          className="w-full object-cover object-[center_55%]  max-h-[500px]"
          src={shop_hero}
          alt=""
        />
        <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
        <div className="flex flex-col items-center text-white sm:gap-6 gap-1 absolute z-20 top-1/4 left-2/4 -translate-x-2/4">
          <div className="flex items-center gap-2">
            <span className="text-zinc-400">Home</span>
            <FontAwesomeIcon className="text-zinc-400" icon={faArrowRight} />
            <span className="font-medium">Shop</span>
          </div>
          <h3 className="sm:text-6xl text-xl font-bold text-nowrap">
            Shop Page
          </h3>
          <p className="sm:text-lg text-center">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Hero;
