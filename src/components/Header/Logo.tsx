import { Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Logo = () => (
  <Image
    src={logo}
    alt="Logo"
    objectFit="contain"
  />
);

export default Logo;
