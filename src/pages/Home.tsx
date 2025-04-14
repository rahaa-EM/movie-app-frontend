import { useEffect, useState } from "react";
import {
  Box,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { Movie } from "../types/types";
import { fetchPopularMovies } from "../api/api";
import { MovieCarousel3D } from "../components/MovieCarousel3D";
import OpeningTitle from "../components/OpeningTitle";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies()
      .then((data) => setMovies(data.slice(0, 5)))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Spinner size="xl" />
  ) : (
    <>
      <Stack
        h="80vh"
        spacing={4}
        direction={{ base: "column", md: "row" }}
        p="10"
      >
        <OpeningTitle />
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          m={["50px", "100px", "150px", "200px"]}
        >
          <MovieCarousel3D movies={movies} />
        </Box>
      </Stack>
    </>
  );
};
export default Home;
