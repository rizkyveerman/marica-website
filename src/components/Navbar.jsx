import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import defaultProfile from "../../public/images/profile.jpg";
import Button from "./buttons/Button";
import halfMoon from "@/icons/half-moon.png";
import TextInput from "./TextInput";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <header className="relative p-4 flex justify-between items-center bg-white dark:bg-bad-semangka z-50">
      <div className="hidden md:flex gap-1 w-full justify-between items-center mr-4">
        <div className="flex gap-1">
          <TextInput />
          <Button>Cari</Button>
        </div>
        <ul className="flex">
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
        </ul>
      </div>
      <div className="block md:hidden">
        <div className="block md:hidden">
          <Logo />
        </div>
      </div>
      <div className="relative flex items-center gap-2">
        {profileMenu && (
          <div className="absolute top-14 right-4 p-4 rounded-xl bg-white dark:bg-bad-blueberry border-2   border-semangka/30">
            <ul className="grid gap-1 w-60 drop-shadow-xl">
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/my-profile"
                  className="block p-4 hover:bg-semangka/10 rounded-lg cursor-pointer"
                >
                  My profile
                </Link>
              </li>
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/user-setting"
                  className="block p-4 hover:bg-semangka/10 rounded-lg cursor-pointer"
                >
                  Settings
                </Link>
              </li>
              <li className="p-4 rounded-lg bg-semangka/20 w-full flex justify-between items-center">
                <button className="w-full text-left">Dark mode</button>
                <div>
                  <Image src={halfMoon} alt="darkmode" width={32} height={32} />
                </div>
              </li>
              <li onClick={() => setProfileMenu(!profileMenu)}>
                <Link
                  href="/"
                  className="block p-4 hover:bg-semangka/10 rounded-lg cursor-pointer"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div
          onClick={() => setProfileMenu(!profileMenu)}
          className="cursor-pointer"
        >
          <Image
            src={defaultProfile}
            alt="Rica"
            width={50}
            height={50}
            className="rounded-full"
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
