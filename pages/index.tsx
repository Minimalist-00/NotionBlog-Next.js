import SinglePosts from "@/components/Posts/SinglePosts";
import TagSearch from "@/components/TagSearch";
import { getAllPosts, getAllTags, getPostsTopPage } from "@/lib/notionAPI";
import { GetStaticProps } from "next";
// import { Post } from "@/types";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  // const allPosts = await getAllPosts(); //notionAPI.tsxから関数呼び出し
  const topPosts = await getPostsTopPage(4);
  const allTags = await getAllTags();

  return {
    props: {
      topPosts,
      allTags,
    },
    revalidate: 60 * 60,
  };
};

export default function Home({ topPosts, allTags }) {
  return (
    <div className="container h-full w-full mx-auto">
      <Head>
        <title>Notion Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container w-full mt-16">
        <h1 className="text-5xl font-medium mb-16 text-center">
          トップページです！
        </h1>
        {topPosts.map((post) => (
          <div className="mx-4" key={post.id}>
            <SinglePosts
              title={post.title}
              description={post.description}
              date={post.date}
              tags={post.tags}
              slug={post.slug}
              isSeeMorePage={false}
            />
          </div>
        ))}
        <Link href="posts/page/1" className="font-bold block text-right">
          もっと見る
        </Link>
        <TagSearch tags={allTags} />
      </main>
    </div>
  );
}
