import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1;
// 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3'}),
    endpoints: (builder) => ({
        // GET movies by [Type]
        getMovies: builder.query({
            query: () => `/discover/movie?page=${page}&api_key=${tmdbApiKey}`
        })
    })
});

export const {
    useGetMoviesQuery,
} = tmdbApi;