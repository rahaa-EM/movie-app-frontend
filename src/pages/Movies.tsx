import { useEffect, useState } from "react";
import { fetchMovies } from "../api/api";
import { Movie } from "../types/types";
import MovieCard from "../components/MovieCard";
import { Spinner, Flex, Box } from "@chakra-ui/react";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchMovies()
      .then((data) => setMovies(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <Spinner size="md" />
  ) : (
    <Flex wrap="wrap" gap="10px">
      {movies.map((movie) => (
        <Box
          key={movie.id}
          flexBasis={{ base: "100%", md: "100%", lg: "calc(50% - 50px)" }}
        >
          <MovieCard movie={movie} key={movie.id} />
        </Box>
      ))}
    </Flex>
  );
};

export default Movies;
