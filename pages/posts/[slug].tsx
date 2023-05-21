import React from "react";
import { getAllPosts, getSinglePost } from "@/lib/notionAPI";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { CodeProps } from "react-markdown/lib/ast-to-react";

// 動的ルーティングのページのため、GetStaticPathを指定
export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts();
  const paths = allPosts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

// ISRで更新
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60 * 60,
  };
};

const Post = ({ post }) => {
  return (
    <section className="container">
      <div>
        <h1>詳細記事ページ</h1>
        <h2 className="border-b-2 ">{post.metadata.title}</h2>
        {post.metadata.tags.map((tag: string, index: number) => (
          <p key={index}>
            <Link href={`/posts/tag/${tag}/page/1`}>{tag}</Link>
          </p>
        ))}
        <p>{post.metadata.data}</p>
        <div>
          <ReactMarkdown
            children={post.markdown.parent}
            components={{
              code({ node, inline, className, children, ...props }: CodeProps) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, "")}
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          ></ReactMarkdown>
        </div>

        <Link href="/">ホームへ</Link>
      </div>
    </section>
  );
};

export default Post;
