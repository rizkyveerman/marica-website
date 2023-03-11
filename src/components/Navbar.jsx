import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

const links = [
  {
    pathname: "Serial",
    link: "/serial",
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
    pathname: "⭐Berlangganan",
    link: "/subscription",
  },
];

const Navbar = () => {
  const url = window.location.pathname.slice(1);
  console.log("path:", url);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="py-4 px-4 md:py-3 md:px-16 flex justify-between items-center bg-abu-terang z-50">
      <h3>
        <Link href="/">Marica</Link>
      </h3>
      <nav className="relative">
        <ul
          id="desktop-nav"
          className="hidden md:flex justify-center items-center gap-4"
        >
          {links.map((link) => (
            <li key={link.pathname} className="hover:text-blueberry">
              <Link href={link.link}>{link.pathname}</Link>
            </li>
          ))}
        </ul>
        <Button className="md:hidden" isClicked={() => setIsOpen(!isOpen)}>
          Menu
        </Button>
        {isOpen && (
          <ul
            id="mobile-nav"
            className="fixed left-0 right-0 md:hidden flex flex-col gap-4 bg-abu-terang p-4 rounded-2xl"
          >
            {links.map((link) => (
              <li key={link.pathname} className="hover:text-blueberry">
                <Link href={link.link}>{link.pathname}</Link>
              </li>
            ))}
            <div className="flex flex-col gap-2">
              <Button type="button" variant="primary" isLink href="/login">
                Masuk
              </Button>
              <Button isLink href="/login">
                Buat akun
              </Button>
            </div>
          </ul>
        )}
      </nav>
      <div className="hidden md:flex items-center gap-2">
        <Button
          type="button"
          variant={url === "login" ? "secondary" : "primary"}
          isLink
          href="/login"
        >
          Masuk / Buat akun
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
