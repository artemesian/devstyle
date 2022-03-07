import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  DeleteOutlineRounded,
  Close,
  HorizontalSplitOutlined,
} from "@mui/icons-material";

import DevstyleLogo from "../assets/img/devstyle-logo.png";
import DevStyleWhiteLogo from "../assets/img/devstyle-white-logo.png";
import Cart from "../assets/icons/cart.png";
import CloseWhite from "../assets/icons/close.png";
import Tshirt from "../assets/img/tshirt.png";

import "./nav.styles.scss";

const Nav = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:1365px)");
  const handleSideNav = () => {
    const element = document.querySelector("#side-nav");

    element.classList.toggle("hide");
    element.classList.toggle("animate__slideInRight");
  };

  const handleDownNav = () => {
    const element = document.querySelector("#down-nav");

    element.classList.toggle("hide");
    element.classList.toggle("animate__slideInDown");
  };
  return (
    <Box id="nav-wrapper" paddingX={12} paddingY={4}>
      <Box
        className="nav-container"
        style={
          matches ? { display: "flex", justifyContent: "space-between" } : null
        }
      >
        <Box className="nav-logo">
          <img src={DevstyleLogo} alt="Devstyle logo" />
        </Box>
        {!matches ? (
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
        ) : null}
        <Box className="right-actions">
          {!matches ? (
            <Button className="custom-goodies-buttom">Goodies customisé</Button>
          ) : (
            <IconButton onClick={() => handleDownNav()}>
              <HorizontalSplitOutlined fontSize="large" />
            </IconButton>
          )}
          <Box className="cart-button" onClick={() => handleSideNav()}>
            <img src={Cart} alt="cart icon" />
            <span>6</span>
          </Box>
        </Box>
      </Box>
      <Box
        id="down-nav"
        className="hide animate__animated animate__faster"
        padding={3}
        display="flex"
        flexDirection={"column"}
      >
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems="center"
          width={"100%"}
          height={"40px"}
        >
          <img src={DevStyleWhiteLogo} alt="Devstyle logo" height={"100%"} />

          <IconButton onClick={() => handleDownNav()}>
            <img src={CloseWhite} alt="close icon" />
          </IconButton>
        </Box>
        <Box className="links">
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
        <Button className="custom-goodies-buttom">Goodies customisé</Button>
      </Box>
      <Box
        id="side-nav"
        className="hide animate__animated animate__faster"
        padding={3}
        display="flex"
        flexDirection={"column"}
      >
        <Box display={"flex"} justifyContent="flex-start" alignItems="center">
          <IconButton onClick={() => handleSideNav()}>
            <Close />
          </IconButton>
          <Typography>Fermer</Typography>
        </Box>
        <Box paddingY={"20px"}>
          <Typography style={{ fontSize: "24px", fontWeight: "bold" }}>
            Mon Panier
          </Typography>
        </Box>
        <Box
          display="flex"
          width={"100%"}
          justifyContent="flex-start"
          alignItems="flex-start"
          paddingBottom={2}
        >
          <Box
            bgcolor={"#C7C9D9"}
            height="64px"
            width="64px"
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src={Tshirt} alt="goodie image" style={{ height: "75%" }} />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-start"}
            flexDirection={"column"}
            paddingX={1}
            width={"calc(100% - 64px)"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography>Linux House</Typography>
              <Box>2 × 1000 FCFA</Box>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"flex-start"}
              alignItems={"center"}
              paddingY={0.5}
              width={"100%"}
            >
              <Typography>color</Typography>
              <Box
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                  background: "#00B7C4",
                  height: "24px",
                  width: "24px",
                  borderRadius: "50%",
                  margin: " 0 5px",
                }}
              ></Box>{" "}
              &nbsp;
              <Typography>size</Typography>
              <Box
                style={{
                  height: "24px",
                  width: "24px",
                  margin: "0 5px",
                  border: "1px solid #000000",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                M
              </Box>
              <Box
                style={{
                  marginLeft: "auto",
                }}
              >
                <IconButton size="small">
                  <DeleteOutlineRounded />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box marginTop="auto" paddingY={1} bgcolor="white">
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
            marginY={1}
          >
            <Typography>Total</Typography>{" "}
            <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
              3000 FCFA
            </Typography>
          </Box>
          <Button
            style={{
              width: "100%",
              backgroundColor: "#220f00",
              color: "white",
              height: "56px",
            }}
          >
            Finaliser ma commande
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
