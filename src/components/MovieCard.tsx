// src/components/MovieCard.tsx
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Movie } from "../types/types";

type Props = {
  movie: Movie;
};

export const MovieCard = ({ movie }: Props) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
      <Image src={posterUrl} alt={movie.title} borderRadius="md" />
      <VStack align="start" mt={3}>
        <Text fontWeight="bold">{movie.title}</Text>
        <Text fontSize="sm" color="gray.500">
          {movie.release_date}
        </Text>
        <Text fontSize="sm">
          {movie.overview}
        </Text>
      </VStack>
    </Box>
  );
};
