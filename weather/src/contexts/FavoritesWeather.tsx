import { createContext } from 'react';

export interface FavoritesWeatherContext {
  cities: string[];
  toggleCity: () => void;
}

export const FavoritesWeatherContext = createContext<FavoritesWeatherContext>(
  {} as FavoritesWeatherContext,
);
