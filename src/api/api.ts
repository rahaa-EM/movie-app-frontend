import { Movie, SearchType } from "../types/types";
const BASE_URL = process.env.REACT_APP_API_BASE_URL!;

/**
 * Helper Function
 */
const fetchJson = async (url: string): Promise<Movie[]> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);
  return res.json();
};

/**
 * Popular movies for home page
 */
const fetchPopularMovies = async (): Promise<Movie[]> => {
  return fetchJson(`${BASE_URL}/top-movies`);
};

/**
 *Top rated TV Shows
 */
const fetchTVShows = async (): Promise<Movie[]> => {
  return fetchJson(`${BASE_URL}/tv-shows`);
};

/**
 * Top rated Movies
 */
const fetchMovies = async (): Promise<Movie[]> => {
  return fetchJson(`${BASE_URL}/movies`);
};

/**
 * Search
 */
const searchMovies = async (
  query: string,
  type: SearchType
): Promise<Movie[]> => {
  const res = await fetch(
    `${BASE_URL}/search?q=${encodeURIComponent(query)}&type=${type}`
  );
  if (!res.ok) throw new Error("Failed to search movies");
  const data = await res.json();
  return data.results;
};

export { fetchMovies, searchMovies, fetchTVShows, fetchPopularMovies };
