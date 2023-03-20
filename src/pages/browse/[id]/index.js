import React from "react";
import { loadMovies } from "@/libs/films/load-movies";
import { loadMovie } from "@/libs/films/load-movie";
import { useRouter } from "next/router";

const MoviesDetails = ({ movie }) => {
  const router = useRouter();
  console.log("movie: ", movie);

  const { slug } = router;

  return <div>MoviesDetails: {slug}</div>;
};

export async function getStaticPaths() {
  const movies = await loadMovies();

  const moviesPaths = movies.map((movie) => {
    return {
      params: {
        id: movie.id.toString(),
      },
    };
  });

  console.log("moviesPaths", moviesPaths);

  return { paths: moviesPaths, fallback: false };
}

export async function getStaticProps(ctx) {
  const id = ctx.params.id;
  const movie = loadMovie(id);

  return {
    props: { movie },
  };
}

export default MoviesDetails;
