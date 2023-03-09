import theSoul from "../../public/images/poster-the-soul.png";
import mickeyMouse from "../../public/images/poster-mickey-mouse.png";
import zootopia from "../../public/images/poster-zootopia.png";
import MainLayout from "@/layout/MainLayout";
import Button from "../components/Button";
import Image from "next/image";

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
      <section id="hero" className="flex justify-between items-center">
        <div></div>
        <div className="relative">
          <Image src={theSoul} alt="the soul 2022" title="the soul 2022" />
          <Image src={mickeyMouse} alt="mickey mouse" title="mickey mouse" />
          <Image src={zootopia} alt="zootopia" title="zootopia" />
        </div>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
