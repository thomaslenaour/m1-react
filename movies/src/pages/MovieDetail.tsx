import { FC, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';

import moviesData from '../data';

type MovieDetailRouteParams = {
  id: string;
};

const MovieDetail: FC = () => {
  const { id } = useParams() as MovieDetailRouteParams;
  const [movie, setMovie] = useState(
    moviesData.movies.find((movie) => movie.id === parseInt(id)),
  );

  console.log('movie', movie);

  useEffect(() => {
    console.log('mounted');
  }, []);

  return (
    <Layout>
      <h2>MovieDetail Page</h2>
    </Layout>
  );
};

export default MovieDetail;
