import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import defaultProfile from "../../public/images/profile.jpg";
import Button from "./Button";
import LoginButton from "@/components/buttons/LoginButton";
import TextInput from "./TextInput";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);

  return (
    <header className="relative p-4 flex justify-between items-center bg-white dark:bg-bad-semangka z-50">
      <div className="hidden md:flex gap-1">
        <TextInput />
        <Button>Cari</Button>
      </div>
      <div className="block md:hidden">
        <Link
          className="text-semangka font-bold text-xl block py-4 hover:bg-semangka rounded-xl pl-4"
          href="/"
        >
          Marica
        </Link>
      </div>
      <div className="relative flex items-center gap-2">
        {profileMenu && (
          <div className="absolute top-14 right-4 p-4 rounded-xl bg-white">
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
              <li>
                <button className="p-4 rounded-lg bg-semangka/20">
                  Dark mode
                </button>
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
        <LoginButton />
      </div>
    </header>
  );
};

export default Navbar;
