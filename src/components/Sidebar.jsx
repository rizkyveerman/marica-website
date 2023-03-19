import React from "react";
import Link from "next/link";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <aside className="w-full h-full">
      <div className="md:block p-4 rounded-xl w-full h-full">
        <div className="h-full flex flex-col justify-between">
          <ul className="flex lg:grid">
            <li className="hidden lg:block">
              <Logo />
            </li>
            <li>
              <Link
                className="block py-4 px-4 hover:bg-semangka/20 rounded-xl lg:pl-4"
                href="/feed"
              >
                Feed
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-4 hover:bg-semangka/20 rounded-xl lg:pl-4"
                href="/browse"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 px-4 hover:bg-semangka/20 rounded-xl lg:pl-4"
                href="/watchlist"
              >
                Watchlist
              </Link>
            </li>

            <li>
              <Link
                className="block py-4 px-4 hover:bg-semangka/20 rounded-xl lg:pl-4"
                href="/user-setting"
              >
                Setting
              </Link>
            </li>
          </ul>
          <div className="hidden lg:grid grid-cols-1 gap-4">
            <div className="w-full h-56 bg-semangka rounded-xl p-4 grid place-content-center text-center">
              disini ada poster agar menarik user utk berlangganan sepertinya
              sabi sih🤔.. atau mungkin slideshow buat iklan produk marica, atau
              gameboard sebangku???
            </div>
            <Link
              className="block py-4 hover:bg-semangka rounded-xl pl-4"
              href="/help"
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
