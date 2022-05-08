import { theme, extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  ...theme,
  initialColorMode: "dark",
  useSystemColorMode: true,
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: "md",
        color: props.colorMode === "dark" ? "white" : "gray.400",
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.800",
      },
    }),
  },
  colors: {
    brand: {},
  },
});

export default customTheme;
