export async function getStaticProps() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "67bab0cae7msh55022c298b7ebc4p12216bjsnbe8224d9d264",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com",
    },
  };
  const res = await fetch(
    "https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F120&output_language=en",
    options
  );

  const data = await res.json();
  return {
    props: { data },
  };
}

function Trial({ data }) {
  console.log("data", data);
  return <p>{data.title}</p>;
}

export default Trial;
