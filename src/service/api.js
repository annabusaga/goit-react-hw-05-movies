import axios from 'axios';
const KEY = '5ff0dbbd9de29453fecf8f472843a3f6';
const URL = `https://api.themoviedb.org/3/`;

export async function getTrendMovies(params) {
  return await axios(`${URL}trending/all/day?api_key=${KEY}`);
}

export async function getDetaildMovie(id) {
  return await axios(`${URL}movie/${id}?api_key=${KEY}`);
}

export async function getSearchMovie(query) {
  return await axios(`${URL}search/movie?query=${query}&api_key=${KEY}`);
}

export async function getCast(movie_id) {
  return await axios(`${URL}movie/${movie_id}/credits?api_key=${KEY}`);
}
