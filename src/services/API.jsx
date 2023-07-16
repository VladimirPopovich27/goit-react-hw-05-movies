import PropTypes from 'prop-types';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '91a00928249c8bc2bbd26dc9aa02f7be';

export const getTopMovies = async () => {
  const response = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Smth went wrong');
  }
  return response.json();
};

export const getMovieDetails = async movieId => {
  const results = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  if (!results.ok) {
    throw new Error('Something went wrong');
  }
  return results.json();
};

export const getMovies = async currentQuery => {
  const results = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&&query=${currentQuery}&include_adult=false&language=en-US&page=1`
  );
  if (!results.ok) {
    throw new Error('Smth went wrong');
  }
  return results.json();
};

export const getCast = async movieId => {
  const results = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  if (!results.ok) {
    throw new Error('Smth went wrong');
  }
  return results.json();
};

export const getReviews = async movieId => {
  const results = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  if (!results.ok) {
    throw new Error('Smth went wrong');
  }
  return results.json();
};

getMovieDetails.propTypes = {
  movieId: PropTypes.number.isRequired,
};

getMovies.propTypes = {
  currentQuery: PropTypes.string.isRequired,
};

getCast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

getReviews.propTypes = {
  movieId: PropTypes.number.isRequired,
};
