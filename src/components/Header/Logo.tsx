import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Logo = () => (
  <Image
    src={logo}
    alt="Logo"
    width={{ base: "100px", md: "150px" }}
    objectFit="contain"
    mt={{ base: "10px", md: "20px" }}
  />
);

export default Logo;
