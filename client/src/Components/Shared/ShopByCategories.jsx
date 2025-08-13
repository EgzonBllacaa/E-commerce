import React from "react";
import { Link } from "react-router-dom";
import beauty from "../../assets/beauty.jpg";
import fragrances from "../../assets/fragrance.jpg";
import furniture from "../../assets/furniture.jpg";
import groceries from "../../assets/groceries.jpg";
import home from "../../assets/decor.jpg";
import kitchen from "../../assets/kitchen.jpg";
import Layout from "./Layout.jsx";

const images = {
  beauty,
  fragrances,
  furniture,
  groceries,
  "home-decoration": home,
  "kitchen-accessories": kitchen,
};

const ShopByCategories = ({ slicedCategories }) => {
  return (
    <Layout>
      <div className=" py-20 flex flex-col gap-12 ">
        <div className="flex justify-center">
          <h2 className="text-4xl font-medium leading-11 ">
            Shop By Categories
          </h2>
        </div>
        <div className="flex gap-6 justify-center flex-wrap">
          {slicedCategories.map((category) => {
            if (!category.slug) return null;
            const imgSrc = images[category.slug];
            return (
              <div
                key={category.id}
                className="relative max-w-96 w-full h-60  text-center  bg-light-gray "
              >
                <Link to={`/categories/${category.slug}`}>
                  {imgSrc && (
                    <img
                      className="absolute w-full top-0 left-0 z-0 h-full"
                      src={imgSrc}
                      alt=""
                    />
                  )}
                  <div className="absolute z-10 left-1/2 transform -translate-x-1/2  font-bold bg-light-gray px-4 rounded bottom-2  w-fit">
                    <h2>{category.name}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ShopByCategories;
