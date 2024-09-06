import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { appTheme } from "./config/theme";
import StockPrice from "./containers/StockPrice";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline
            to build upon. */}
      <StockPrice />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
