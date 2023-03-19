import MainLayout from "@/layout/MainLayout";
import Button from "@/components/Button";
import Image from "next/image";
import MovieCard from "@/components/cards/MovieCard";

export async function getServerSideProps(ctx) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67bab0cae7msh55022c298b7ebc4p12216bjsnbe8224d9d264",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const movies = await fetch(
    "https://imdb-top-100-movies.p.rapidapi.com/",
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
  if (!movies) {
    return "no movie found";
  }
  return (
    <article>
      <section>
        <div className="relative w-full h-96 rounded-2xl bg-semangka/30 grid place-content-center overflow-hidden">
          {movies.slice(77, 78).map((movie) => (
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
      <section className="my-4">
        <p className="text-xl font-semibold mb-4">Film gratis terpopuler</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.slice(32, 36).map((movie) => (
            <li key={movie.imdbid} className="h-auto">
              <MovieCard
                thumbnail={movie.image}
                slug=""
                title={movie.title}
                rating={movie.rating}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="my-4">
        <p className="text-xl font-semibold mb-4">Terakhir ditambahkan</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.slice(90, 94).map((movie) => (
            <li key={movie.imdbid} className="h-auto">
              <MovieCard
                thumbnail={movie.image}
                slug=""
                title={movie.title}
                rating={movie.rating}
              />
            </li>
          ))}
        </ul>
      </section>

      <section className="my-4">
        <p className="text-xl font-semibold mb-4">Lainnya</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {movies.slice(77, 85).map((movie) => (
            <li key={movie.imdbid} className="h-auto">
              <MovieCard
                thumbnail={movie.image}
                slug=""
                title={movie.title}
                rating={movie.rating}
              />
            </li>
          ))}
        </ul>
      </section>
      <Button type="secondary">Cari semua film</Button>
    </article>
  );
}

Home.getLayout = function getLayout(page) {
  return <MainLayout title="Selamat datang di Marica">{page}</MainLayout>;
};
