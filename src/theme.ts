import { extendTheme } from "@chakra-ui/react";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/700.css";

// Theme Discription:
// Custom color palette for UI theming with descriptive names for easier reference and consistency across the design.
// 50: "#ffe5e7",   Misty Rose
// 100: "#5D737E",  Slate Gray
// 200: "#f28a8f",  Light Coral
// 300: "#e85d61",  Bittersweet
// 400: "#df2f34",  Fire Engine Red
// 500: "#e50914",  Netflix Red
// 600: "#b1070f",  Crimson
// 700: "#7f050b",  Dark Red
// 800: "#4c0306",  Blood Red
// 900: "#1a0102",  Rich Black

// Fonts used in the theme are Raleway, a sans-serif font that is modern and playful, making it suitable for a streaming platform.

// We have 2 different type of button:
// 1. mainButton: used for the main call to action. It has a bright red background and white text, making it stand out against the dark background of the app.
// 2. navButton: used for navigation and drop downs. It has a dark background and white text, making it blend in with the rest of the app while still being visible.

const theme = extendTheme({
  colors: {
    brand: {
      50: "#ffe5e7",
      100: "#5D737E",
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
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "bold",
        color: "brand.600",
      },
      sizes: {
        h1: {
          fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
        },
      },
      defaultProps: {
        size: "h1",
      },
    },
    Button: {
      variants: {
        mainButton: {
          bg: "brand.500",
          color: "brand.50",
          _hover: {
            bg: "brand.600",
          },
        },
        navButton: {
          alignItems: "center",
          justifyContent: "center",
          bg: "background.main",
          color: "brand.50",
          _hover: {
            bg: "brand.600",
          },
        },
      },
    },
  },
});

export default theme;
