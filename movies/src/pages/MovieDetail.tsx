import { FC, useCallback, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { fr } from 'date-fns/esm/locale';

import Layout from '../components/Layout';
import MovieCard from '../components/MovieCard';
import StarRating from '../components/StarRating';
import MovieList from '../components/MovieList';

import { getMovie, getSimilarMovies } from '../services/movie.service';

import { MovieDataResponse, MoviesDataResponse } from '../types';
import { AppRoutes } from '../routes/Routes';

type MovieDetailRouteParams = {
  id: string;
};

const MovieDetail: FC = () => {
  const { id } = useParams() as MovieDetailRouteParams;
  const [isMovieLoading, setIsMovieLoading] = useState(true);
  const [movie, setMovie] = useState<MovieDataResponse | undefined>(undefined);
  const [isSimilarMoviesLoading, setIsSimilarMoviesLoading] = useState(true);
  const [similarMovies, setSimilarMovies] = useState<MoviesDataResponse[]>([]);

  const fetchMovie = useCallback(async () => {
    try {
      setIsMovieLoading(true);
      setMovie(await getMovie(parseInt(id)));
    } catch (err) {
      console.log('err', err);
    } finally {
      setIsMovieLoading(false);
    }
  }, [id]);

  const fetchSimilarMovies = useCallback(async () => {
    try {
      setIsSimilarMoviesLoading(true);
      setSimilarMovies(await getSimilarMovies(parseInt(id)));
    } catch (err) {
      console.log('err', err);
    } finally {
      setIsSimilarMoviesLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchMovie();
    fetchSimilarMovies();
  }, [fetchMovie, fetchSimilarMovies]);

  if (!id) return <Navigate to={AppRoutes.NOT_FOUND} />;
  if (isMovieLoading) return <div>Loading...</div>;
  if (!movie) return <Navigate to={AppRoutes.NOT_FOUND} />;
  return (
    <Layout>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-2">
          <MovieCard
            id={movie.id}
            title={movie.title}
            posterPath={movie.posterPath}
          />
        </div>
        <div className="col-span-3">
          <h2 className="font-bold text-2xl">{movie.title}</h2>
          <p className="text-gray-500 text-sm">Réalisé par Full Name</p>
          <p className="text-gray-800 text-xs">
            sorti le{' '}
            {format(new Date(movie.releaseDate), 'PPPP', { locale: fr })}
          </p>
          <p className="text-xs">{movie.runtime} minutes</p>
          {movie.genres && movie.genres.length && (
            <ul className="text-xs flex items-center flex-wrap">
              {movie.genres.map((category) => (
                <li
                  key={`category-${category.id}`}
                  className="bg-gray-500 px-2 py-1 text-white rounded mr-2 mt-2"
                >
                  {category.name}
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
          <StarRating average={Math.round(movie.voteAverage / 2)} />
          <p className="ml-2">{Math.round(movie.voteAverage / 2)} / 5</p>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="font-bold text-2xl mb-2">Contenu similaire</h2>
        {isSimilarMoviesLoading ? (
          <div>Loading...</div>
        ) : (
          <MovieList movies={similarMovies} horizontal />
        )}
      </div>
    </Layout>
  );
};

export default MovieDetail;
