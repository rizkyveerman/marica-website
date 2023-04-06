import React, { useState, useRef } from "react";
import Image from "next/image";
import videoThumbnail from "@/images/video-thumbnail.png";
import episode1 from "@/images/episode1.png";
import episode2 from "@/images/episode2.png";
import episode3 from "@/images/episode3.png";
import MainLayout from "@/layout/MainLayout";
import {
  faPlay,
  faHeart,
  faListCheck,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import EpisodeCard from "@/components/cards/EpisodeCard";

const MoviesDetails = ({ movie }) => {
  const videoRef = useRef();

  const handleMetaData = (e) => {
    const video = videoRef.current;
    if (!video) return;
    console.log("video", video);
  };

  return (
    <articles>
      <section className="p-4 h-fit rounded-xl overflow-hidden">
        <video
          controls
          className={`block w-full rounded-xl`}
          ref={videoRef}
          onLoadedMetadata={handleMetaData}
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
        </video>
      </section>
      <section className="p-4">
        <div>
          <h3>Episode</h3>
          <ul className="py-4 grid gap-4">
            <li className="hover:cursor-pointer bg-white rounded-xl p-4 gap-4 flex flex-col md:flex-row">
              <EpisodeCard
                imageUrl={episode1}
                title="Mencari Jati Diri"
                synopsis="Lorem ipsum dolor sit amet consectetur. Facilisis ornare
                    convallis arcu blandit."
              />
            </li>
            <li className="hover:cursor-pointer bg-white rounded-xl p-4 gap-4 flex flex-col md:flex-row">
              <EpisodeCard
                imageUrl={episode2}
                title="Mencari Jati Diri"
                synopsis="Lorem ipsum dolor sit amet consectetur. Facilisis ornare
                    convallis arcu blandit."
              />
            </li>
            <li className="hover:cursor-pointer bg-white rounded-xl p-4 gap-4 flex flex-col md:flex-row">
              <EpisodeCard
                imageUrl={episode3}
                title="Mimpi
                yang Kurang Sempurna"
                synopsis="Lorem ipsum dolor sit amet consectetur. Facilisis ornare
                    convallis arcu blandit."
              />
            </li>
          </ul>
        </div>
      </section>
    </articles>
  );
};

MoviesDetails.getLayout = function getLayout(page) {
  return <MainLayout title="video">{page}</MainLayout>;
};

export default MoviesDetails;
