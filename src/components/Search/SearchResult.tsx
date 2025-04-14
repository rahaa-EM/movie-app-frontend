import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Movie } from "../../types/types";

type Props = {
  movie: Movie;
};
const SearchResult = (props: Props) => {
  return (
    <Box
      position="relative"
      width="100%"
      height="300px"
      overflow="hidden"
      borderRadius="20px"
      mb="40px"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path}`}
        alt={props.movie.title}
        objectFit="cover"
        width="100%"
        height="100%"
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(to-t, background.main, transparent)"
        display="flex"
        alignItems="flex-end"
        px={4}
        pb={4}
      >
        <VStack align="start">
          <Text fontWeight="bold" color="brand.600">
            {props.movie.title}
          </Text>
          <Text fontSize="sm">{props.movie.overview}</Text>
        </VStack>
      </Box>
    </Box>
  );
};
export default SearchResult;
