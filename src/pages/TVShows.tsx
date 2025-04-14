import { useEffect, useState } from "react";
import { fetchTVShows } from "../api/api";
import { Movie } from "../types/types";
import MovieCard from "../components/MovieCard";
import { Spinner, Box, Flex } from "@chakra-ui/react";
const TVShows = () => {
  const [tvShows, setTVShows] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchTVShows()
      .then((data) => setTVShows(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <Spinner size="md" />
  ) : (
    <Flex wrap="wrap" gap="10px">
      {tvShows.map((tvShow) => (
        <Box
          key={tvShow.id}
          flexBasis={{ base: "100%", md: "100%", lg: "calc(50% - 50px)" }}
        >
          <MovieCard movie={tvShow} key={tvShow.title} />
        </Box>
      ))}
    </Flex>
  );
};

export default TVShows;
