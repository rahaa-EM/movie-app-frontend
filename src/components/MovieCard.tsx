import { Image, Text, HStack, Heading, Button, Flex } from "@chakra-ui/react";
import { Movie } from "../types/types";
import { LuGlobe, LuCalendar, LuStar } from "react-icons/lu";
import { useState } from "react";

type Props = {
  movie: Movie;
};

const MovieCard = (props: Props) => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleReadMore = () => setShowFullText(!showFullText);
  // The overview is a long text and we want to show only the first 100 characters
  const maxCharactar = 100;
  const isLongText = props.movie.overview.length > maxCharactar;
  const displayedText =
    showFullText || !isLongText
      ? props.movie.overview
      : props.movie.overview.substring(0, maxCharactar) + "...";
  
  // The Movies come with the release_date and title while TV shows come with the first_air_date and name
  const title = props.movie.title ? props.movie.title : props.movie.name;
  const releaseDate = props.movie.release_date
    ? props.movie.release_date
    : props.movie.first_air_date;

  return (
    <HStack mb="30px">
      <Image
        alt={props.movie.title}
        src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`}
        objectFit="cover"
        height="320px"
        width="160px"
        borderRadius="20px"
      />
      <Flex direction="column" justify="space-between" align="left" h="300px">
        {showFullText ? (
          <Text fontSize="lg" color="brand.600">
            {title}
          </Text>
        ) : (
          <Heading as="h1">{title}</Heading>
        )}
        <HStack justify="space-between">
          <HStack>
            <LuCalendar color="brand.50" />
            <Text fontSize="sm" color="brand.50">
              {releaseDate}
            </Text>
          </HStack>
          <HStack>
            <LuStar color="brand.50" />
            <Text fontSize="sm" color="brand.50">
              {props.movie.vote_average.toFixed(1)}
            </Text>
          </HStack>
          <HStack>
            <LuGlobe color="brand.50" />
            <Text fontSize="sm" color="brand.50">
              {props.movie.original_language.toUpperCase()}
            </Text>
          </HStack>
        </HStack>
        <Text fontSize="sm">{displayedText}</Text>
        {isLongText && (
          <Button
            size="sm"
            w="100px"
            onClick={toggleReadMore}
            variant="mainButton"
          >
            {showFullText ? "Read less" : "Read more"}
          </Button>
        )}
      </Flex>
    </HStack>
  );
};
export default MovieCard;
