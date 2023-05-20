// import { Post } from "@/types";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

// データベースより、全ての投稿データ（プロパティ）を取得する関数
export const getAllPosts = async () => {
  const posts = await notion.databases.query({
    //データベースに問い合わせ
    database_id: process.env.NOTION_DATABASE_ID,
  });

  const allPosts = posts.results; //必要な情報に絞ったデータを取得するためのresultsプロパティ

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

const getPageMetaData = (post) => {
  return {
    id: post.id,
    title: post.properties.Name.title[0]?.plain_text,
    description: post.properties.Description.rich_text[0]?.plain_text,
    date: post.properties.Date.date.start,
    slug: post.properties.Slug.rich_text[0]?.plain_text,
    tags: post.properties.Tags.multi_select.map(
      (tag: { name: string }) => tag.name
    ), //map関数でtag配列の中のname要素を１つずつ取り出す
  };
};

// 引数のslug(URL)とデータベースのslugが一致するときのみにデータを取得する関数
export const getSinglePost = async (slug) => {
  //slugという引数をとる（URL）
  const response = await notion.databases.query({
    //データベースに問い合わせ
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const page = response.results[0];
  const metadata = getPageMetaData(page);
  // console.log(metadata);
  const mdBlocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdBlocks);
  console.log(mdString);

  return {
    metadata,
    markdown: mdString,
  };
};

// Topページに表示する記事の取得
export const getPostsTopPage = async (getBlogs: number) => {
  const allPosts = await getAllPosts();
  const topPosts = allPosts.slice(0, getBlogs); //0番目から4つ表示する
  return topPosts;
};
