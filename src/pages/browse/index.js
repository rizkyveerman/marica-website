import { loadMovies } from "@/libs/films/load-movies";
import MovieCard from "@/components/cards/MovieCard";
import MainLayout from "@/layout/MainLayout";

export async function getServerSideProps(ctx) {
  const movies = await loadMovies();

  return {
    props: {
      movies,
    },
  };
}

const Browser = (props) => {
  return (
    <article>
      <section>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {props.movies.length > 0 ? (
            props.movies.map((movie) => (
              <li key={movie.imdbid} className="h-auto">
                <MovieCard
                  thumbnail={movie.image}
                  slug={`/browse/${movie.id}`}
                  title={movie.title}
                  rating={movie.rating}
                />
              </li>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </ul>
      </section>
    </article>
  );
};

Browser.getLayout = function getLayout(page) {
  return <MainLayout title="Semua movies di Marica">{page}</MainLayout>;
};

export default Browser;
