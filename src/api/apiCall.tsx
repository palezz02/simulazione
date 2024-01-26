import axios from "axios";

const api_key = "c3804e9a";

export type Films = {
  Title:string,
  Year:number,
  imdbID:string,
  Type:string,
  Poster:string
}


export async function getMovies() {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${api_key}&s=jurassic_park`);
    console.log(response)
    return response.data.Search
  } catch (error) {
    console.error(error);
  }
}

export async function getMovie() {
  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${api_key}&i=tt0066026`);
    return response.data
  } catch (error) {
    console.error(error);
  }
}