import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const MovieCard = ({ thumbnail, title, slug, rating, children }) => {
  const router = useRouter();

  return (
    <Link href={slug} className="block p-4 bg-white rounded-2xl">
      <div className="relative bg-semangka rounded-xl overflow-hidden min-w-[280px] w-full h-40">
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
        <h3 className="text-arang">{title}</h3>
        <p className="text-arang text-sm">
          Ratings: <span className="font-bold">{rating}</span>⭐
        </p>
      </div>
    </Link>
  );
};

export default MovieCard;
