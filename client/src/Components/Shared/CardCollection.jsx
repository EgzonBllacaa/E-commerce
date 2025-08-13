import React, { useState } from "react";
import PostCard from "./PostCard";
import Layout from "./Layout";
import Pagination from "../ShopComponents/Pagination";

const itemsPerPage = 9;

const CardCollection = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(data);

  const totalPages = Math.ceil(data.posts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.posts.slice(startIndex, startIndex + itemsPerPage);
  console.log(currentItems);
  return (
    <Layout>
      <h2 className="text-5xl font-medium mt-5 text-center">Articles</h2>
      <div className="py-10">
        <div className="flex flex-wrap gap-4 justify-center w-full py-10">
          {currentItems.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />{" "}
      </div>
    </Layout>
  );
};

export default CardCollection;
