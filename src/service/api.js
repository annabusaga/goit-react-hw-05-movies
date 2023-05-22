import axios from 'axios';
const KEY = '5ff0dbbd9de29453fecf8f472843a3f6';
const URL = `https://api.themoviedb.org/3/`;

export async function getTrendMovies(params) {
  return await axios(`${URL}trending/all/day?api_key=${KEY}`);
}
