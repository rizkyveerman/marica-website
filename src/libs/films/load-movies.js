export async function loadMovies() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67bab0cae7msh55022c298b7ebc4p12216bjsnbe8224d9d264",
      "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
    },
  };

  const movies = await fetch(
    "https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return movies.data;
}
