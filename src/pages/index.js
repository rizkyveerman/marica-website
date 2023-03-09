import theSoul from "../../public/images/poster-the-soul.png";
import mickeyMouse from "../../public/images/poster-mickey-mouse.png";
import zootopia from "../../public/images/poster-zootopia.png";
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
    <>
      <section
        id="hero"
        className="bg-bad-blueberry flex justify-between items-center px-4 h-[650px]"
      >
        <div>
          <h1 className="md:text-4xl mb-4 xl:mb-6">
            Tingkatkan Pengalaman Belajar Kamu Dengan Menonton Film
          </h1>
          <p className="text-base text-abu-terang">
            Cara yang menyenangkan untuk mempelajari hal-hal baru dan menemukan
            dunia di sekitarmu.
          </p>
          <div className="flex items-center gap-2">
            <TextInput />
            <Button type="primary">Cari film</Button>
          </div>
        </div>
        <div className="carousel carousel-center max-w-lg p-4 space-x-4">
          <div className="carousel-item">
            <Link href="/">
              <Image
                src={theSoul}
                className="rounded-3xl"
                alt="the soul 2022"
                title="the soul 2022"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link href="/">
              <Image
                src={zootopia}
                className="rounded-3xl"
                alt="zootopia"
                title="zootopia"
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link href="/">
              <Image
                src={mickeyMouse}
                className="rounded-3xl"
                alt="mickey mouse"
                title="mickey mouse"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
