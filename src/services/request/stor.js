const { combineReducers, configureStore } = require('@reduxjs/toolkit');
const { MovieApi } = require('./apiMovies');

const reducers = combineReducers({
  [MovieApi.reducerPath]: MovieApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
    }).concat(MovieApi.middleware),
  devTools: true,
});
