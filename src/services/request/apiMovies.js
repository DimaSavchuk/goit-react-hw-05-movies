import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY, LANG } from 'services/constants';

export const MovieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getTrendingMovie: builder.query({
      query: () => `/trending/all/day?language=${LANG}&api_key=${API_KEY}`,
    }),

    getSearch: builder.query({
      query: ({ query }) =>
        `/search/movie?query=${query}&api_key=${API_KEY}&language=${LANG}`,
    }),

    getMovieDetails: builder.query({
      query: ({ movieId }) =>
        `/movie/${movieId}?language=${LANG}&api_key=${API_KEY}`,
    }),
    getMovieCast: builder.query({
      query: ({ movieId }) =>
        `/movie/${movieId}/credits?language=${LANG}&api_key=${API_KEY}`,
    }),
    getMovieReviews: builder.query({
      query: ({ movieId }) =>
        `/movie/${movieId}/reviews?language=${LANG}&api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetTrendingMovieQuery,
  useGetSearchQuery,
  useGetMovieDetailsQuery,
  useGetMovieCastQuery,
  useGetMovieReviewsQuery,
} = MovieApi;
