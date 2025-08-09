import React from "react";
import ReadMore from "../Shared/ReadMore";
import Layout from "../Shared/Layout";
import { Link } from "react-router-dom";

const LatestArticles = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <div className="flex flex-col gap-10 py-20">
        <div className="flex justify-between items-center">
          <h3 className="text-4xl font-medium">Latest Articles</h3>
          <ReadMore className={`text-nowrap`} children={"View More"} />
        </div>
        <div>
          <div className="flex gap-6 flex-wrap font-medium">
            {posts.map((item) => (
              <div className="flex flex-col gap-6">
                <Link to={`/articles/${item.id}`}>
                  <img
                    className="md:max-w-[300px] xl:max-w-[460px]"
                    src={`https://picsum.photos/seed/${item.id}/600/400`}
                    alt=""
                  />
                </Link>
                <div className="flex gap-2 flex-col">
                  <h3 className="text-base xl:text-xl font-medium">
                    {item.title}
                  </h3>
                  <Link to={`/articles/${item.id}`}>
                    <ReadMore />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LatestArticles;
