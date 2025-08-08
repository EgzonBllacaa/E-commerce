import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <div className="px-9 py-6 rounded-2xl bg-gray-100 hover:-translate-y-3 transition-transform ease-in-out duration-500 cursor-pointer hover:shadow-lg  w-full max-w-[469.3px] flex flex-col justify-between gap-10">
      <div className="flex flex-col gap-2">
        <Link to={`/articles/${post.id}`}>
          <h4 className="text-xl font-medium capitalize hover:underline">
            {post.title}
          </h4>
        </Link>
        <h6 className="text-sm ">{post.body.slice(0, 100)}...</h6>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-center gap-1">
          Tags:
          {post.tags.map((tag) => (
            <span className="border rounded-2xl px-2">{tag}</span>
          ))}
        </div>
        <div
          className="flex items-center justify-between
      "
        >
          <div className="flex items-center gap-2">
            <p>👍 {post.reactions.likes}</p>
            <p>👎 {post.reactions.dislikes}</p>
          </div>
          <span>Views {post.views}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
