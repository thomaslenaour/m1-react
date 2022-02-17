import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import { MovieCardProps } from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

import { getMovies } from '../services/movie.service';

const Home: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const [searchText, setSearchText] = useState(searchParams.get('q') || '');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.target.value;

    setSearchText(value);
    setSearchParams(value ? { q: value } : {});
  };

  const fetchMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      setMovies(await getMovies(searchText));
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, [searchText]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <Layout>
      <div className="mb-3">
        <h2 className="text-2xl font-bold mb-1">Welcome on Movies App!</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ad
          repellat hic, cumque dolorum necessitatibus reprehenderit repudiandae
          animi praesentium. Quidem.
        </p>
      </div>
      <div className="mb-3">
        <h2 className="text-2xl font-bold mb-1">Search a movie</h2>
        <SearchBar value={searchText} onChange={handleSearch} />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-1">Discover our movies...</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <MovieList movies={filteredMovies} />
        )}
      </div>
    </Layout>
  );
};

export default Home;
