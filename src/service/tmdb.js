import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'e36a47b8d49e28b47421e6f9d521bb3d',
  },
});

export const movieApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  upcoming: () => api.get('movie/upcoming'),
  popular: () => api.get('movie/popular'),
  detail: (movieId) =>
    api.get(`movie/${movieId}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  airingToday: () => api.get('tv/airing_today'),
  topRated: () => api.get('tv/top_rated'),
  popular: () => api.get('tv/popular'),
  detail: (tvId) =>
    api.get(`tv/${tvId}`, {
      params: {
        append_to_response: 'videos',
      },
    }),
  search: (term) =>
    api.get('search/tv', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
