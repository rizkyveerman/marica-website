import React from "react";
import { loadMovies } from "@/libs/films/load-movies";
import { loadMovie } from "@/libs/films/load-movie";
import { useRouter } from "next/router";

const MoviesDetails = ({ movie }) => {
  const router = useRouter();

  const { slug } = router;

  return (
    <section className="max-w-7xl mx-auto my-0 border">
      <div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eqLySEpHZew"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

// export async function getStaticPaths() {
//   const movies = await loadMovies();

//   const moviesPaths = movies.map((movie) => {
//     return {
//       params: {
//         id: movie.id.toString(),
//       },
//     };
//   });

//   console.log("moviesPaths", moviesPaths);

//   return { paths: moviesPaths, fallback: false };
// }

// export async function getStaticProps(ctx) {
//   const id = ctx.params.id;
//   const movie = loadMovie(id);

//   return {
//     props: { movie },
//   };
// }

export default MoviesDetails;
