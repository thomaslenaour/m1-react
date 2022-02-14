import { FC } from 'react';

export interface MovieCardProps {
  id: number;
  posterPath: string;
  title: string;
  classes?: string;
}

const MovieCard: FC<MovieCardProps> = ({ posterPath, title, classes }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      alt={`Cover ${title}`}
      className={classes}
    />
  );
};

export default MovieCard;
