import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import all from "@/icons/all.png";
import activity from "@/icons/activity.png";
import bookmark from "@/icons/bookmark.png";
import help from "@/icons/help.png";
import setting from "@/icons/settings.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside className="w-full h-full">
      <div className="md:block p-4 rounded-xl w-full h-full">
        <div className="h-full flex flex-col justify-between">
          <ul className="pt-1 md:pt-0 fixed left-0 right-0 bottom-0 md:relative h-24 md:h-0 bg-white flex justify-center md:justify-start item-start lg:grid border-t-2 md:border-0 gap-8 md:gap-0">
            <li className="hidden lg:block">
              <Logo />
            </li>
            <li className="flex justify-start items-center hover:bg-semangka/10 hover:text-semangka text-arang/80 rounded-xl lg:pl-4">
              {/* <Image
                src={activity}
                alt="activity"
                width={18}
                height={18}
                className="w-8 md:w-[18px]"
              /> */}
              <FontAwesomeIcon icon={faEnvelope} height={20} />
              <Link
                className="hidden md:block py-4 px-4 w-full"
                href="/activities"
              >
                Activities
              </Link>
            </li>
            <li className="flex justify-start items-center hover:bg-semangka/10 hover:text-semangka text-arang/80 rounded-xl lg:pl-4">
              <FontAwesomeIcon icon={faEnvelope} height={20} />
              <Link
                className="hidden md:block py-4 px-4 w-full"
                href="/all-movies"
              >
                Semua movies
              </Link>
            </li>
            <li className="flex justify-start items-center hover:bg-semangka/10 hover:text-semangka text-arang/80 rounded-xl lg:pl-4">
              <FontAwesomeIcon icon={faEnvelope} height={20} />
              <Link
                className="hidden md:block py-4 px-4 w-full"
                href="/watchlist"
              >
                Watchlist
              </Link>
            </li>
          </ul>
          <ul className="hidden lg:grid grid-cols-1 gap-1 pt-4 border-t-2 border-semangka/20">
            <li className="flex justify-start items-center hover:bg-semangka/10 hover:text-semangka text-arang/80 rounded-xl lg:pl-4">
              <FontAwesomeIcon icon={faEnvelope} height={20} />
              <Link
                className="hidden md:block py-4 px-4 w-full"
                href="/user-setting"
              >
                Setting
              </Link>
            </li>
            <li className="flex justify-start items-center hover:bg-semangka/10 hover:text-semangka text-arang/80 rounded-xl lg:pl-4">
              <FontAwesomeIcon icon={faEnvelope} height={20} />
              <Link className="hidden md:block py-4 px-4 w-full" href="/help">
                Help
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
