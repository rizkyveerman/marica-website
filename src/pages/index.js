import styles from "../styles/Home.module.css";
import theSoul from "../../public/images/poster-the-soul.png";
import mickeyMouse from "../../public/images/poster-mickey-mouse.png";
import zootopia from "../../public/images/poster-zootopia.png";
import heroBg from "../../public/images/hero-bg.png";
import MainLayout from "@/layout/MainLayout";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import TextInput from "@/components/TextInput";

const faq = [
  {
    question: "Apa itu Marica?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Apakah marica tepat untuk saya?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function Home() {
  return (
    <article className="bg-bad-blueberry">
      <section
        id="hero"
        className={`${styles.hero} flex items-center px-28 h-[650px] gap-8`}
      >
        <div className="translate-y-10">
          <h2 className="mb-4 text-abu-terang max-w-xl">
            Tingkatkan Pengalaman Belajar Kamu Dengan Menonton Film
          </h2>
          <p className="text-base text-abu-terang max-w-md mb-3 leading-[150%]">
            Cara yang menyenangkan untuk mempelajari hal-hal baru dan menemukan
            dunia di sekitarmu.
          </p>
          <div className="flex items-center gap-2">
            <TextInput />
            <Button type="primary">Cari film</Button>
          </div>
        </div>
      </section>
      <section className="pl-4 my-28">
        <h3 className="text-jeruk mb-8">Sedang Trending</h3>
        <div className="carousel rounded-box space-x-4">
          {[1, 2, 3, 4].map((number) => (
            <div
              key={number}
              className="carousel-item rounded-xl w-96 h-72 bg-abu-terang"
            >
              <Link href="/">trending video</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="pl-4 my-28">
        <h3 className="text-jeruk mb-8">Serial Baru</h3>
        <div className="carousel rounded-box space-x-4">
          {[1, 2, 3, 4].map((number) => (
            <div
              key={number}
              className="carousel-item rounded-xl w-96 h-72 bg-abu-terang"
            >
              <Link href="/">trending video</Link>
            </div>
          ))}
        </div>
      </section>
      <section className="my-28 relative before:block before:bg-abu-terang before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 before:rounded-xl">
        <div className="flex justify-center items-center gap-7 relative z-20 overflow-hidden">
          <div className="z-20">
            <h3>Tonton disemua perangkat.</h3>
            <p>
              Streaming film sambil mempelajari hal baru melalui smartphone,
              tablet, laptop, dan TV.
            </p>
            <Button type="primary">Coba gratis!</Button>
          </div>
          <div className="w-80 h-72 rounded-2xl bg-blueberry"></div>
        </div>
      </section>
      <section className="my-28 relative before:block before:bg-abu-terang before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 before:rounded-xl">
        <div className="flex justify-center items-center flex-row-reverse gap-7 relative z-20 overflow-hidden">
          <div className="z-20">
            <h3>Tonton disemua perangkat.</h3>
            <p>
              Streaming film sambil mempelajari hal baru melalui smartphone,
              tablet, laptop, dan TV.
            </p>
            <Button type="primary">Coba gratis!</Button>
          </div>
          <div className="w-80 h-72 rounded-2xl bg-blueberry"></div>
        </div>
      </section>
    </article>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
