import MainLayout from "@/layout/MainLayout";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import MovieCard from "@/components/cards/MovieCard";
import Link from "next/link";

export async function getServerSideProps(ctx) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67bab0cae7msh55022c298b7ebc4p12216bjsnbe8224d9d264",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };

  const movies = await fetch(
    "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return {
    props: {
      movies,
    },
  };
}

export default function Home({ movies }) {
  console.log("movies", movies);
  return (
    <article>
      <section className="p-4">
        <div className="relative w-full h-[60vh] rounded-2xl bg-pink-300 grid place-content-center overflow-hidden">
          {movies.data.slice(0, 1).map((movie) => (
            <div key={movie.imdbid} className="h-auto">
              <Image
                src={movie.image}
                alt={movie.title}
                fill
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="p-4">
        {" "}
        <div className="flex justify-between items-center py-2">
          <p className="text-xl font-semibold mb-4">Terpopuler</p>
          <Link className="text-semangka underline" href="/all-movies">
            Lihat semua
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.data.slice(0, 4).map((movie) => (
            <li
              key={movie.imdbid}
              className="h-auto rounded-xl overflow-hidden"
            >
              <Link href="/" className="relative block max-w-xs h-72">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  title={movie.title}
                  fill
                  objectFit="cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="p-4">
        <div className="flex justify-between items-center py-2">
          <p className="text-xl font-semibold mb-4">Direkomendasikan</p>
          <Link className="text-semangka underline" href="/all-movies">
            Lihat semua
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.data.slice(0, 8).map((movie) => (
            <li
              key={movie.imdbid}
              className="h-auto rounded-xl overflow-hidden"
            >
              <Link href="/" className="relative block w-full h-64">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  title={movie.title}
                  fill
                  objectFit="cover"
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="p-4">
        {" "}
        <div className="flex justify-between items-center py-2">
          <p className="text-xl font-semibold mb-4">Terakhir ditambahkan</p>
          <Link className="text-semangka underline" href="/all-movies">
            Lihat semua
          </Link>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.data.slice(4, 8).map((movie) => (
            <li
              key={movie.imdbid}
              className="h-auto rounded-xl overflow-hidden"
            >
              <Link href="/" className="relative block w-full h-64">
                <Image
                  src={movie.image}
                  alt={movie.title}
                  title={movie.title}
                  fill
                  objectFit="cover"
                />
              </Link>
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
