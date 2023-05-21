import Link from "next/link";
import React from "react";

interface Props {
  numberOfPage: number;
}

const Pagination = (props: Props) => {
  const { numberOfPage } = props;

  let pages: number[] = [];
  for (let i = 1; i <= numberOfPage; i++) {
    pages.push(i);
  }

  return (
    <section className="mx-auto mb-8">
      <ul className="flex items-center justify-center gap-4">
        {pages.map((page) => (
          <Link href={`posts/page/${page}`} key={page}>
            <li className="bg-slate-400 w-6 h-8">{page}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default Pagination;
