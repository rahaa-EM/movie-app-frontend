import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import Profile from "./Profile";
import { Link as RouterLink, useLocation } from "react-router-dom";

export function useClickAnyWhere (event: (event: MouseEvent) => void, ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        event(e);
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    }
  }, [event, ref]
  )
}
export function useClickOutSide(event: (event: MouseEvent) => void, ref: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
         event(e);
       }
    };
    document.addEventListener('click', handleClick)
    return () => document.addEventListener("click", handleClick)
  },[event, ref])
}

   const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const currentPath = useLocation().pathname;
  const isActive = (path: string) => path === currentPath;
  const navRef = useRef<HTMLDivElement>(null);

    useClickAnyWhere(() => {
      if (isOpen) onClose();
    }, navRef);
  return (
    <Box bg="main" shadow="md" ref={navRef}>
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
          <Button
            as={RouterLink}
            to="/account"
            _after={
              isActive("/account")
                ? {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: 0,
                    width: "100%",
                    height: "4px",
                    bg: "brand.600",
                    borderRadius: 0,
                  }
                : {}
            }
            variant="navButton"
          >
            <Profile />
            Hi Segun Adebayo!
          </Button>
          <Button
            as={RouterLink}
            to="/"
            _after={
              isActive("/")
                ? {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: 0,
                    width: "100%",
                    height: "4px",
                    bg: "brand.600",
                    borderRadius: 0,
                  }
                : {}
            }
            variant="navButton"
          >
            Home
          </Button>
          <Button
            as={RouterLink}
            to="/movies"
            _after={
              isActive("/movies")
                ? {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: 0,
                    width: "100%",
                    height: "4px",
                    bg: "brand.600",
                    borderRadius: 0,
                  }
                : {}
            }
            variant="navButton"
          >
            Top Movies
          </Button>
          <Button
            as={RouterLink}
            to="/tv-shows"
            _after={
              isActive("/tv-shows")
                ? {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: 0,
                    width: "100%",
                    height: "4px",
                    bg: "brand.600",
                    borderRadius: 0,
                  }
                : {}
            }
            variant="navButton"
          >
            Top TV Shows
          </Button>
          <Button
            as={RouterLink}
            to="/search"
            _after={
              isActive("/search")
                ? {
                    content: '""',
                    position: "absolute",
                    bottom: "0",
                    left: 0,
                    width: "100%",
                    height: "4px",
                    bg: "brand.600",
                    borderRadius: 0,
                  }
                : {}
            }
            variant="navButton"
          >
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
              Top Movies
            </Button>
            <Button variant="navButton" as={RouterLink} to="/tv-shows">
              Top TV Shows
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
