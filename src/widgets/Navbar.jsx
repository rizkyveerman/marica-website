import { useState, useContext } from "react";
import ThemeContext from "@/store/theme-context";
import {
  faMagnifyingGlass,
  faBell,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../components/Logo";
import Link from "next/link";
import Image from "next/image";
import woman from "@/icons/woman.png";
import Button from "@/components/buttons/Button";
import lightmode from "@/images/lightmode.png";
import darkmode from "@/images/darkmode.png";
import Input from "@/components/inputs/Input";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="relative p-4 flex justify-between items-center bg-white dark:bg-bad-semangka z-50">
      <div className="hidden md:flex gap-1 justify-between items-center mr-4">
        <div className="flex gap-1">
          <Input placeholder="Coba cari Cocomelon..." type="text" />
          <Button variant="secondary" isClicked={() => "search"}>
            Cari
          </Button>
        </div>
        {/* <ul className="flex">
          <li>
            <Link
              href="/about"
              className="block p-4 hover:bg-pink-100 rounded-lg cursor-pointer"
            >
              Tentang Marica
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block p-4 hover:bg-pink-100 rounded-lg cursor-pointer"
            >
              Blog
            </Link>
          </li>
        </ul> */}
      </div>
      <div className="block md:hidden">
        <div className="block md:hidden">
          <Logo />
        </div>
      </div>
      <div className="relative flex items-center gap-2">
        {profileMenu && (
          <div className="absolute z-[999] top-10 right-0 p-4 rounded-xl bg-white dark:bg-bad-blueberry border-2 border-pink-400">
            <ul className="border-b-2 border-pink-200 pb-2 mb-3 grid gap-1 w-60 drop-shadow-xl">
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/my-profile"
                  className="block p-2 hover:bg-pink-100 rounded-lg cursor-pointer"
                >
                  My profile
                </Link>
              </li>
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/user-setting"
                  className="block p-2 hover:bg-pink-100 rounded-lg cursor-pointer"
                >
                  Settings
                </Link>
              </li>

              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/"
                  className="block p-2 hover:bg-pink-100 rounded-lg cursor-pointer"
                >
                  Logout
                </Link>
              </li>
            </ul>
            <button
              className="p-2 rounded-lg bg-pink-100 w-full flex justify-between items-center"
              type="button"
              onClick={() => toggleTheme}
            >
              <p className="w-full text-left">Dark mode</p>
              <div>
                <Image
                  src={theme === "light" ? lightmode : darkmode}
                  alt={theme === "light" ? "day mode" : "night mode"}
                  width={200}
                  height={32}
                  className="rounded-lg"
                />
              </div>
            </button>
          </div>
        )}
        <div className="w-full flex gap-2 md:gap-4 justify-end items-center">
          <Link
            href="/subscription"
            className="text-pink-700 flex justify-start items-center gap-1 w-full py-1 px-2 rounded-xl bg-gradient-to-t from-pink-400 to-pink-200 text-xs border-2 border-pink-300 hover:text-white"
          >
            {/* <Image src={pro} alt="pro-icon" width={28} height={28} /> */}
            <FontAwesomeIcon icon={faCrown} height={14} />
            Upgrade ke Pro
          </Link>
          {/* <Image src={bell} alt="bell-icon" width={28} height={28} /> */}
          <div className="hover:text-pink-600 cursor-pointer">
            <FontAwesomeIcon icon={faBell} height={20} />
          </div>
          <Image
            src={woman}
            alt="Rica"
            width={32}
            height={32}
            className="rounded-full bg-pink-600 cursor-pointer"
            onClick={() => setProfileMenu(!profileMenu)}
          />
        </div>
        {/* is login? */}
        {/* <Button isLink type="button" variant="secondary" href="/login">
          Masuk ke Marica
        </Button> */}
      </div>
    </header>
  );
};

export default Navbar;
