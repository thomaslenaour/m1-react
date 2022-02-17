import { FC, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/esm/locale';

import Layout from '../components/Layout';
import MovieCard, { MovieCardProps } from '../components/MovieCard';
import StarRating from '../components/StarRating';

import {
  getCategories,
  getMovie,
  getSimilarMovies,
} from '../services/movie.service';

import { MovieDataResponse } from '../types';
import MovieList from '../components/MovieList';

type MovieDetailRouteParams = {
  id: string;
};

const MovieDetail: FC = () => {
  const { id } = useParams() as MovieDetailRouteParams;
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDataResponse | undefined>(undefined);
  const [similarMovies, setSimilarMovies] = useState<MovieCardProps[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const foundMovie = getMovie(parseInt(id));

    if (foundMovie) {
      const foundCategories = getCategories(foundMovie?.genre_ids || []);
      const foundSimilarMovies = getSimilarMovies(
        foundMovie.genre_ids,
        foundMovie.id,
      );

      setCategories(foundCategories);
      setSimilarMovies(foundSimilarMovies);
    }

    setMovie(foundMovie);
    setIsLoading(false);
  }, [id]);

  if (!id) return <Navigate to="/error" />;
  if (isLoading) return <div>Loading...</div>;
  if (!movie) return <Navigate to="/error" />;
  return (
    <Layout>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <MovieCard
            id={movie.id}
            title={movie.title}
            posterPath={movie.poster_path}
          />
        </div>
        <div className="col-span-3">
          <h2 className="font-bold text-2xl">{movie.title}</h2>
          <p className="text-gray-500 text-sm">Réalisé par Full Name</p>
          <p className="text-gray-800 text-xs">
            sorti le{' '}
            {format(new Date(movie.release_date), 'PPPP', { locale: fr })}
          </p>
          <p className="text-xs">{movie.duration} minutes</p>
          {categories && categories.length && (
            <ul className="text-xs flex items-center flex-wrap">
              {categories.map((category, index) => (
                <li
                  key={`category-${index}`}
                  className="bg-gray-500 px-2 py-1 text-white rounded mr-2 mt-2"
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="mt-3 text-justify">
        <p>{movie.overview}</p>
      </div>
      <div className="mt-3">
        <h2 className="font-bold text-2xl mb-2">Note du public</h2>
        <div className="flex items-center">
          <StarRating average={Math.round(movie.vote_average / 2)} />
          <p className="ml-2">{Math.round(movie.vote_average / 2)} / 5</p>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="font-bold text-2xl mb-2">Contenu similaire</h2>
        <MovieList movies={similarMovies} horizontal />
      </div>
    </Layout>
  );
};

export default MovieDetail;
