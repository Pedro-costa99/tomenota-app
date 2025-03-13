import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ResgatesApp from "./components/RedemptionApp";
// import "./styles/main.scss";

const theme = createTheme({
  typography: {
    fontFamily: '"Open Sans", sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ResgatesApp />
    </ThemeProvider>
  );
};

export default App;
