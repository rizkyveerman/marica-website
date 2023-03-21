import { useState } from "react";
import pro from "@/icons/pro.png";
import bell from "@/icons/bell.png";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import woman from "@/icons/woman.png";
import Button from "./buttons/Button";
import lightmode from "@/images/lightmode.png";
import darkmode from "@/images/darkmode.png";
import TextInput from "./TextInput";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  const [isDarkmode, setIsDarkmode] = useState(false);

  return (
    <header className="relative p-4 flex justify-between items-center bg-white dark:bg-bad-semangka z-50">
      <div className="hidden md:flex gap-1 justify-between items-center mr-4">
        <div className="flex gap-1">
          <TextInput />
          <Button>Cari</Button>
        </div>

        {/* <ul className="flex">
          <li>
            <Link
              href="/about"
              className="block p-4 hover:bg-semangka/10 rounded-lg cursor-pointer"
            >
              Tentang Marica
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="block p-4 hover:bg-semangka/10 rounded-lg cursor-pointer"
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
          <div className="absolute z-[999] top-10 right-0 p-4 rounded-xl bg-white dark:bg-bad-blueberry border-2 border-semangka/40">
            <ul className="border-b-2 border-semangka/20 pb-2 mb-3 grid gap-1 w-60 drop-shadow-xl">
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/my-profile"
                  className="block p-2 hover:bg-semangka/10 rounded-lg cursor-pointer"
                >
                  My profile
                </Link>
              </li>
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/user-setting"
                  className="block p-2 hover:bg-semangka/10 rounded-lg cursor-pointer"
                >
                  Settings
                </Link>
              </li>

              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/"
                  className="block p-2 hover:bg-semangka/10 rounded-lg cursor-pointer"
                >
                  Logout
                </Link>
              </li>
            </ul>
            <button
              className="p-2 rounded-lg bg-semangka/10 w-full flex justify-between items-center"
              type="button"
              onClick={() => setIsDarkmode(!isDarkmode)}
            >
              <p className="w-full text-left">Dark mode</p>
              <div>
                <Image
                  src={isDarkmode ? darkmode : lightmode}
                  alt={isDarkmode ? "night mode" : "day mode"}
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
            className="flex justify-start items-center gap-1 w-full py-1 px-2 rounded-xl bg-semangka/10 text-xs"
          >
            <Image src={pro} alt="pro-icon" width={28} height={28} />
            <p>Upgrade ke Pro</p>
          </Link>
          <Image src={bell} alt="bell-icon" width={28} height={28} />
          <Image
            src={woman}
            alt="Rica"
            width={32}
            height={32}
            className="rounded-full bg-semangka cursor-pointer"
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
