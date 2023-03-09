import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { Nunito } from "next/font/google";
import MainLayout from "@/layout/MainLayout";
import Button from "../components/Button";

const nunito = Nunito({ subsets: ["latin"] });

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
  const colorMode = useColorModeValue("#000", "#EAEFFA");
  return <>homepage</>;
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
