export async function loadMovie(id) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67bab0cae7msh55022c298b7ebc4p12216bjsnbe8224d9d264",
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  };

  const movie = await fetch(
    "https://imdb-top-100-movies.p.rapidapi.com/" + id,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return movie;
}
