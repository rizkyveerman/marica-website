import MainLayout from "@/layout/MainLayout";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import MovieCard from "@/components/cards/MovieCard";
import Link from "next/link";

export async function getServerSideProps(ctx) {
  const videos = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return {
    props: {
      videos,
    },
  };
}

export default function Home({ videos }) {
  console.log("videos", videos.items);
  return (
    <article>
      <section className="p-4">
        <div className="relative w-full h-[60vh] rounded-2xl bg-pink-300 grid place-content-center overflow-hidden">
          {videos.items.slice(0, 1).map((video) => (
            <div key={video.id} className="h-auto">
              {video.snippet.title}
              <Image
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                fill
                objectFit="cover"
                objectPosition="center"
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
          {videos.items.map((video) => (
            <li
              key={video.imdbid}
              className="h-auto rounded-xl overflow-hidden"
            >
              <Link href="/" className="relative block h-72">
                <Image
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  title={video.snippet.title}
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
          {videos.items.map((video) => (
            <li key={video.id} className="h-auto rounded-xl overflow-hidden">
              <Link href="/" className="relative block w-full h-64">
                <Image
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  title={video.snippet.title}
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
          {videos.items.map((video) => (
            <li key={video.id} className="h-auto rounded-xl overflow-hidden">
              <Link href="/" className="relative block w-full h-64">
                <Image
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  title={video.snippet.title}
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
