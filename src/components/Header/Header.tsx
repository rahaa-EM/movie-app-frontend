import { Flex } from "@chakra-ui/react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Logo from "./Logo";

const Header = () => {
  return (
    <Flex
      w="100%"
      p={["10px", "20px", "25px"]}
      justify="space-between"
      align="center"
      as="nav"
      position="sticky"
      zIndex="sticky"
      top={0}
    >
      <Navigation />
      <Logo />
    </Flex>
  );
};
export default Header;
