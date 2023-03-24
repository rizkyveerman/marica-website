import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "@/components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightDots,
  faFilm,
  faTableCells,
  faListOl,
  faHeart,
  faComments,
  faGear,
  faQuestion,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const menus = [
  {
    name: "Semua film",
    icon: faFilm,
    path: "all-movies",
  },
  {
    name: "Trending",
    icon: faArrowUpRightDots,
    path: "trending",
  },
  {
    name: "Kategori",
    icon: faTableCells,
    path: "categories",
  },
];
const libraries = [
  {
    name: "Aktifitas",
    icon: faComments,
    path: "activity",
  },
  {
    name: "Playlist",
    icon: faListOl,
    path: "playlist",
  },
  {
    name: "Disukai",
    icon: faHeart,
    path: "likes",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className="w-full h-full">
      <div className="w-full h-full flex lg:flex-col justify-center lg:justify-between items-center lg:items-start">
        <div className="w-full flex lg:flex-col">
          <ul className="w-full relative p-4 flex justify-between item-center gap-1 lg:grid grid-cols-1 ">
            <li>
              <p className="hidden md:block text-xs uppercase tracking-widest">
                menu
              </p>
            </li>
            {menus.map((menu, index) => (
              <li
                key={index}
                className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
                  router.route === "/all-movies"
                    ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                    : "text-arang/80"
                } rounded-xl lg:pl-4`}
              >
                <Link
                  className="flex items-center gap-2 p-4 lg:py-4 lg:px-0 w-full"
                  href={`/${menu.path}`}
                >
                  <FontAwesomeIcon icon={menu.icon} height={14} />
                  <span className="hidden md:block">{menu.name}</span>
                </Link>
              </li>
            ))}
            <li
              className={`flex justify-start items-center hover:bg-pink-100 bg-gradient-to-t hover:text-pink-600 text-arang/80 rounded-xl lg:pl-4`}
            >
              <button className="flex items-center gap-2 p-4 lg:py-4 lg:px-0 w-full">
                <FontAwesomeIcon icon={faQuestion} height={14} />
                <span className="hidden md:block">Menu</span>
              </button>
            </li>
          </ul>
          <ul className="hidden w-full relative bottom-0 p-4 gap-1 lg:grid grid-cols-1 ">
            <li>
              <p className="hidden md:block text-xs uppercase tracking-widest">
                libraries
              </p>
            </li>
            {libraries.map((menu, index) => (
              <li
                key={index}
                className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
                  router.route === "/all-movies"
                    ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                    : "text-arang/80"
                } rounded-xl lg:pl-4`}
              >
                <Link
                  className="flex items-center gap-2 p-4 lg:py-4 lg:px-0 w-full"
                  href={`/${menu.path}`}
                >
                  <FontAwesomeIcon icon={menu.icon} height={14} />
                  <span className="hidden md:block">{menu.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ul className="hidden p-4 lg:grid grid-cols-1">
          <li
            className={`flex justify-start items-center hover:bg-pink-100 hover:text-semangka ${
              router.route === "/all-movies"
                ? "bg-gradient-to-t text-white hover:bg-gradient-to-t from-pink-600 to-pink-300 hover:text-white"
                : "text-arang/80"
            } rounded-xl lg:pl-4`}
          >
            <Link
              className="flex items-center gap-2 p-4 lg:py-4 lg:px-0 w-full"
              href="/help"
            >
              <FontAwesomeIcon icon={faQuestion} height={14} />
              <span className="hidden md:block">Help</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
