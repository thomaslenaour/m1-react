import { FC } from 'react';

interface MovieRatingProps {
  average: number;
}

const StarRating: FC<MovieRatingProps> = ({ average }) => {
  return (
    <ul className="inline-flex items-center space-x-2 text-3xl text-yellow-500">
      {[...Array(average)].map((_, i) => (
        <li key={`full-star-${i}`}>&#9733;</li>
      ))}
      {[...Array(5 - average)].map((_, i) => (
        <li key={`outline-star-${i}`}>&#9734;</li>
      ))}
    </ul>
  );
};

export default StarRating;
