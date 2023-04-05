import React, { useState } from "react";
import Image from "next/image";
import {
  faPlay,
  faHeart,
  faListCheck,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EpisodeCard = ({ imageUrl, title, synopsis }) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      className="hover:cursor-pointer bg-white rounded-xl md:p-4 gap-4 flex flex-col md:flex-row"
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
    >
      <div className="relative min-w-max rounded-md w-full h-auto md:w-52 overflow-hidden">
        <div
          className={`${
            mouseEnter ? "block" : "hidden"
          } absolute bottom-0 left-0 right-0 p-4 bg-white/10 backdrop-blur-sm text-white/60 flex gap-4 justify-center items-center rounded-b-md transition-all`}
        >
          <p className="flex text-sm items-center gap-2 bg-white/20 py-1 px-2 rounded-full">
            <FontAwesomeIcon icon={faPlay} height={12} /> Play
          </p>
          <FontAwesomeIcon icon={faHeart} height={16} />
          <FontAwesomeIcon icon={faListCheck} height={16} />
          <FontAwesomeIcon icon={faShare} height={16} />
        </div>
        <Image
          src={imageUrl}
          alt="episode 1"
          className="object-cover object-center w-full md:w-auto md:h-32 aspect-video"
        />
      </div>
      <div className=" text-slate-600 flex flex-col">
        <p className="text-xl md:text-2xl">
          <span className="text-sky-600 text-base">Ep.1</span>
          {title}
        </p>
        <div>
          <p className="text-slate-400">{synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default EpisodeCard;
