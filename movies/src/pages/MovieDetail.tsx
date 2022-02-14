import { format, Locale } from 'date-fns';
import { fr } from 'date-fns/esm/locale';
import { FC, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import Layout from '../components/Layout';
import MovieCard from '../components/MovieCard';
import StarRating from '../components/StarRating';

import moviesData from '../data';
import { MovieDataResponse } from '../types';

type MovieDetailRouteParams = {
  id: string;
};

const MovieDetail: FC = () => {
  const { id } = useParams() as MovieDetailRouteParams;
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDataResponse | undefined>(undefined);

  if (!id) return <Navigate to="/error" />;

  console.log('movie', movie);

  useEffect(() => {
    const foundMovie: MovieDataResponse | undefined = moviesData.movies.find(
      (movie) => movie.id === parseInt(id),
    );

    setMovie(foundMovie);
    setIsLoading(false);
  }, []);

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
          <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
            <Button
              label="Action"
              classes="w-full text-sm bg-gray-800 text-white py-2 px-3 rounded"
            />
            <Button
              label="Historique"
              classes="w-full text-sm bg-yellow-600 text-white py-2 px-3 rounded"
            />
          </div>
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
      </div>
    </Layout>
  );
};

export default MovieDetail;
