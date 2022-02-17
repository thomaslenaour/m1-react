import moviesData from '../data';
import { MovieDataResponse } from '../types';

type MovieCategoryIdentifiant = keyof typeof moviesData.genres;

const formatData = (movies: MovieDataResponse[]) => {
  return movies.map((movie) => ({
    id: movie.id,
    posterPath: movie.poster_path,
    title: movie.title,
  }));
};

export const getMovies = () => {
  return formatData(moviesData.movies);
};

export const getMovie = (movieId: number) => {
  return moviesData.movies.find((movie) => movie.id === movieId);
};

export const getCategories = (genresIds: number[]) => {
  return genresIds.reduce(
    (acc, val) => [...acc, moviesData.genres[val as MovieCategoryIdentifiant]],
    [] as string[],
  );
};

export const getSimilarMovies = (
  genresIds: number[],
  currentMovieId: number,
) => {
  return formatData(
    moviesData.movies.filter(
      (movie) =>
        genresIds.some((genreId) => movie.genre_ids.includes(genreId)) &&
        movie.id !== currentMovieId,
    ),
  );
};
