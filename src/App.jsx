import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import ContainerMain from "./components/ContainerMain";
// import "./styles/main.scss";

const theme = createTheme({
  typography: {
    fontFamily: '"Comfortaa", sans-serif',
    fontWeight: "300",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ContainerMain />
    </ThemeProvider>
  );
};

export default App;
