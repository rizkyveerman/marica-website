import styles from "../styles/Home.module.css";
import theSoul from "../../public/images/poster-the-soul.png";
import mickeyMouse from "../../public/images/poster-mickey-mouse.png";
import zootopia from "../../public/images/poster-zootopia.png";
import heroBg from "../../public/images/hero-bg.png";
import MainLayout from "@/layout/MainLayout";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/cards/MovieCard";
import Button from "@/components/Button";

export async function getServerSideProps(ctx) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67bab0cae7msh55022c298b7ebc4p12216bjsnbe8224d9d264",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  const movies = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en",
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => console.log("error:: ", error));

  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }) {
  return (
    <article>
      <section>
        <div className="w-full h-96 rounded-2xl bg-indigo-200 grid place-content-center">
          poster slide
        </div>
      </section>
      <section className="my-4">
        <p className="text-xl font-semibold mb-4">Film gratis terpopuler</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((card) => (
            <div
              key={card}
              className="w-full h-40 bg-indigo-200 rounded-xl"
            ></div>
          ))}
        </div>
      </section>
      <section className="my-4">
        <p className="text-xl font-semibold mb-4">Terakhir ditambahkan</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((card) => (
            <div
              key={card}
              className="w-full h-44 bg-indigo-200 rounded-xl"
            ></div>
          ))}
        </div>
      </section>

      <section className="my-4">
        <p className="text-xl font-semibold mb-4">Lainnya</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((card) => (
            <div
              key={card}
              className="w-full h-40 bg-indigo-200 rounded-xl"
            ></div>
          ))}
        </div>
      </section>
      <Button type="secondary">Cari semua film</Button>
    </article>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
