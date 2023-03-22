import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faComments,
  faFilm,
  faBookmark,
  faGear,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const router = useRouter();
  console.log("router", router.route);

  return (
    <aside className="w-full h-full">
      <div className="w-full h-full flex flex-col justify-between">
        <ul className="p-4 w-full fixed left-0 right-0 bottom-0 md:relative h-24 md:h-0 flex justify-center md:justify-start item-start lg:grid grid-cols-1 md:border-0 gap-8 md:gap-1">
          <li className="hidden lg:block">
            <Logo />
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/activities"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            {/* <Image
                src={activity}
                alt="activity"
                width={18}
                height={18}
                className="w-8 md:w-[18px]"
              /> */}
            <FontAwesomeIcon icon={faComments} height={20} />
            <Link
              className="hidden md:block py-4 px-4 w-full"
              href="/activities"
            >
              Activities
            </Link>
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/all-movies"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <FontAwesomeIcon icon={faFilm} height={20} />
            <Link
              className="hidden md:block py-4 px-4 w-full"
              href="/all-movies"
            >
              Semua movies
            </Link>
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/watchlist"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <FontAwesomeIcon icon={faBookmark} height={20} />
            <Link
              className="hidden md:block py-4 px-4 w-full"
              href="/watchlist"
            >
              Watchlist
            </Link>
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/user-setting"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <FontAwesomeIcon icon={faGear} height={20} />
            <Link
              className="hidden md:block py-4 px-4 w-full"
              href="/user-setting"
            >
              Setting
            </Link>
          </li>
        </ul>
        <ul className="bg-gradient-to-tr from-pink-200 to-pink-100 hidden lg:grid grid-cols-1 gap-1 p-4 border-t-2 border-pink-200">
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/about"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <FontAwesomeIcon icon={faQuestion} height={20} />
            <Link className="hidden md:block py-4 px-4 w-full" href="/about">
              Tentang Marica
            </Link>
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/help"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <FontAwesomeIcon icon={faQuestion} height={20} />
            <Link className="hidden md:block py-4 px-4 w-full" href="/help">
              Help
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
