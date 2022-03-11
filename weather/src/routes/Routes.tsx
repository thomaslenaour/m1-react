import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { HomePage, WeatherPage } from '../pages';

export enum AppRoutes {
  HOME = '/',
  WEATHER = '/weather',
}

const Routes: FC = () => {
  return useRoutes([
    { path: AppRoutes.HOME, element: <HomePage /> },
    { path: AppRoutes.WEATHER, element: <WeatherPage /> },
  ]);
};

export default Routes;
