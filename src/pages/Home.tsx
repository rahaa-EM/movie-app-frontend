import { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Movie } from "../types/types";
import { fetchPopularMovies } from "../api/movies";
import { MovieCarousel3D } from "../components/MovieCarousel3D";

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies()
      .then((data) => setMovies(data.slice(0, 5)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box p={6}>
      <Heading mb={6}>Popular Movies</Heading>
      {loading ? <Spinner size="xl" /> : <MovieCarousel3D movies={movies} />}
    </Box>
  );
};
