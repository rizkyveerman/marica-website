import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const EpisodeCard = ({ imageUrl, title, synopsis, slug }) => {
  const [isHoveringEps, setIsHoveringEps] = useState(false);
  return (
    <li className="bg-white rounded-xl p-4 gap-4 flex flex-col md:flex-row">
      <div
        className="hover:cursor-pointer relative"
        onMouseEnter={() => setIsHoveringEps(true)}
        onMouseLeave={() => setIsHoveringEps(false)}
      >
        {isHoveringEps && (
          <FontAwesomeIcon
            icon={faPlay}
            height={24}
            className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        )}
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-md w-full h-auto aspect-video object-cover object-center"
        />
      </div>
      <div className=" text-slate-600 flex flex-col">
        <p className="text-xl md:text-2xl">
          <span className="text-pink-600 text-base">Ep.2</span>
          {title}
        </p>
        <div>
          <p className="text-slate-400">{synopsis}</p>
          <Link
            href={slug}
            className="underline text-slate-500 hover:text-pink-600"
          >
            Detail
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EpisodeCard;
