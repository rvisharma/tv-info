const BASE_URL = 'https://api.tvmaze.com';

export const searchShows = searchTerm => {
  const url = `/search/shows?q=${searchTerm}`;
  return fetch(BASE_URL + url).then(res => res.json());
};

export const getSeasonsByShowId = showId => {
  const url = `/shows/${showId}/seasons`;
  return fetch(BASE_URL + url).then(res => res.json());
};

export const getEpisodeForSeason = seasonId => {
  const url = `/seasons/${seasonId}/episodes`;
  return fetch(BASE_URL + url).then(res => res.json());
};
