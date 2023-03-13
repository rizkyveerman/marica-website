import React from "react";
import Link from "next/link";
import Button from "./Button";

const Sidebar = () => {
  return (
    <aside className="w-full h-full">
      <div className="md:block p-4 rounded-xl w-full h-full">
        <div className="h-full flex flex-col justify-between">
          <ul>
            <li>
              <Link
                className="text-blueberry font-bold text-xl block py-4 hover:bg-indigo-100 rounded-xl pl-4"
                href="/"
              >
                Marica
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-indigo-100 rounded-xl pl-4"
                href="/browse"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-indigo-100 rounded-xl pl-4"
                href="/watchlist"
              >
                Watchlist
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-indigo-100 rounded-xl pl-4"
                href="/subscription"
              >
                Berlangganan
              </Link>
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full h-56 bg-indigo-100 rounded-xl p-4 grid place-content-center text-center">
              disini ada poster agar menarik user utk berlangganan sepertinya
              sabi sih🤔
            </div>
            <Link
              className="block py-4 hover:bg-indigo-100 rounded-xl pl-4"
              href="/coming-soon"
            >
              Help
            </Link>
          </div>
        </div>
      </div>
      <div className="block md:hidden">mobile menu</div>
    </aside>
  );
};

export default Sidebar;
