import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const MovieCard = ({ thumbnail, title, slug, rating, children }) => {
  const router = useRouter();

  return (
    <Link href={slug} className="block p-4 bg-white rounded-2xl">
      <div className="relative bg-semangka rounded-xl overflow-hidden w-full h-40">
        <Image
          src={thumbnail}
          alt={title}
          title={title}
          fill
          objectFit="cover"
          className="thumbnail hover:scale-125 transition-transform"
        />
      </div>
      <div className="py-4">
        <p className="text-arang text-lg">
          {title.length > 32 ? title.slice(0, 30) + "..." : title}
        </p>
        <p className="text-arang text-sm">
          Ratings: <span className="font-bold">{rating}</span>⭐
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
