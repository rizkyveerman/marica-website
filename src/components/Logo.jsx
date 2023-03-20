import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoMarica from "../../public/images/Logo-Marica.png";

const Logo = ({ styles }) => {
  return (
    <Link
      className="text-semangka font-bold text-xl block py-4 hover:bg-semangka/20 rounded-xl p-4"
      href="/"
    >
      <Image className={styles} src={logoMarica} alt="Marica" height={48} />
    </Link>
  );
};

export default Logo;
