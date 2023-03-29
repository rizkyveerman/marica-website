import React from "react";
import Image from "next/image";
import videoThumbnail from "@/images/video-thumbnail.png";
import episode1 from "@/images/episode1.png";
import episode2 from "@/images/episode2.png";
import episode3 from "@/images/episode3.png";
import MainLayout from "@/layout/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const MoviesDetails = ({ movie }) => {
  return (
    <articles className="p-4">
      <section className="relative h-[60vh] overflow-hidden rounded-xl">
        <Image
          src={videoThumbnail}
          alt="thumbnail"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </section>
      <section className="p-4">
        <div>
          <h3>Episode</h3>
          <ul className="py-4 grid gap-4">
            <li className="bg-white rounded-xl p-4 gap-4 flex">
              <Image src={episode1} alt="episode 1" width={202} height={120} />
              <div className=" text-slate-600 flex flex-col">
                <p className="text-xl">Episode 1</p>
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
            <li className="bg-white rounded-xl p-4 gap-4 flex">
              <Image src={episode2} alt="episode 1" width={202} height={120} />
              <div className=" text-slate-600 flex flex-col">
                <p className="text-xl">Episode 2</p>
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
            <li className="bg-white rounded-xl p-4 gap-4 flex">
              <Image src={episode3} alt="episode 1" width={202} height={120} />
              <div className=" text-slate-600 flex flex-col">
                <p className="text-xl">Episode 3</p>
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
