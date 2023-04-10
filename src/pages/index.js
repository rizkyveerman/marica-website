import { useRouter } from "next/router";
import MainLayout from "@/layout/MainLayout";
import { useSelector } from "react-redux";
import hero1 from "@/images/hero-1.png";
import hero2 from "@/images/hero-2.png";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export default function Home() {
  const { userInfo, error, isLoading } = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <article>
      <section className="p-4">
        <div
          drag="x"
          className="relative w-full h-[60vh] rounded-2xl bg-sky-300 grid place-content-center overflow-hidden"
        >
          <div id="carousel-item" drag="x" className="flex">
            <div className="image w-full h-full">
              <Image
                src={hero1}
                alt="hero"
                fill
                className="object-cover object-center"
                required
              />
            </div>
            <div className="image w-full h-full">
              <Image
                src={hero2}
                alt="hero"
                fill
                className="object-cover object-center"
                required
              />
            </div>
          </div>
        </div>
      </section>
      <section className="p-4">
        <div className="flex justify-between items-center py-2">
          <h4 className="text-xl font-semibold mb-4">Terpopuler</h4>
          <Link className="text-sky-600 underline" href="/browse">
            Lihat semua
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/nu3LJFW94yg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/eqLySEpHZew"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/fc1xsOr9Zek"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
        </ul>
      </section>
      <section className="p-4">
        <div className="flex justify-between items-center py-2">
          <h4 className="text-xl font-semibold mb-4">Direkomendasikan</h4>
          <Link className="text-sky-600 underline" href="/browse">
            Lihat semua
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/W2_Cfqthq_M"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/DTR-SptSdGE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/B-ytMSuwbf8"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
        </ul>
      </section>
      <section className="p-4">
        <div className="flex justify-between items-center py-2">
          <h4 className="text-xl font-semibold mb-4">Terakhir ditambahkan</h4>
          <Link className="text-sky-600 underline" href="/browse">
            Lihat semua
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/5higYnVi4Ro"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/U0wTDK0VOeY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
          <li className="h-auto w-full">
            <iframe
              className="h-52 w-full rounded-xl"
              src="https://www.youtube.com/embed/Qto1u_uetiw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
        </ul>
      </section>
    </article>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
