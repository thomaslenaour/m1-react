import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { HomePage, MovieDetailPage, NotFoundPage } from '../pages';

export enum AppRoutes {
  HOME = '/',
  MOVIE_DETAIL = '/movie/:id',
  NOT_FOUND = '*',
}

const Routes: FC = () => {
  return useRoutes([
    { path: AppRoutes.HOME, element: <HomePage /> },
    { path: AppRoutes.MOVIE_DETAIL, element: <MovieDetailPage /> },
    { path: AppRoutes.NOT_FOUND, element: <NotFoundPage /> },
  ]);
};

export default Routes;
