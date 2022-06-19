import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  IconButton,
  useMediaQuery,
  Icon,
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

import "./nav.styles.scss";
import { calculatePromoPrice } from "../utils/utils.script";
import myAxios from "../utils/axios.config";
import { analyticsEventTracker } from "../app";

const Nav = ({ cart, getCartCount, getTotalPrice, deleteFromCart }) => {
  const theme = useTheme();
  const matches = useMediaQuery("(max-width:1365px)");
  const match = useMediaQuery("(max-width:1000px)");
  const match400 = useMediaQuery("(min-width:400px)");

  const [announce, setAnnounce] = useState({});

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

  useEffect(() => {
    myAxios
      .get("/announcement")
      .then((response) => {
        if (response.status === 200) {
          setAnnounce(response.data.message);
        } else {
          console.log(response.data.message);
          setAnnounce({});
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box id="nav-wrapper" paddingX={match ? "10%" : 12} paddingY={4}>
      <Box
        className="nav-container"
        style={
          matches ? { display: "flex", justifyContent: "space-between" } : null
        }
      >
        <Box className="nav-logo">
          <Link to={"/"}>
            <img src={DevstyleLogo} alt="Devstyle logo" />
          </Link>
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
              to="/#our-collections-section"
              style={{
                padding: `0px ${theme.spacing(2)}`,
                color: theme.palette.common.black,
              }}
              onClick={() => {
                try {
                  if (document.querySelector("#our-collections-section")) {
                    document
                      .querySelector("#our-collections-section")
                      .scrollIntoView(true);
                  }
                } catch (error) {
                  console.log(error);
                }
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
            <Button
              className="custom-goodies-buttom"
              onClick={() => {
                try {
                  analyticsEventTracker("CUSTOM GOODIE")(
                    "go to custom goodie section"
                  );
                  if (document.querySelector("#custom-section")) {
                    document
                      .querySelector("#custom-section")
                      .scrollIntoView(true);
                  }
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              Goodies customisé
            </Button>
          ) : (
            <IconButton onClick={() => handleDownNav()}>
              <HorizontalSplitOutlined fontSize="large" />
            </IconButton>
          )}
          <Box className="cart-button" onClick={() => handleSideNav()}>
            <img src={Cart} alt="cart icon" />
            <span>{getCartCount() ?? 0}</span>
          </Box>
        </Box>
      </Box>
      {announce._id && (
        <Box className="notif-wrapper animate__animated animate__rotateInDownLeft">
          <a
            href={announce.link}
            style={{ width: "auto" }}
            onClick={() => {
              analyticsEventTracker("ANNOUNCEMENT")("click announcement");
            }}
          >
            <Typography className="notif" component={"span"}>
              {match400 && <Box className="title">Annonce</Box>}
              <Typography className="text">{announce.text}</Typography>
              {announce.link && (
                <Box className="icon">
                  <Icon baseClassName="material-icons-round" color="warning">
                    chevron_right
                  </Icon>
                </Box>
              )}
            </Typography>
          </a>
        </Box>
      )}
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
            onClick={() => handleDownNav()}
            style={{
              padding: `0px ${theme.spacing(2)}`,
              color: theme.palette.common.black,
            }}
          >
            Accueil
          </Link>
          <Link
            to={"/#our-collections-section"}
            onClick={() => {
              try {
                if (document.querySelector("#our-collections-section")) {
                  handleDownNav();
                  document
                    .querySelector("#our-collections-section")
                    .scrollIntoView(true);
                }
              } catch (error) {
                console.log(error);
              }
            }}
            style={{
              padding: `0px ${theme.spacing(2)}`,
              color: theme.palette.common.black,
            }}
          >
            Shop
          </Link>
          <Link
            to={"/our-ambassadors"}
            onClick={() => handleDownNav()}
            style={{
              padding: `0px ${theme.spacing(2)}`,
              color: theme.palette.common.black,
            }}
          >
            Nos Ambassadeurs
          </Link>
          <Link
            to={"/about-us"}
            onClick={() => handleDownNav()}
            style={{
              padding: `0px ${theme.spacing(2)}`,
              color: theme.palette.common.black,
            }}
          >
            Qui sommes-nous ?
          </Link>
        </Box>
        <Button
          className="custom-goodies-buttom"
          onClick={() => {
            analyticsEventTracker("CUSTOM GOODIE")(
              "go to custom goodie section"
            );
            try {
              if (document.querySelector("#custom-section")) {
                handleDownNav();
                document.querySelector("#custom-section").scrollIntoView(true);
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          Goodies customisé
        </Button>
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
        {Object.values(cart).map((goodie, i) => (
          <Box
            key={"cart-" + goodie.cartID + "-" + i}
            display="flex"
            width={"100%"}
            justifyContent="flex-start"
            alignItems="flex-start"
            paddingBottom={2}
          >
            <Box
              bgcolor={
                goodie.backgroundColors[
                  goodie.images.findIndex(
                    (image) => image.url === goodie.mainImage.url
                  )
                ] ?? goodie.backgroundColors[0]
              }
              height="64px"
              width="64px"
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img
                src={
                  // goodie.images.find(
                  //   (image) => image.id === goodie.selectedColor.id
                  // ).image ?? goodie.mainImage.image
                  goodie.mainImage.url
                }
                alt="goodie"
                style={{ height: "75%" }}
              />
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
                // alignItems={"center"}
              >
                {" "}
                <Link
                  to={"/goodie/" + goodie.slug}
                  style={{
                    textDecoration: "none",
                    fontSize: "13px",
                    fontWeight: "500",
                  }}
                  onClick={() => handleSideNav()}
                >
                  {goodie.name}
                </Link>
                <Box style={{ fontSize: "10px" }}>
                  {goodie.quantity} ×{" "}
                  {goodie.inPromo
                    ? calculatePromoPrice(goodie.price, goodie.promoPercentage)
                    : goodie.price}{" "}
                  FCFA
                </Box>
              </Box>
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                paddingY={0.5}
                width={"100%"}
              >
                <Typography style={{ fontSize: "12px" }}>color</Typography>
                <Box
                  style={{
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                    background: goodie.selectedColor,
                    height: "24px",
                    width: "24px",
                    borderRadius: "50%",
                    margin: " 0 5px",
                  }}
                ></Box>{" "}
                &nbsp;
                <Typography style={{ fontSize: "12px" }}>size</Typography>
                <Box
                  style={{
                    height: "24px",
                    width: "24px",
                    margin: "0 5px",
                    border: "1px solid #000000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "14px",
                  }}
                >
                  <span>{goodie.selectedSize}</span>
                </Box>
                <Box
                  style={{
                    marginLeft: "auto",
                  }}
                >
                  <IconButton
                    size="small"
                    onClick={() => deleteFromCart(goodie.cartID)}
                  >
                    <DeleteOutlineRounded />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}

        <Box marginTop="auto" paddingY={1} bgcolor="white">
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems="center"
            marginY={1}
          >
            <Typography>Total</Typography>{" "}
            <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
              {getTotalPrice() ?? 0} FCFA
            </Typography>
          </Box>
          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <Button
              style={{
                width: "100%",
                backgroundColor: "#220f00",
                color: "white",
                height: "56px",
              }}
              onClick={() => handleSideNav()}
            >
              Finaliser ma commande
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
