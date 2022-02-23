import React from "react";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/home.component.jsx";
import ComingSoon from "./pages/comingSoon.component.jsx";
//Components
import Nav from "./components/nav.component.jsx";

import "./app.styles.scss";

const App = () => {
  return (
    <Box>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </Box>
  );
};

const theme = createTheme({
  spacing: 10,
  palette: {
    common: {
      black: "#220F00",
    },
    primary: {
      main: "#220F00",
    },
  },
});

const AppConfig = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

export default AppConfig;
