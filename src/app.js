import React from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/home.component.jsx";
import Collection from "./pages/collection.component.jsx";
import Ambassador from "./pages/ambassador.component.jsx";
import About from "./pages/about.component.jsx";
import Goodie from "./pages/goodie.component.jsx";
import Checkout from "./pages/checkout.component.jsx";
import ComingSoon from "./pages/comingSoon.component.jsx";

//Components
// import Nav from "./components/nav.component.jsx";
// import Customize from "./components/customize.component";
// import Newsletter from "./components/newsletter.component";
// import Footer from "./components/footer.component";

import "./app.styles.scss";

const App = () => {
  return (
    <Box>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/collection/:id" element={<Collection />} />
        <Route path="/our-ambassadors" element={<Ambassador />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/goodie/:id" element={<Goodie />} />
        <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
      {/* <Customize />
      <Newsletter />
      <Footer /> */}
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
