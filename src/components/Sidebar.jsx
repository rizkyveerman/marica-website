import React from "react";
import Link from "next/link";
import Button from "./Button";

const Sidebar = () => {
  return (
    <aside className="w-full h-screen">
      <div className="p-4 rounded-xl w-full h-full">
        <div className="h-full flex flex-col justify-between">
          <ul>
            <li>
              <Link
                className="text-blueberry font-bold text-xl block py-4 hover:bg-white rounded-xl pl-4"
                href="/"
              >
                Marica
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-white rounded-xl pl-4"
                href="/browse"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-white rounded-xl pl-4"
                href="/watchlist"
              >
                Watchlist
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-white rounded-xl pl-4"
                href="/coming-soon"
              >
                Coming soon
              </Link>
            </li>
          </ul>
          <div>
            <Link
              className="block py-4 hover:bg-white rounded-xl pl-4"
              href="/coming-soon"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
