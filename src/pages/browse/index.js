import MainLayout from "@/layout/MainLayout";
import React from "react";

export async function getServerSideProps(ctx) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67bab0cae7msh55022c298b7ebc4p12216bjsnbe8224d9d264",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };

  const movies = await fetch(
    "https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&output_language=en&language=en",
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => console.log("error:: ", error));

  return {
    props: {
      movies,
    },
  };
}

const Browser = ({ movie }) => {
  return <div>Browser</div>;
};

Browser.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Browser;
