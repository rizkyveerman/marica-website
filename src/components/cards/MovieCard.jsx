import { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
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
      <div className="relative bg-blueberry rounded-xl overflow-hidden min-w-[280px] w-full h-40">
        <Image
          src={thumbnail}
          alt={title}
          title={title}
          fill
          objectFit="cover"
          className="thumbnail hover:scale-125 transition-transform"
        />
        <div
          className={`absolute left-0 right-0 bottom-0 p-4 bg-blueberry ${
            showDetails
              ? "translate-y-0 transition-transform"
              : "translate-y-full transition-transform"
          }`}
        >
          <h3 className="text-white">{title}</h3>
          <p className="text-white text-sm">
            Ratings: <span className="font-bold">{rating}</span>⭐
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
