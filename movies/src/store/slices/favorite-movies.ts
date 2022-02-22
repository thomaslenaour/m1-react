import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

const initialState: number[] = [];

export const favoriteMoviesSlice = createSlice({
  name: 'favoriteMovies',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<number>) =>
      state.includes(action.payload)
        ? state.filter((id) => id !== action.payload)
        : [...state, action.payload],
  },
});

export const { toggle } = favoriteMoviesSlice.actions;

export const selectFavorites = (state: RootState) => state.favoriteMovies;

export default favoriteMoviesSlice.reducer;
