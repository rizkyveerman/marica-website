import { loadMovies } from "@/libs/films/load-movies";
import MovieCard from "@/components/cards/MovieCard";
import MainLayout from "@/layout/MainLayout";
import Tag from "@/components/cards/Tag";

export async function getServerSideProps(ctx) {
  const videos = await loadMovies();

  return {
    props: {
      videos,
    },
  };
}

const Browser = ({ videos }) => {
  return (
    <article>
      <header className="sticky top-0 z-50 bg-white drop-shadow-sm p-4">
        <ul className="flex flex-wrap gap-2 justify-start items-center">
          {[
            "all",
            "sports",
            "thriller",
            "action",
            "drama",
            "character",
            "fun",
          ].map((tag, index) => (
            <li key={index}>
              <Tag>{tag}</Tag>
            </li>
          ))}
        </ul>
      </header>
      <section className="p-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {videos.items.length > 0 ? (
            videos.items.map((video) => (
              <li key={video.id} className="h-auto">
                <MovieCard
                  thumbnail={video.snippet.thumbnails.high.url}
                  slug={`/browse/${video.id}`}
                  title={video.snippet.title}
                  rating={video.rating}
                />
              </li>
            ))
          ) : (
            <p>No videos found</p>
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
