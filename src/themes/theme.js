import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 16,

    h1: {
      fontSize: 26,
    },
  },
  palette: {
    primary: { main: "#89B5AF", light: "#96C7C1" },
    secondary: { main: "#D0CAB2", light: "#DED9C4", dark: "#424242" },
    text: { main: "#424242" },
  },
});
