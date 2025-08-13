import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UseFetch from "../Shared/UseFetch";
import Loader from "../Shared/Loader";
// import PostCard from "../Shared/PostCard";
import Layout from "../Shared/Layout";
import FullWidth from "../Shared/FullWidth";

const ArticlesDetails = () => {
  const [readMore, setReadMore] = useState(false);
  const { data: image } = useQuery({
    queryKey: ["unsplashImage"],
    queryFn: () =>
      fetch(
        `https://api.unsplash.com/photos/random?client_id=${
          import.meta.env.VITE_UNSPLASH_ACCESS_KEY
        }&query=article`
      ).then((res) => res.json()),
  });
  const { id } = useParams();
  const {
    data: post,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => UseFetch(`https://dummyjson.com/posts/${id}`),
  });

  if (isError) return console.log(error);
  if (isLoading) return <Loader />;
  if (!image) return <Loader />;
  console.log(post);
  return (
    <div>
      <FullWidth>
        <img
          src={image.urls.regular}
          className="w-full object-cover h-[305px]"
          alt=""
        />
      </FullWidth>
      <Layout className="xl:px-70 px-5 lg:px-30 sm:px-20 py-10">
        <div className="flex flex-wrap flex-col gap-20">
          <div>
            <h1 className="text-4xl font-medium mt-2 mb-10">{post.title}</h1>
            <p>{post.body}</p>
            <span className="font-medium">Fake content from here:</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              qui quo sint quaerat sit iure ad blanditiis labore ab in nemo eum
              error enim molestias, quidem numquam distinctio voluptas eius hic.
              Vitae eligendi quam sed possimus quia dolore corrupti illo quos
              amet!{" "}
            </p>
            <button
              className="block hover:underline cursor-pointer"
              onClick={() => setReadMore((prev) => !prev)}
            >
              Read {readMore ? "less" : "more..."}
            </button>
            {readMore && (
              <>
                <span className="font-bold">
                  Magnam minima, reiciendis veritatis libero
                </span>{" "}
                <p>
                  labore exercitationem facilis qui maiores minus nisi nam quae,
                  illum recusandae, sunt quaerat molestias nesciunt architecto
                  odio cum modi dolore deleniti aliquid! Amet reiciendis ratione
                  expedita repudiandae maxime. Nisi tenetur sed dignissimos ex
                  voluptatum ipsa voluptate omnis quod! Molestiae ipsa dolor
                  eligendi velit tempora nam commodi expedita repellendus eaque
                  alias nostrum cupiditate, animi in minima, consectetur, quam
                  totam. Maiores amet totam ipsum aperiam quam velit, expedita
                  vel delectus cum nobis obcaecati deleniti dolorem odio error
                  tenetur voluptas alias qui ullam corrupti corporis est
                  asperiores quidem beatae! Fuga in vitae placeat tempora,
                  maxime nobis ipsam libero deleniti eius. Natus, in! Eveniet
                  nisi beatae minima vitae deserunt delectus, ullam
                  exercitationem, alias reiciendis sint est. Deserunt quam
                  veniam tempora placeat nemo officia nostrum excepturi, at
                  blanditiis debitis
                </p>
                <span className="block font-medium text-lg mt-6 mb-2">
                  Numquam nostrum pariatur officia?
                </span>
                <p>
                  Eius ut magnam illo aut laborum corrupti non vel nostrum sequi
                  hic fugiat perferendis natus quam recusandae iste quasi
                  numquam sunt, reprehenderit at adipisci sint cumque! Illo
                  libero, rem, nemo asperiores quae reiciendis ipsam, hic vitae
                  expedita similique delectus maxime. Commodi possimus
                  dignissimos rem sequi velit quos delectus in vero enim,
                  laboriosam ducimus ad, neque quibusdam sit nam eius amet
                  voluptatem? Temporibus dolores impedit placeat. Provident
                  doloremque praesentium a magni nihil consectetur impedit
                  dolorem at earum dolor. Delectus quisquam eius est hic
                  molestiae officiis voluptatibus beatae tempore, natus,
                  asperiores quis expedita! Voluptatem accusantium officia
                  beatae ratione provident incidunt velit. Ipsam eligendi
                  adipisci assumenda quia eos, sapiente expedita, laudantium
                  quos sit{" "}
                </p>
                <span className="font-bold">
                  {" "}
                  cum enim harum ratione impedit magnam,
                </span>
                <p>
                  quaerat ullam deserunt qui optio. Temporibus nisi eius,
                  suscipit, unde reiciendis ut consequatur velit repudiandae,
                  officia praesentium modi illum? , culpa hic provident
                  reiciendis illum repudiandae consectetur a! Laudantium error
                  nihil temporibus consectetur repudiandae deleniti unde
                  molestias, esse eveniet sed minima, quidem nemo natus ea quod,
                  dicta minus debitis non ab maxime. Tempora.
                </p>
              </>
            )}
          </div>

          <div className="flex flex-col gap-3 ">
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
      </Layout>
    </div>
  );
};

export default ArticlesDetails;
