/*
型を定義する
TypeScriptの型要素についての理解が深まってから行なう
*/

export interface Post {
  id: string;
  properties: {
    Name: { title: [{ plain_text: string }] };
    Description: { rich_text: [{ plain_text: string }] };
    Date: { date: { start: string } };
    Slug: { rich_text: [{ plain_text: string }] };
    Tags: { multi_select: { name: string }[] };
  };
}

export type BlogInfo = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
};
