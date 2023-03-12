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

const movie = {
  imdbID: "tt2385126",
  tmdbID: "412186",
  imdbRating: 55,
  imdbVoteCount: 252,
  tmdbRating: 59,
  backdropPath: "/5MnTrwEBHkSlktid9bkY9W4o98G.jpg",
  backdropURLs: {
    300: "https://image.tmdb.org/t/p/w300/5MnTrwEBHkSlktid9bkY9W4o98G.jpg",
    780: "https://image.tmdb.org/t/p/w780/5MnTrwEBHkSlktid9bkY9W4o98G.jpg",
    1280: "https://image.tmdb.org/t/p/w1280/5MnTrwEBHkSlktid9bkY9W4o98G.jpg",
    original:
      "https://image.tmdb.org/t/p/original/5MnTrwEBHkSlktid9bkY9W4o98G.jpg",
  },
  originalTitle: "'76",
  genres: [18, 10749],
  countries: ["NG"],
  year: 2016,
  runtime: 118,
  cast: [
    "Rita Dominic",
    "Ramsey Nouah",
    "Efetobore Afatakpa",
    "Nenye Eke",
    "Nelly Ekwereogo",
    "Ibinabo Fiberesima",
    "Chidi Mokeme",
  ],
  significants: ["Izu Ojukwu"],
  title: "'76",
  overview:
    "Nollywood superstars Ramsey Nouah, Rita Dominic, and Chidi Mokeme headline this gripping drama set against the backdrop of the attempted 1976 military coup against the government of General Murtala Mohammed.",
  tagline: "",
  video: "WuWL33z7brM",
  posterPath: "/2TOA28EMpBjz4jmlpBPKvZLdwAf.jpg",
  posterURLs: {
    92: "https://image.tmdb.org/t/p/w92/2TOA28EMpBjz4jmlpBPKvZLdwAf.jpg",
    154: "https://image.tmdb.org/t/p/w154/2TOA28EMpBjz4jmlpBPKvZLdwAf.jpg",
    185: "https://image.tmdb.org/t/p/w185/2TOA28EMpBjz4jmlpBPKvZLdwAf.jpg",
    342: "https://image.tmdb.org/t/p/w342/2TOA28EMpBjz4jmlpBPKvZLdwAf.jpg",
    500: "https://image.tmdb.org/t/p/w500/2TOA28EMpBjz4jmlpBPKvZLdwAf.jpg",
    780: "https://image.tmdb.org/t/p/w780/2TOA28EMpBjz4jmlpBPKvZLdwAf.jpg",
    original:
      "https://image.tmdb.org/t/p/original/2TOA28EMpBjz4jmlpBPKvZLdwAf.jpg",
  },
  age: 12,
  streamingInfo: {
    netflix: {
      us: {
        link: "https://www.netflix.com/title/81412227/",
        added: 1653676890,
        leaving: 0,
      },
    },
  },
  originalLanguage: "en",
};

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
        <ul className="flex flex-wrap flex-grow justify-center gap-4">
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
