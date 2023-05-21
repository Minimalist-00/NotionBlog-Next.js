import Link from "next/link";
import React from "react";

type Props = {
  tags: string[];
};

const TagSearch = (props: Props) => {
  const { tags } = props;

  return (
    <div className="mx-4 mb-10">
      <section className="p-5 bg-blue-300 rounded-lg">
        <div className="font-medium mb-3">タグ検索</div>
        <div>
          {tags.map((tag: string, index: number) => (
            <Link href={`/posts/tag/${tag}/page/1`} key={index}>
              <span className="font-medium bg-orange-100 py-0.5 px-2 mx-1 rounded-xl inline-block">
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TagSearch;
