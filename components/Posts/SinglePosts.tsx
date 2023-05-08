import React from "react";

type BlogInfo = { //型を定義
  title: string;
  description: string;
  date: string;
  tag: string;
  slug: string;
};

const SinglePosts = (props: BlogInfo) => { //BlogInfoという型を使用
  const { title, description, date, tag, slug } = props; //propsオブジェクトからそれぞれを取り出している

  return <div>{title}</div>;
};

export default SinglePosts;
