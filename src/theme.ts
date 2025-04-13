import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#ffe5e7",
      100: "#fbb8bc",
      200: "#f28a8f",
      300: "#e85d61",
      400: "#df2f34",
      500: "#e50914",
      600: "#b1070f",
      700: "#7f050b",
      800: "#4c0306",
      900: "#1a0102",
    },
    background: {
      main: "#141414",
    },
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#141414",
        color: "white",
      },
    },
  },
});

export default theme;
