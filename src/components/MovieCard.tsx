import { Box, Image, Text, VStack, HStack } from "@chakra-ui/react";
import { Movie } from "../types/types";
import { Heading } from "@chakra-ui/react";
import { LuGlobe, LuCalendar, LuStar } from "react-icons/lu";
import { Icon } from "@chakra-ui/react";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {

  return (
    <HStack border="none" borderRadius="20px" mb={6}>
      <Image
        alt={movie.title}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        objectFit="cover"
        height="300px"
        width="150px"
      />
      <VStack align="start">
        <Heading as="h1">{movie.title}</Heading>
        <HStack justify="space-between" width="50%">
          <HStack>
            <LuCalendar color="brand.50" />
            <Text fontSize="sm" color="brand.50">
             {movie.release_date}
            </Text>
          </HStack>
           <HStack>
            <LuStar color="brand.50" />
          <Text fontSize="sm" color="brand.50">
           {movie.vote_average.toFixed(1)}
            </Text>
          </HStack>
          <HStack>
            <LuGlobe color="brand.50" />
          <Text fontSize="sm" color="brand.50">
            {movie.original_language.toUpperCase()}
            </Text>
            </HStack>
        </HStack>
        <Text fontSize="sm">{movie.overview}</Text>
      </VStack>
    </HStack>
  );
};
export default MovieCard;
