import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef, useContext } from "react";
import { ModalContext } from "@/libs/context/modal-context";
import Button from "./Button";
import TextInput from "./TextInput";

const Navbar = () => {
  const modalCtx = useContext(ModalContext);
  console.log("modalCtx", modalCtx.isShow);

  return (
    <header className="p-4 flex justify-between items-center bg-white dark:bg-bad-semangka z-50">
      <div className="hidden md:flex gap-1">
        <TextInput />
        <Button>Cari</Button>
      </div>
      <div className="block md:hidden">
        {" "}
        <Link
          className="text-semangka font-bold text-xl block py-4 hover:bg-semangka rounded-xl pl-4"
          href="/"
        >
          Marica
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="secondary"
          isClicked={modalCtx.toggleModal}
        >
          Masuk ke Marica
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
