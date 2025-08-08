import React from "react";
import heroImg from "../../assets/Hero_IMG.jpg";
import ButtonCta from "../Shared/ButtonCta";
import FullWidth from "../Shared/FullWidth";
import Layout from "../Shared/Layout";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <FullWidth className={`relative`}>
      <img
        className="w-screen md:w-full absolute left-0 object-cover sm:h-[700px] h-[250px]"
        src={heroImg}
        alt="Hero img of the website"
      />
      <Layout>
        <div className="flex items-center justify-between text-balance sm:py-48 pt-70">
          <div className="flex w-full sm:max-w-[500px] flex-col gap-7 z-40 sm:w-1/2">
            <div className="flex flex-col gap-2">
              <h1 className="sm:text-7xl text-4xl font-bold tracking-tight">
                More than just a online shop it's a lifestyle.
              </h1>
              <p className="sm:bg-[#ebebe8] bg-none rounded sm:px-2">
                Whether you’re just starting out, have played your whole life or
                you're a Tour pro, your swing is like a fingerprint.
              </p>
            </div>
            <div className="w-fit">
              <Link to={`/shop`}>
                <ButtonCta accent={true}>Shopping Now</ButtonCta>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </FullWidth>
  );
};

export default Hero;
