import Link from "next/link";
import React from "react";
import Button from "./Button";

const links = [
  {
    pathname: "Home",
    link: "/",
  },
  {
    pathname: "Film",
    link: "/film",
  },
  {
    pathname: "Pricing",
    link: "/pricing",
  },
  {
    pathname: "Berlangganan",
    link: "/subscription",
  },
];

const Navbar = () => {
  return (
    <header className="p-4 flex justify-between items-center">
      <h1>Marica</h1>
      <nav>
        <ul className="hidden md:flex justify-center items-center gap-4">
          {links.map((link) => (
            <li key={link.pathname} className="hover:text-blueberry">
              <Link href={link.link}>{link.pathname}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:flex items-center gap-2">
        <Button type="primary" isLink>
          <Link href="/login">Masuk</Link>
        </Button>
        <Button isLink>
          <Link href="/login">Buat akun</Link>
        </Button>
      </div>
      <Button className="block md:hidden">menu</Button>
    </header>
  );
};

export default Navbar;
