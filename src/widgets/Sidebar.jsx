import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faComments,
  faFilm,
  faBookmark,
  faGear,
  faQuestion,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="h-full">
      <div className="h-full flex flex-col justify-between">
        <ul className="relative left-0 right-0 bottom-0 border p-4 flex justify-between item-center gap-1 lg:grid grid-cols-1 md:border-0">
          <li className="hidden lg:block">
            <Logo />
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/"
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

            <Link className="flex gap-2 p-4 lg:py-4 lg:px-0 w-full" href="/">
              <FontAwesomeIcon icon={faHome} height={20} />
              <span className="hidden md:block">Home</span>
            </Link>
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
            <Link
              className="flex gap-2 p-4 lg:py-4 lg:px-0 w-full"
              href="/activities"
            >
              <FontAwesomeIcon icon={faComments} height={20} />
              <span className="hidden md:block">Activities</span>
            </Link>
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/all-movies"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <Link
              className="flex gap-2 p-4 lg:py-4 lg:px-0 w-full"
              href="/all-movies"
            >
              <FontAwesomeIcon icon={faFilm} height={20} />
              <span className="hidden md:block">Semua movies</span>
            </Link>
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/watchlist"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <Link
              className="flex gap-2 p-4 lg:py-4 lg:px-0 w-full"
              href="/watchlist"
            >
              <FontAwesomeIcon icon={faBookmark} height={20} />
              <span className="hidden md:block">Watchlist</span>
            </Link>
          </li>
        </ul>
        <ul className="hidden lg:grid grid-cols-1 gap-1 p-4">
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/about"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <Link
              className="flex gap-2 p-4 lg:py-4 lg:px-0 w-full"
              href="/about"
            >
              <FontAwesomeIcon icon={faCircleInfo} height={20} />
              <span className="hidden md:block">Tentang Marica</span>
            </Link>
          </li>
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/help"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <Link
              className="flex gap-2 p-4 lg:py-4 lg:px-0 w-full"
              href="/help"
            >
              <FontAwesomeIcon icon={faQuestion} height={20} />
              <span className="hidden md:block">Help</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
