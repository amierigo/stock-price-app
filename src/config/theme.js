import { createTheme } from "@mui/material/styles";
import { COLORS } from "./color";

export const appTheme = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: "Poppins",
    h1: {
      font: "normal normal 26px/40px Poppins",
    },
    h2: {
      font: "normal normal 24px/36px Poppins",
    },
    h3: {
      font: "normal normal 18px/30px Poppins",
    },
    h4: {
      font: "normal normal 16px/24px Poppins",
    },
    h5: {
      font: "normal normal 14px/20px Poppins",
    },
    h6: {
      font: "normal normal 13px/19px Poppins",
    },
    p: {
      font: "normal normal 12px/18px Poppins",
    },
    caption: {
      font: "normal normal 10px/18px Poppins",
    },
  },
  palette: {
    type: "dark",
    primary: {
      light: COLORS.primary[50],
      main: COLORS.primary[100],
      dark: COLORS.primary[200],
    },
    secondary: {
      light: COLORS.secondary[50],
      main: COLORS.secondary[100],
      dark: COLORS.secondary[200],
    },
    background: {
      default: COLORS.background,
    },
    text: {
      primary: COLORS.white,
      secondary: COLORS.black,
    },
    error: {
      main: COLORS.error[50],
    },
    boxShadow: {
      light: COLORS.boxShadow[50],
      primary: COLORS.boxShadow[100],
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLORS.white,
        },
      },
    },
  },
});
