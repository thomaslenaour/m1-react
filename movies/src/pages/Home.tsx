import { FC, useState } from 'react';

import Layout from '../components/Layout';
import MovieList from '../components/MovieList';
import { MovieCardProps } from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

import moviesData from '../data';

const Home: FC = () => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState<MovieCardProps[]>(
    moviesData.movies.map((movie) => ({
      id: movie.id,
      posterPath: movie.poster_path,
      title: movie.title,
    })),
  );

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase()),
  );

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
        <SearchBar
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div>
        <h2 className="text-xl font-bold mb-1">Discover our movies...</h2>
        <MovieList movies={filteredMovies} />
      </div>
    </Layout>
  );
};

export default Home;
