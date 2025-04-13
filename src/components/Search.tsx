import { Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

export const Search = () => (
  <InputGroup p="3">
    <InputLeftElement m="2" pointerEvents="none">
      <LuSearch color="brand.100" />
    </InputLeftElement>
    <Input
      placeholder="Search..."
      size="sm"
      colorScheme="teal"
      _placeholder={{ color: "brand.100" }}
      pl="40px"
      borderRadius="15px"
    />
  </InputGroup>
);
export default Search;