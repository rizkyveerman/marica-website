import React from "react";
import Image from "next/image";
import hero2 from "@/images/hero-2.png";
import MainLayout from "@/layout/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const MoviesDetails = ({ movie }) => {
  return (
    <articles className="p-4">
      <section className="relative h-[60vh] overflow-hidden rounded-xl">
        <Image
          src={hero2}
          alt="thumbnail"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </section>
      <section>
        <div>
          <h3>Episode</h3>
          <ul>
            {[1, 2, 3].map((index) => (
              <li key={index}>
                <div className="text-slate-600 flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl">Dion W</p>
                    <p className="flex gap-1 items-center">
                      <span className="text-amber-800"></span>
                      65
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-400">
                      Tertarik dengan menggambar perspektif. Bercita-cita
                      menjadi product designer.
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
            ))}
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
