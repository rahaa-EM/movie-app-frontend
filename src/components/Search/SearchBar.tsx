import { Input, InputGroup, InputLeftElement, InputRightElement, Menu, MenuButton, MenuList, MenuItem, Button, Flex} from "@chakra-ui/react";
import { LuSearch, LuX, LuChevronDown } from "react-icons/lu";
type Props = {
  value: string;
  onChange: (val: string) => void;
  onEnter: () => void;
};
const SearchBar = (props: Props) => {
  return (
    <Flex>
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
    {/* <Menu bg="background.main" borderRadius="15px" border="none">
        <MenuButton as={Button} variant="mainButton" rightIcon={<LuChevronDown />}>
          Search in
        </MenuButton>
        <MenuList bg="background.main" borderRadius="15px">
          <MenuItem as={Button} variant="navButton">TV Shows</MenuItem>
          <MenuItem>Movies</MenuItem>
          <MenuItem>All</MenuItem>
        </MenuList>
      </Menu> */}
    </Flex>
  );
};
export default SearchBar;