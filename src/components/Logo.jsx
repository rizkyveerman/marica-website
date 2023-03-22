import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoMarica from "../../public/images/Logo-Marica.png";

const Logo = ({ styles }) => {
  return (
    <Link className="block md:hover:bg-pink-200 rounded-xl p-0 md:p-4" href="/">
      <Image className={styles} src={logoMarica} alt="Marica" height={42} />
    </Link>
  );
};

export default Logo;
