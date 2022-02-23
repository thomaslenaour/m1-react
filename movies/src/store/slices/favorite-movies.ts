import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface FavoriteMoviesState {
  id: number;
  posterPath: string;
  title: string;
}

const initialState: FavoriteMoviesState[] = [];

export const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<FavoriteMoviesState>) =>
      state.some(({ id }) => id === action.payload.id)
        ? state.filter(({ id }) => id !== action.payload.id)
        : [...state, action.payload],
  },
});

export const { toggle } = favoriteMoviesSlice.actions;

export const selectFavorites = (state: RootState) => state.favoriteMovies;

export default favoriteMoviesSlice.reducer;
