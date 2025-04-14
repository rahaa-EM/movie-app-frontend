import { Heading, Text, Spinner} from "@chakra-ui/react";
import SearchBar from "../components/Search/SearchBar";
import { useState } from "react";
import { Movie } from "../types/types";
import { searchMovies } from "../api/api";
import SearchResult from "../components/Search/SearchResult";
const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const handleSearch = async () => {
    setLoading(true);
    try {
      const data = await searchMovies(query);
      setResults(data);
      setHasSearched(true);
      setLoading(false);
    } catch (err) {
      console.error("Search failed", err);
    }
  };
    return (loading ? (
        <Spinner size="xl" />
    ) : (
        <>
            <Heading as="h1">Stories live behind the titles.</Heading>
            <SearchBar value={query} onChange={setQuery} onEnter={handleSearch} />
            {hasSearched ? (
                results.length > 0 ? (
                    results.map((result) => <SearchResult key={result.id} movie={result} />)
                ) : (
                    <Text color="brand.50">No results found</Text>
                )
            ) : null}
        </>
    ));
};

export default Search;
