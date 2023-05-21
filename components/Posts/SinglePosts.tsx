// import { BlogInfo } from "@/types";
import Link from "next/link";
import React from "react";

const SinglePosts = (props) => {
  const { title, description, date, tags, slug, isSeeMorePage } = props; //propsオブジェクトからそれぞれを取り出している

  return (
    <>
      {isSeeMorePage ? (
        <Link className="block text-ellipsis" href={`/posts/${slug}`}>
          <section className="bg-slate-200 text-gray-700 p-4 mb-8 rounded-lg">
            <div className="flex">
              <h2>{title}</h2>
              {tags.map((tag: string, index: number) => (
                <Link href={`/posts/tag/${tag}/page/1`}>
                  <span
                    className="font-medium text-gray-700 bg-gray-300 px-2 rounded-xl inline-block"
                    key={index}
                  >
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
            <div>{description}</div>
            <div>{date}</div>
          </section>
        </Link>
      ) : (
        <Link className="block text-ellipsis" href={`/posts/${slug}`}>
          <section className="bg-gray-600 text-gray-100 p-4 mb-8 rounded-lg">
            <div className="flex">
              <h2>{title}</h2>
              {tags.map((tag: string, index: number) => (
                <Link href={`/posts/tag/${tag}/page/1`}>
                  <span
                    className="font-medium text-gray-700 bg-gray-300 px-2 mx-1 rounded-xl inline-block"
                    key={index}
                  >
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
            <div>{description}</div>
            <div>{date}</div>
          </section>
        </Link>
      )}
    </>
  );
};

export default SinglePosts;
