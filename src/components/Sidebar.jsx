import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoMarica from "../../public/images/Logo-Marica.png";
import Button from "./Button";

const Sidebar = () => {
  return (
    <aside className="w-full h-full">
      <div className="md:block p-4 rounded-xl w-full h-full">
        <div className="h-full flex flex-col justify-between">
          <ul>
            <li>
              <Link
                className="text-semangka font-bold text-xl block py-4 hover:bg-semangka/20 rounded-xl pl-4"
                href="/"
              >
                <Image src={logoMarica} alt="Marica" height={48} />
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-semangka/20 rounded-xl pl-4"
                href="/browse"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-semangka/20 rounded-xl pl-4"
                href="/watchlist"
              >
                Watchlist
              </Link>
            </li>
            <li>
              <Link
                className="block py-4 hover:bg-semangka/20 rounded-xl pl-4"
                href="/subscription"
              >
                Berlangganan
              </Link>
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-4">
            <div className="w-full h-56 bg-semangka rounded-xl p-4 grid place-content-center text-center">
              disini ada poster agar menarik user utk berlangganan sepertinya
              sabi sih🤔.. atau mungkin slideshow buat iklan produk marica, atau
              gameboard sebangku???
            </div>
            <Link
              className="block py-4 hover:bg-semangka rounded-xl pl-4"
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
