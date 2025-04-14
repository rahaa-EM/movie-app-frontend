import { Movie, SearchType } from "../types/types";
/**
 * get popular movies
 */
const BASE_URL = process.env.REACT_APP_API_BASE_URL!;
const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/top-movies`);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json();
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

/**
 * TV Shows
 */
const fetchTVShows = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/tv-shows`);
  if (!res.ok) throw new Error("Failed to fetch TV shows");
  return res.json();
};

/**
 * Movies
 */
const fetchMovies = async (): Promise<Movie[]> => {
  const res = await fetch(`${BASE_URL}/movies`);
  if (!res.ok) throw new Error("Failed to fetch Movies");
  return res.json();
};

export { fetchMovies, searchMovies, fetchTVShows, fetchPopularMovies };
