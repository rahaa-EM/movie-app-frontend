import { useEffect, useState } from "react";
import { fetchTVShows } from "../api/api";
import { Movie } from "../types/types";
import MovieCard from "../components/MovieCard";
import { Spinner } from "@chakra-ui/react";
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
    <Spinner size="xl" />
  ) : (
    <>
      {tvShows.map((tvShow) => (
        <MovieCard movie={tvShow} key={tvShow.title} />
      ))}
    </>
  );
};

export default TVShows;
