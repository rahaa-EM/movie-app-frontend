import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Stack,
} from "@chakra-ui/react";
import { LuSearch, LuX, LuChevronDown } from "react-icons/lu";
import { SearchType } from "../../types/types";
type Props = {
  value: string;
  type: SearchType;
  onChange: (val: string) => void;
  onEnter: () => void;
  onTypeChange: (type: SearchType) => void;
};
const typeLabels: Record<SearchType, string> = {
  tv: "TV Shows",
  movie: "Movies",
  multi: "All",
};
const SearchBar = (props: Props) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} align="center">
      <Menu bg="background.main" borderRadius="15px" border="none">
        <MenuButton
          as={Button}
          variant="mainButton"
          rightIcon={<LuChevronDown />}
          p="20px"
          minWidth={{ base: "100%", md: "150px" }}
        >
          {typeLabels[props.type]}
        </MenuButton>
        <MenuList bg="background.main" borderRadius="15px">
          {(["tv", "movie", "multi"] as SearchType[]).map((option) => (
            <MenuItem
              key={option}
              bg="background.main"
              as={Button}
              variant="navButton"
              onClick={() => {
                props.onTypeChange(option);
              }}
            >
              {typeLabels[option]}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <InputGroup p="3">
        <InputLeftElement m="2" pointerEvents="none">
          <LuSearch color="brand.100" />
        </InputLeftElement>
        <Input
          placeholder="Type. Discover. Escape."
          size="sm"
          focusBorderColor="brand.600"
          _hover={{ borderColor: "brand.600" }}
          _placeholder={{ color: "brand.100" }}
          pl="40px"
          borderRadius="15px"
          value={props.value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            props.onChange(e.target.value)
          }
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              props.onEnter();
            }
          }}
        />
        <InputRightElement m="2" onClick={() => props.onChange("")}>
          <LuX color="brand.100" cursor="pointer" />
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};
export default SearchBar;
