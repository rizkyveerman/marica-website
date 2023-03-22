import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoMarica from "../../public/images/Logo-Marica.png";

const Logo = ({ styles }) => {
  return (
    <Link href="/">
      <Image
        className={styles}
        src={logoMarica}
        alt="Marica"
        height={42}
        priority
      />
    </Link>
  );
};

export default Logo;
