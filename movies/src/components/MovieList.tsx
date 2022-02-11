import { FC } from 'react';
import { Link } from 'react-router-dom';

import MovieCard, { MovieCardProps } from './MovieCard';

interface MovieListProps {
  movies: MovieCardProps[];
}

const MovieList: FC<MovieListProps> = ({ movies }) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-6">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
