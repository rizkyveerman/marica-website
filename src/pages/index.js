import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/layout/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import hero1 from "@/images/hero-1.png";
import hero2 from "@/images/hero-2.png";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import MovieCard from "@/components/cards/MovieCard";
import Link from "next/link";
import Carousel from "react-multi-carousel";

export default function Home() {
  const { userInfo, error, isLoading } = useSelector((state) => state.user);
  const router = useRouter();

  //TODO don't force user to login when the register bug was fixed!
  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  });

  return (
    <article>
      <section className="p-4">
        <div className="relative w-full h-[60vh] rounded-2xl bg-sky-300 grid place-content-center overflow-hidden">
          <Image
            src={hero1}
            alt="hero"
            fill
            objectFit="cover"
            objectPosition="center"
            required
          />
        </div>
      </section>
    </article>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
