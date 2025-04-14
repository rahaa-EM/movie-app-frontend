import { useEffect, useState } from "react";
import { fetchMovies } from "../api/api";
import { Movie } from "../types/types";
import MovieCard from "../components/MovieCard";
import { Spinner } from "@chakra-ui/react";
const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      fetchMovies()
        .then((data) => setMovies(data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }, []);
  return (loading ? (
      <Spinner size="xl" />
    ) : (
      <>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.title} />
        ))}
    </>)
  );
};

export default Movies;
