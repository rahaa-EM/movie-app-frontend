import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
} from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import Profile from "./Profile";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="main" shadow="md">
      <Flex alignItems="center" justifyContent="space-between">
        {/* Mobile Hamburger */}
        <IconButton
          p="3"
          size="md"
          icon={isOpen ? <LuX /> : <LuMenu />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          variant="navButton"
        />

        {/* Desktop Nav */}
        <HStack display={{ base: "none", md: "flex" }}>
          <Button as={RouterLink} to="/account" variant="navButton">
            <Profile />
            Hi Segun Adebayo!
          </Button>
          <Button as={RouterLink} to="/" variant="navButton">
            Home
          </Button>
          <Button as={RouterLink} to="/movies" variant="navButton">
            Movies
          </Button>
          <Button as={RouterLink} to="/tv-shows" variant="navButton">
            TV Shows
          </Button>
          <Button as={RouterLink} to="/search" variant="navButton">
            Search
          </Button>
        </HStack>
      </Flex>

      {/* Mobile Nav */}
      {isOpen && (
        <Box display={{ md: "none" }}>
          <Stack as="nav">
            <Button variant="navButton">
              <Profile />
              Segun Adebayo
            </Button>
            <Button variant="navButton" as={RouterLink} to="/">
              Home
            </Button>
            <Button variant="navButton" as={RouterLink} to="/movies">
              Movies
            </Button>
            <Button variant="navButton" as={RouterLink} to="/tv-shows">
              TV Shows
            </Button>
            <Button variant="navButton" as={RouterLink} to="/search">
              Search
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
