import React from "react";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import DevstyleLogo from "../assets/img/devstyle-logo.png";
import Cart from "../assets/icons/cart.png";

import "./nav.styles.scss";

const Nav = () => {
  const theme = useTheme();
  console.log(theme.palette.common.black, theme.palette);
  return (
    <Box id="nav-wrapper" paddingX={12} paddingY={4}>
      <Box className="nav-container">
        <Box className="nav-logo">
          <img src={DevstyleLogo} alt="Devstyle logo" />
        </Box>
        <Box className="middle-links">
          <Link
            to={"/"}
            style={{
              padding: `0px ${theme.spacing(2)}`,
              color: theme.palette.common.black,
            }}
          >
            Accueil
          </Link>
          <Link
            to={"/shop"}
            style={{
              padding: `0px ${theme.spacing(2)}`,
              color: theme.palette.common.black,
            }}
          >
            Shop
          </Link>
          <Link
            to={"/our-ambassadors"}
            style={{
              padding: `0px ${theme.spacing(2)}`,
              color: theme.palette.common.black,
            }}
          >
            Nos Ambassadeurs
          </Link>
          <Link
            to={"/about-us"}
            style={{
              padding: `0px ${theme.spacing(2)}`,
              color: theme.palette.common.black,
            }}
          >
            Qui sommes-nous ?
          </Link>
        </Box>
        <Box className="right-actions">
          <Button className="custom-goodies-buttom">Goodies customisé</Button>
          <Box className="cart-button">
            <img src={Cart} alt="cart icon" />
            <span>6</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
