import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';
import { favoriteMoviesSlice } from '../store/slices/favorite-movies';

import MovieCard, { MovieCardProps } from './MovieCard';

interface MovieListProps {
  movies: MovieCardProps[];
  horizontal?: boolean;
}

const MovieList: FC<MovieListProps> = ({ movies, horizontal }) => {
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies);
  const dispatch = useAppDispatch();

  return (
    <div
      className={
        horizontal
          ? `flex space-x-3 overflow-x-scroll hide-scroll-bar`
          : `grid grid-cols-3 md:grid-cols-4 gap-5 md:gap-6`
      }
    >
      {movies.map((movie) => (
        <div key={movie.id} className="relative">
          <button
            type="button"
            className="absolute top-1 left-1 text-red-500 text-2xl z-10"
            onClick={() => {
              dispatch(favoriteMoviesSlice.actions.toggle(movie));
            }}
          >
            {favoriteMovies.some(({ id }) => id === movie.id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </button>
          <Link to={`/movie/${movie.id}`}>
            <MovieCard {...movie} classes={horizontal ? 'poster-size' : ''} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
