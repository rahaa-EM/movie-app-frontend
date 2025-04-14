export type Movie = {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
};
export type SearchType = "movie" | "tv" | "multi";
