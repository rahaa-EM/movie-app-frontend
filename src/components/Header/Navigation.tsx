import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { LuMenu, LuX } from "react-icons/lu";
import Profile from "./Profile";

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
        <HStack alignItems="center" display={{ base: "none", md: "flex" }}>
          <Button variant="navButton">
            <Profile />
            Hi Segun Adebayo!
          </Button>
          <Button variant="navButton">Home</Button>
          <Button variant="navButton">Movies</Button>
          <Button variant="navButton">TV Shows</Button>
          <Button variant="navButton">Search</Button>
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
            <Button variant="navButton">Home</Button>
            <Button variant="navButton">Movies</Button>
            <Button variant="navButton">TV Shows</Button>
            <Button variant="navButton">Search</Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
