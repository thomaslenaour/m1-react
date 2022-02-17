import { FC } from 'react';
import { Link } from 'react-router-dom';

import MovieCard, { MovieCardProps } from './MovieCard';

interface MovieListProps {
  movies: MovieCardProps[];
  horizontal?: boolean;
}

const MovieList: FC<MovieListProps> = ({ movies, horizontal }) => {
  return (
    <div
      className={
        horizontal
          ? `flex space-x-2 overflow-x-scroll hide-scroll-bar`
          : `grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-6`
      }
    >
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieCard {...movie} classes={horizontal ? 'poster-size' : ''} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
