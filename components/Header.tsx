import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav className="bg-slate-400 mx-auto py-4 px-3">
      <div className="flex justify-between mx-5">
        <Link className="text-xl font-bold" href="/">
          Minimalist Blog
        </Link>
        <ul className="flex space-x-4 me-5">
          <li>
            <Link href="#">Twitter</Link>
          </li>
          <li>
            <Link href="#">Notion</Link>
          </li>
          <li>
            <Link href="#">SiteMap</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
