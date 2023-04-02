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
import Button from "@/components/buttons/Button";
import VideoPlayer from "@/components/players/VideoPlayer";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

const MoviesDetails = ({ movie }) => {
  const [isPlay, setIsPlay] = useState(false);
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
      {/* <section className="p-4 h-[60vh]">
        <div className="w-full h-full relative overflow-hidden rounded-xl">
          <div className="absolute left-0 right-0 top-0 bottom-0 z-50 p-4 md:p-8 lg:p-12 flex flex-col justify-end">
            <h1 className="text-white mb-8">The Soul</h1>
            <p className="text-white mb-2 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Facilisis ornare convallis
              arcu blandit. Scelerisque iaculis arcu turpis non quam. A
              elementum in aliquam morbi morbi semper dui.
            </p>
            <Button
              icon={faPlay}
              className="w-fit text-white border-white"
              isClicked={() => "clicked"}
            >
              Tonton sekarang
            </Button>
          </div>
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-t from-blue-600/50 to-blue-600/0 z-40"></div>
          <Image
            src={videoThumbnail}
            alt="thumbnail"
            fill
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section> */}
      <section className="p-4">
        <div>
          <h3>Episode</h3>
          {/* //TODO add play icon when hovering the episode item */}
          <ul className="py-4 grid gap-4">
            <li className="hover:cursor-pointer bg-white rounded-xl p-4 gap-4 flex flex-col md:flex-row">
              <div className="relative min-w-max rounded-md w-full h-auto md:w-52 overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-sm text-white/60 flex gap-4 justify-center items-center rounded-b-md">
                  <FontAwesomeIcon icon={faHeart} height={16} />
                  <FontAwesomeIcon icon={faListCheck} height={16} />
                  <FontAwesomeIcon icon={faShare} height={16} />
                </div>
                <Image
                  src={episode1}
                  alt="episode 1"
                  className="w-max object-cover object-center"
                />
              </div>
              <div className=" text-slate-600 flex flex-col">
                <p className="text-xl md:text-2xl">
                  <span className="text-pink-600 text-base">Ep.1</span> John
                  mencari jati diri
                </p>
                <div>
                  <p className="text-slate-400">
                    Lorem ipsum dolor sit amet consectetur. Facilisis ornare
                    convallis arcu blandit. Scelerisque iaculis arcu turpis non
                    quam.
                  </p>
                  <Link
                    href="/:id"
                    className="underline text-slate-500 hover:text-pink-600"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </li>
            <li className="hover:cursor-pointer bg-white rounded-xl p-4 gap-4 flex flex-col md:flex-row">
              <div className="relative min-w-max rounded-md w-full h-auto md:w-52 overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-sm text-white/60 flex gap-4 justify-center items-center rounded-b-md">
                  <FontAwesomeIcon icon={faHeart} height={16} />
                  <FontAwesomeIcon icon={faListCheck} height={16} />
                  <FontAwesomeIcon icon={faShare} height={16} />
                </div>
                <Image
                  src={episode2}
                  alt="episode 2"
                  className="w-max object-cover object-center"
                />
              </div>
              <div className=" text-slate-600 flex flex-col">
                <p className="text-xl md:text-2xl">
                  <span className="text-pink-600 text-base">Ep.2</span> Mimpi
                  yang Kurang Sempurna
                </p>
                <div>
                  <p className="text-slate-400">
                    Lorem ipsum dolor sit amet consectetur. Facilisis ornare
                    convallis arcu blandit.
                  </p>
                  <Link
                    href="/:id"
                    className="underline text-slate-500 hover:text-pink-600"
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </li>
            <li className="hover:cursor-pointer bg-white rounded-xl p-4 gap-4 flex flex-col md:flex-row">
              <div className="relative min-w-max rounded-md w-full h-auto md:w-52 overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-sm text-white/60 flex gap-4 justify-center items-center rounded-b-md">
                  <FontAwesomeIcon icon={faHeart} height={16} />
                  <FontAwesomeIcon icon={faListCheck} height={16} />
                  <FontAwesomeIcon icon={faShare} height={16} />
                </div>
                <Image
                  src={episode3}
                  alt="episode 3"
                  className="w-max object-cover object-center"
                />
              </div>
              <div className=" text-slate-600 flex flex-col">
                <p className="text-xl md:text-2xl">
                  <span className="text-pink-600 text-base">Ep.3</span> Hidup
                  dengan Hobi
                </p>
                <div>
                  <p className="text-slate-400">
                    Lorem ipsum dolor sit amet consectetur. Facilisis ornare
                    convallis arcu blandit.
                  </p>
                  <Link
                    href="/:id"
                    className="underline text-slate-500 hover:text-pink-600"
                  >
                    Detail
                  </Link>
                </div>
              </div>
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
