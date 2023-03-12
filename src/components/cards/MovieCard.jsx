import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const MovieCard = ({ thumbnail, title, slug, rating, children }) => {
  const [showDetails, setShowDetails] = useState(false);
  const router = useRouter();
  return (
    <Link
      href={slug}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
    >
      <div className="relative bg-blueberry rounded-xl overflow-hidden w-80 h-52">
        <Image
          src={thumbnail}
          alt={title}
          title={title}
          fill
          objectFit="cover"
          className="hover:scale-150"
        />
        {showDetails && (
          <div className="absolute left-0 right-0 bottom-0 p-4 bg-blueberry">
            <p>{title}</p>
            <div>Ratings: {rating}</div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
