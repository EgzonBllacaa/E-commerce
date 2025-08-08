import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FullWidth from "../Shared/FullWidth";
import headphones from "../../assets/Headphones.png";
import headphones_w_woman from "../../assets/Woman_with_headphones.png";

const NewsLetter = () => {
  return (
    <FullWidth className={`bg-[#E1E3E2] px-2`}>
      <div className="relative flex flex-col bg-zinc-7 sm:py-30 py-24 items-center gap-8 mx-auto ">
        <img
          className="hidden lg:block absolute lg:left-20 left-50 top-16 -rotate-12"
          src={headphones}
          alt=""
        />
        <img
          className="hidden lg:block absolute bottom-0 lg:right-0  right-50"
          src={headphones_w_woman}
          alt=""
        />
        <div className="flex flex-col gap-2 text-center">
          <h5 className="text-4xl font-medium">Join Our NewsLetter</h5>
          <p className="text-lg text-neutral_07-100">
            Sign up for deals, new products and promotions
          </p>
        </div>
        <div className="border-b border-zinc-300 flex gap-4 items-center  pb-3 w-fit">
          <FontAwesomeIcon icon={faMailBulk} />
          <input
            className="text-black w-full  sm:w-96 placeholder:text-zinc-500 "
            type="email"
            placeholder="Email address"
          />
          <button className="text-zinc-500">Signup</button>
        </div>
      </div>
    </FullWidth>
  );
};

export default NewsLetter;
