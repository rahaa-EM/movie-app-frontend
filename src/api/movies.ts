import { Movie } from "../types/types";

const BASE_URL = process.env.BASE_URL!;

export const fetchPopularMovies = async (): Promise<Movie[]> => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch popular movies");
  return res.json();
};
