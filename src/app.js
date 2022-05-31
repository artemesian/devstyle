import React, { useState } from "react";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/home.component.jsx";
import Collection from "./pages/collection.component.jsx";
import Ambassador from "./pages/ambassador.component.jsx";
import About from "./pages/about.component.jsx";
import Goodie from "./pages/goodie.component.jsx";
import Checkout from "./pages/checkout.component.jsx";
// import ComingSoon from "./pages/comingSoon.component.jsx";

//Components
import Nav from "./components/nav.component.jsx";
import Customize from "./components/customize.component";
import Newsletter from "./components/newsletter.component";
import Footer from "./components/footer.component";

import "./app.styles.scss";

import { calculatePromoPrice } from "./utils/utils.script.js";

const App = () => {
  const [cart, setCart] = useState({});
  //TODO: TOAST GOODIE ADDITION
  const addToCart = (goodie) => {
    let copyCart = { ...cart };
    if (copyCart[goodie.cartID]) {
      copyCart[goodie.cartID].quantity += goodie.quantity;
    } else {
      copyCart[goodie.cartID] = goodie;
    }
    setCart(copyCart);
  };

  const updateCart = (goodie, value) => {
    let copyCart = { ...cart };
    if (copyCart[goodie.cartID]) {
      copyCart[goodie.cartID].quantity += value;
      if (copyCart[goodie.cartID].quantity === 0) {
        return deleteFromCart(goodie.cartID);
      }
    }
    setCart(copyCart);
  };

  const deleteFromCart = (id) => {
    let copyCart = { ...cart };
    delete copyCart[id];
    setCart(copyCart);
  };

  const getTotalPrice = () => {
    let total = Object.values(cart).reduce(
      (acc, goodie, i) =>
        (acc +=
          goodie.quantity *
          (goodie.inPromo
            ? calculatePromoPrice(goodie.price, goodie.promoPercentage)
            : goodie.price)),
      0
    );

    return total;
  };
  const getCartCount = () => {
    let count = Object.entries(cart).length;
    return count;
  };

  return (
    <Box>
      <Nav
        cart={cart}
        deleteFromCart={deleteFromCart}
        getTotalPrice={getTotalPrice}
        getCartCount={getCartCount}
      />
      <Routes>
        {/* <Route path="/" element={<ComingSoon />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/collection/:id" element={<Collection />} />
        <Route path="/our-ambassadors" element={<Ambassador />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/goodie/:id" element={<Goodie addToCart={addToCart} />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              deleteFromCart={deleteFromCart}
              getTotalPrice={getTotalPrice}
              getCartCount={getCartCount}
              updateCart={updateCart}
            />
          }
        />
      </Routes>
      <Customize />
      <Newsletter />
      <Footer />
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
