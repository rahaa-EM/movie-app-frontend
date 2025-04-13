// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { Movie } from "../types/types";
import { fetchPopularMovies } from "../api/movies";
import { MovieCard } from "../components/MovieCard";

export const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies()
      .then(setMovies)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Spinner size="xl" mt={10} />;

  return (
    <Box p={6}>
      <Heading mb={6}>Popular Movies</Heading>
      {movies.length === 0 ? (
        <Text>No movies found.</Text>
      ) : (
        <SimpleGrid columns={[1, 2, 3, 4]}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};
