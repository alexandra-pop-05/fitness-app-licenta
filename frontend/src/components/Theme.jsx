import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f6bd60",
    },
    secondary: {
      main: "#f7ede2",
    },
    tertiary: {
      main: "#f5cac3",
    },
    quaternary: {
      main: "#84a59d",
    },
    quinary: {
      main: "#f28482",
    },
    background: {
      paper: "#111111",
      default: "#181818",
    },
  },
  /* typography: {
    fontFamily: "'Montserrat', sans-serif",
    body1: {
      fontFamily: "'Merriweather', serif",
    },
  }, */
  breakpoints: {
    values: {
      lg: 1024,
      md: 936,
      sm: 768,
      xs: 500,
    },
  },
});
