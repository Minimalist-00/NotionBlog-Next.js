import React from "react";
import { getSinglePost } from "@/lib/notionAPI";

// 動的ルーティングのページのため、GetStaticPathを指定
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: "first-blog" } },
      { params: { slug: "second-blog" } },
      { params: { slug: "third-blog" } },
    ],
    fallback: "blocking",
  };
};

// ISRで更新
export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60,
  };
};

const Post = () => {
  return (
    <section className="container">
      <div>
        <h1>詳細記事ページ</h1>
        <h2 className="border-b-2 ">記事のタイトル</h2>
        <p>タグ</p>
        <p>投稿日</p>
        <p>
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </p>
      </div>
    </section>
  );
};

export default Post;
