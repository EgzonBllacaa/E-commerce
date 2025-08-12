import { Link } from "react-router-dom";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook-1.png";
import youtube from "../../assets/youtube.png";
import FullWidth from "./FullWidth";

const Footer = () => {
  return (
    <FullWidth
      className={`xl:px-40  px-4 sm:px-6 lg:px-8
          w-full
          mx-auto bg-neutral_07-100`}
    >
      <div className="flex flex-col gap-14 pt-20 pb-8 ">
        <div className="flex flex-col sm:flex-row gap-14 sm:justify-between flex-wrap items-center ">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <span className="sm:border-r border-neutral_04-100 text-neutral_03-100 sm:pr-8 text-2xl font-bold">
              3legant.
            </span>
            <span className="bg-white h-[1px] sm:hidden rounded-2xl w-8"></span>
            <span className="sm:ml-8 text-sm text-neutral_03-100">
              Headphone Store
            </span>
          </div>
          <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between items-center gap-10">
            <li>
              <Link to={"/"} className="text-neutral_01-100 text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/shop"} className="text-neutral_01-100 text-sm">
                Shop
              </Link>
            </li>
            <li>
              <Link to={"/articles"} className="text-neutral_01-100 text-sm">
                Blog
              </Link>
            </li>
            <li>
              <Link to={"/contact-us"} className="text-neutral_01-100 text-sm">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row-reverse  justify-between items-center border-t border-neutral_04-100 py-4">
          <div className="flex items-center gap-6">
            <Link target="_blank" to={"https://www.instagram.com/egzonbllacaa"}>
              <img className="max-w-5" alt="instagram" src={instagram} />
            </Link>
            <Link
              target="_blank"
              to={"https://www.facebook.com/profile.php?id=61574007328727"}
            >
              <img className="max-w-5" alt="facebook" src={facebook} />
            </Link>
            <Link target="_blank" to={"https://www.youtube.com"}>
              <img className="max-w-5" alt="youtube" src={youtube} />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row-reverse  items-center gap-6 py-4">
            <div className="flex gap-7">
              <span className="text-neutral_01-100 font-medium">
                Privacy Policy
              </span>
              <span className="text-neutral_01-100 font-medium">
                Terms of Use
              </span>
            </div>
            <p className="text-neutral_03-100 text-center">
              Copyright © 2023 3legant. All rights reserved
            </p>
          </div>
        </div>
      </div>
    </FullWidth>
  );
};

export default Footer;
