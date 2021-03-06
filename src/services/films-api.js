import axios from 'axios';

const KEY = '222d2b89e8701088edcf9049fa569980';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function fetchPopularFilms() {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${KEY}`,
  );

  const data = response.data.results;

  return data;
}

export async function fetchSearchFilm(query) {
  if (query === '' || query === null) return;

  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1`,
  );

  const data = response.data.results;

  return data;
}
export async function getFilmDetails(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`,
  );

  const data = response.data;

  return data;
}
export async function getFilmCredits(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`,
  );

  const data = response.data.cast;

  return data;
}
export async function getFilmReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US`,
  );

  const data = response.data.results;

  return data;
}
