import camelize from 'camelize-ts';

import { MovieDataResponse, MoviesDataResponse } from '../types';

export const getMovies = async (pattern: string) => {
  try {
    const endpoint = pattern ? `search/movie` : 'movie/popular';
    const params = pattern ? `&query=${pattern}` : '';

    const response = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}/${endpoint}?api_key=${process.env.REACT_APP_TMDB_API_KEY}${params}`,
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return camelize(data.results) as MoviesDataResponse[];
  } catch (err) {
    throw err;
  }
};

export const getMovie = async (movieId: number) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return camelize(data) as MovieDataResponse;
  } catch (err) {
    throw err;
  }
};

export const getSimilarMovies = async (movieId: number) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_TMDB_API_URL}/movie/${movieId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();

    return camelize(data.results) as MoviesDataResponse[];
  } catch (err) {
    throw err;
  }
};
