import { Flex } from "@chakra-ui/react";
import Navigation from "./Navigation";
import Logo from "./Logo";

const Header = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      as="nav"
      position="sticky"
      zIndex="sticky"
      top={0}
      bg="background.main"
    >
      <Navigation />
      <Logo />
    </Flex>
  );
};
export default Header;
