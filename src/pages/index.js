import MainLayout from "@/layout/MainLayout";
import Button from "@/components/Button";
import Image from "next/image";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export async function getServerSideProps(ctx) {
  const res = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en"
  );

  const movies = await res.json();

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
      <section>
        <div className="w-full h-96 rounded-2xl bg-semangka/30 grid place-content-center">
          {/* {movies.slice(0, 1).map((movie) => (
            <Image
              key={movie.imdbID}
              src={movie.backdropURls.original}
              alt={movie.title}
            />
          ))} */}
        </div>
      </section>
      <section className="my-4">
        <p className="text-xl font-semibold mb-4">Film gratis terpopuler</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((card) => (
            <div
              key={card}
              className="w-full h-40 bg-semangka/30 rounded-xl"
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
              className="w-full h-44 bg-semangka/30 rounded-xl"
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
              className="w-full h-40 bg-semangka/30 rounded-xl"
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
