export async function loadMovies() {
  // --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
  // --header 'Accept: application/json' \
  const videos = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc%2Cc0KYU2j0TM4%2CeIho2S0ZahI&key=${process.env.API_KEY}`
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
  return videos;
}
