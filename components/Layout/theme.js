import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "gray.50",
        height: "100vh",
      },
    },
  },
});

export default theme;
