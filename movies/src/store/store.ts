import { combineReducers, createStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import favoriteMoviesSlice from './slices/favorite-movies';

// export const store = configureStore({
//   reducer: {
//     favoriteMovies: favoriteMoviesSlice,
//   },
// });

export const store = createStore(
  persistReducer(
    { key: 'root', storage },
    combineReducers({ favoriteMovies: favoriteMoviesSlice }),
  ),
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
