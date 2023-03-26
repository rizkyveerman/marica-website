import { loadMovies } from "@/libs/films/load-movies";
import MovieCard from "@/components/cards/MovieCard";
import MainLayout from "@/layout/MainLayout";
import Tag from "@/components/cards/Tag";
import Input from "@/components/inputs/Input";

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
      <header className="w-full border sticky top-0 z-10 bg-white drop-shadow-sm p-4 flex justify-between items-center">
        <Input
          type="text"
          placeholder="Cari film..."
          name="search"
          onChange={(e) => e}
        />
        <select className="p-4 bg-slate-100 rounded-lg">
          {[
            "Pilih kategori",
            "sports",
            "thriller",
            "action",
            "drama",
            "character",
            "fun",
          ].map((tag, index) => (
            <option key={index} value={tag}>
              <Tag>{tag}</Tag>
            </option>
          ))}
        </select>
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
