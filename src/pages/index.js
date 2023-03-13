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
import MovieCard from "@/components/cards/MovieCard";

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
  console.log("props", movies);
  return (
    <article>
      <section>
        <div className="w-full h-[60vh] bg-blueberry rounded-2xl"></div>
      </section>
      <section className="p-4">
        <ul className="flex flex-wrap flex-grow justify-start gap-4">
          {movies.results.map((movie) => (
            <li key={movie.imdbID}>
              <MovieCard
                thumbnail={movie.backdropURLs[300]}
                title={movie.title}
                slug={movie.streamingInfo.netflix.us}
                rating={movie.imdbRating}
              />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
