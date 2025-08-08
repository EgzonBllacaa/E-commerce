import React from "react";
import HurryUp from "../HomeComponents/HurryUp";
import contactUsImg from "../../assets/ContactUsImage.png";
import Layout from "../Shared/Layout";

const Hero = () => {
  return (
    <>
      <Layout>
        <div className="pt-10 flex flex-col gap-6 max-w-4xl">
          <h1 className="text-6xl font-medium leading-tight ">
            We believe in sustainable decor. We’re passionate about life at
            home.
          </h1>
          <p>
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
        <div className="py-12">
          <HurryUp
            img={contactUsImg}
            title={"About Us"}
            description={
              "3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019. Our customer service is always prepared to support you 24/7"
            }
          />
        </div>
      </Layout>
    </>
  );
};

export default Hero;
