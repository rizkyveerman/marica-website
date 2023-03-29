import React, { useState } from "react";
import Image from "next/image";
import videoThumbnail from "@/images/video-thumbnail.png";
import episode1 from "@/images/episode1.png";
import episode2 from "@/images/episode2.png";
import episode3 from "@/images/episode3.png";
import MainLayout from "@/layout/MainLayout";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "@/components/buttons/Button";

const MoviesDetails = ({ movie }) => {
  const [isHoveringEps, setIsHoveringEps] = useState(false);
  return (
    <articles>
      <section className="p-4 h-[60vh]">
        <div className="w-full h-full relative overflow-hidden rounded-xl">
          <div className="absolute left-0 right-0 top-0 bottom-0 z-50 p-4 md:p-8 lg:p-12 flex flex-col justify-end">
            <h1 className="text-white mb-8">The Soul</h1>
            <p className="text-white mb-2 max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Facilisis ornare convallis
              arcu blandit. Scelerisque iaculis arcu turpis non quam. A
              elementum in aliquam morbi morbi semper dui.
            </p>
            <Button icon={faPlay} className="w-fit text-white border-white">
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
      </section>
      <section className="p-4">
        <div>
          <h3>Episode</h3>
          {/* //TODO add play icon when hovering the episode item */}
          <ul className="py-4 grid gap-4">
            <li className="hover:cursor-pointer bg-white rounded-xl p-4 gap-4 flex flex-col md:flex-row">
              <Image
                src={episode1}
                alt="episode 1"
                className="rounded-md w-full h-auto md:w-52 md:h-32 object-cover object-center"
              />
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
                  src={episode2}
                  alt="episode 2"
                  className="rounded-md w-full h-auto aspect-video object-cover object-center"
                />
              </div>
              <div className=" text-slate-600 flex flex-col">
                <p className="text-xl md:text-2xl">
                  <span className="text-pink-600 text-base">Ep.2</span> Mimpi
                  yang Sempurna
                </p>
                <div>
                  <p className="text-slate-400">
                    Lorem ipsum dolor sit amet consectetur. Facilisis ornare
                    convallis arcu blandit. Scelerisque iaculis arcu turpis non
                    quam. A elementum in aliquam morbi morbi semper dui. Justo
                    pellentesque ac aenean rutrum amet vulputate fringilla dui.
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
              <Image
                src={episode3}
                alt="episode 3"
                className="rounded-md w-full h-auto md:w-52 md:h-32 object-cover object-center"
              />
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
