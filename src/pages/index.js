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
      <section id="hero" className="flex items-center px-4 h-[650px] gap-8">
        <div className="translate-y-10">
          <h1 className="md:text-4xl mb-4 xl:mb-6 text-abu-terang max-w-xl">
            Tingkatkan Pengalaman Belajar Kamu Dengan Menonton Film
          </h1>
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
    </article>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
