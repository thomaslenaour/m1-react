import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import {
  FavoritesPage,
  HomePage,
  MovieDetailPage,
  NotFoundPage,
} from '../pages';

export enum AppRoutes {
  HOME = '/',
  MOVIE_DETAIL = '/movie/:id',
  FAVORITES = '/favorites',
  NOT_FOUND = '/error',
  ERROR = '*',
}

const Routes: FC = () => {
  return useRoutes([
    { path: AppRoutes.HOME, element: <HomePage /> },
    { path: AppRoutes.MOVIE_DETAIL, element: <MovieDetailPage /> },
    { path: AppRoutes.FAVORITES, element: <FavoritesPage /> },
    { path: AppRoutes.NOT_FOUND, element: <NotFoundPage /> },
    { path: AppRoutes.ERROR, element: <NotFoundPage /> },
  ]);
};

export default Routes;
