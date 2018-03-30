const BASE_URL = 'http://api.tvmaze.com';

export const searchShows = searchTerm => {
  const url = `/search/shows?q=${searchTerm}`;
  return fetch(BASE_URL + url).then(res => res.json());
};
