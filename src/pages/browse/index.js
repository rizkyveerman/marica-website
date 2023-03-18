import MovieCard from "@/components/cards/MovieCard";
import MainLayout from "@/layout/MainLayout";
import React from "react";

export async function getServerSideProps(ctx) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67bab0cae7msh55022c298b7ebc4p12216bjsnbe8224d9d264",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const movies = await fetch(
    "https://imdb-top-100-movies.p.rapidapi.com/",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return {
    props: {
      movies,
    },
  };
}

const dummyMovie = {
  rank: 1,
  title: "The Shawshank Redemption",
  thumbnail:
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
  rating: "9.3",
  id: "top1",
  year: 1994,
  image:
    "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_QL75_UX380_CR0,1,380,562_.jpg",
  description:
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  trailer: "https://www.youtube.com/embed/NmzuHjWmXOc",
  genre: ["Drama"],
  director: ["Frank Darabont"],
  writers: [
    'Stephen King (based on the short novel "Rita Hayworth and the Shawshank Redemption" by)',
    "Frank Darabont (screenplay by)",
  ],
  imdbid: "tt0111161",
};

const Browser = (props) => {
  console.log("movies", props.movies);

  if (!props.movies) {
    return "no movie found";
  }
  return (
    <article>
      <section>
        Browser
        <ul>
          {props.movies.map((movie) => (
            <li key={movie.imdbid}>
              <MovieCard
                thumbnail={movie.thumbnail}
                slug=""
                title={movie.title}
                rating={movie.rating}
              />
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

Browser.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Browser;
