import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { HomePage, FavoritesPage } from '../pages';

export enum AppRoutes {
  HOME = '/',
  FAVORITES = '/favorites',
}

const Routes: FC = () => {
  return useRoutes([
    { path: AppRoutes.HOME, element: <HomePage /> },
    { path: AppRoutes.FAVORITES, element: <FavoritesPage /> },
  ]);
};

export default Routes;
