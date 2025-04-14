import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return <Box px={{ base: "20px", md: "30px", lg: "40px" }}>{children}</Box>;
};

export default Layout;
