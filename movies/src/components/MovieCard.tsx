import { FC } from 'react';

export interface MovieCardProps {
  id: number;
  posterPath: string;
  title: string;
}

const MovieCard: FC<MovieCardProps> = ({ posterPath, title }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      alt={`Cover ${title}`}
    />
  );
};

export default MovieCard;
