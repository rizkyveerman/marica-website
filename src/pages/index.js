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
    <article>
      <section>
        <div className="px-16 py-8">
          <div className="carousel w-full">
            <div
              id="slide1"
              className="carousel-item relative w-full rounded-xl"
            >
              <Link href="/" className="w-full h-[300px] bg-abu"></Link>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className="carousel-item relative w-full rounded-xl"
            >
              <Link href="/" className="w-full h-[300px] bg-abu"></Link>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className="carousel-item relative w-full rounded-xl"
            >
              <Link href="/" className="w-full h-[300px] bg-abu"></Link>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
