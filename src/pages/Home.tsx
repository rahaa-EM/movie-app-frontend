import { useEffect, useState } from "react";
import { Box, Spinner, Stack, Flex } from "@chakra-ui/react";
import { Movie } from "../types/types";
import { fetchPopularMovies } from "../api/api";
import { MovieCarousel3D } from "../components/MovieCarousel3D";
import OpeningTitle from "../components/OpeningTitle";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [carouselMovies, setCarouselMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchPopularMovies()
      .then((data) => {
        setCarouselMovies(data.slice(0, 5));
        setMovies(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Spinner size="md" />
  ) : (
    <>
      <Stack
        h="80vh"
        spacing={4}
        direction={{ base: "column", md: "row" }}
        p="10"
        mb="50px"
      >
        <OpeningTitle />
        <Box
          flex="1"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          m={["50px", "100px", "150px", "200px"]}
        >
          {/* The 3D Movie Carousle is from Keen Slider for more info visit (https://keen-slider.io/examples) */}
          <MovieCarousel3D movies={carouselMovies} />
        </Box>
      </Stack>
      <Flex wrap="wrap" gap="10px">
        {movies.map((movie) => (
          <Box
            key={movie.id}
            flexBasis={{ base: "100%", md: "100%", lg: "calc(50% - 50px)" }}
          >
            <MovieCard movie={movie} key={movie.title} />
          </Box>
        ))}
      </Flex>
    </>
  );
};
export default Home;
