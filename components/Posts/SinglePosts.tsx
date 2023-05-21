// import { BlogInfo } from "@/types";
import Link from "next/link";
import React from "react";

const SinglePosts = (props) => {
  const { title, description, date, tags, slug, isSeeMorePage } = props; //propsオブジェクトからそれぞれを取り出している

  return (
    <Link className="block text-ellipsis" href={`/posts/${slug}`}>
      {isSeeMorePage ? (
        <section className="bg-slate-200 text-gray-700 p-4 mb-8 rounded-lg">
          <div className="flex">
            <h2>{title}</h2>
            {tags.map((tag: string, index: number) => (
              <span
                className="mx-1 px-2 bg-gray-300 rounded-xl text-gray-700"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
          <div>{description}</div>
          <div>{date}</div>
        </section>
      ) : (
        <section className="bg-gray-600 text-gray-100 p-4 mb-8 rounded-lg">
          <div className="flex">
            <h2>{title}</h2>
            {tags.map((tag: string, index: number) => (
              <span
                className="mx-1 px-2 bg-gray-300 rounded-xl text-gray-700"
                key={index}
              >
                {tag}
              </span>
            ))}
          </div>
          <div>{description}</div>
          <div>{date}</div>
        </section>
      )}
    </Link>
  );
};

export default SinglePosts;
