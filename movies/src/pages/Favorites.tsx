import { FC } from 'react';
import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import { useAppSelector } from '../hooks';

export const Favorites: FC = () => {
  const favoriteMovies = useAppSelector((state) => state.favoriteMovies);

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-1">Liste des favoris</h2>
      {favoriteMovies.length > 0 ? (
        <MovieList movies={favoriteMovies} />
      ) : (
        <p>Aucun favori</p>
      )}
    </Layout>
  );
};

export default Favorites;
