import { createTheme } from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#4CAF50",
    background: "#F5F5DC",
    text: "#333333",
    card: "#FFFFFF",
    border: "#E0E0E0",
    muted: "#E0E0E0",
    white: "#FFFFFF",
    black: "#000000",
  },
  spacing: {
    none: 0,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 8,
    l: 16,
    xl: 24,
  },
  textVariants: {
    header: {
      fontSize: 24,
      fontWeight: "bold",
      color: "text",
    },
    subheader: {
      fontSize: 18,
      fontWeight: "600",
      color: "text",
    },
    body: {
      fontSize: 14,
      color: "text",
    },
    button: {
      fontSize: 16,
      fontWeight: "500",
    },
  },
  breakpoints: {},
});

export type Theme = typeof theme;
export default theme;
