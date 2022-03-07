import React, { useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { importAll } from "../utils/utils.script";

import GoodieCard from "../components/goodieCard.component";

import ArrowIcon from "../assets/icons/arrow.png";
import ArrowWhiteIcon from "../assets/icons/arrow-white.png";
import TwitterIcon from "../assets/icons/twitter.png";
import FacebookIcon from "../assets/icons/facebook.png";
import InstaIcon from "../assets/icons/insta.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";
import ShopBagIcon from "../assets/icons/shopping-bag.png";
import HotIcon from "../assets/icons/hot.png";
import RocketIcon from "../assets/icons/rocket.png";
import Tshirt from "../assets/img/tshirt.png";

import "./home.style.scss";

const Home = () => {
  const [heroImageIndex, setHeroImageIndex] = useState(1);
  let collections = [
    {
      id: 1,
      colors: ["#6DD5ED", "#2193B0"],
      image: "./collection-preview/tshirt.png",
      title: "T-SHIRTS",
      link: "",
    },
    {
      id: 2,
      colors: ["#606C88", "#3F4C6B"],
      image: "./collection-preview/hoodie.png",
      title: "HOODIES",
      link: "",
    },
    {
      id: 3,
      colors: ["#FEB47B", "#FF7E5F"],
      image: "./collection-preview/sticker.png",
      title: "STICKERS",
      link: "",
    },
    {
      id: 4,
      colors: ["#DA22FF", "#9733EE"],
      image: "./collection-preview/hat.png",
      title: "HATS",
      link: "",
    },
    {
      id: 5,
      colors: ["#E0EAFC", "#CFDEF3"],
      image: "./collection-preview/mug.png",
      title: "MUGS",
      link: "",
    },
    {
      id: 6,
      colors: ["#FFCC33", "#FFB347"],
      image: "./collection-preview/phone-case.png",
      title: "PHONE CASES",
      link: "",
    },
    {
      id: 7,
      colors: ["#4BE69B", "#11998E"],
      image: "./collection-preview/bracelet.png",
      title: "BRACELETS",
      link: "",
    },
    {
      id: 8,
      colors: ["#673AB7", "#512DA8"],
      image: "./collection-preview/mask.png",
      title: "MASKS",
      link: "",
    },
    {
      id: 9,
      colors: ["#E35D5B", "#E53935"],
      image: "./collection-preview/sweatshirt.png",
      title: "SWEATSHIRTS",
      link: "",
    },
    {
      id: 10,
      colors: ["#2A5298", "#1E3C72"],
      image: "./collection-preview/polo.png",
      title: "POLOS",
      link: "",
    },
    {
      id: 11,
      colors: ["#D3CCE3", "#E9E4F0"],
      image: "./collection-preview/poster.png",
      title: "THE POSTERS",
      link: "",
    },
  ];
  let newHot = [
    {
      id: 1,
      color: "#CCDDFF",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 2,
      color: "#C7C9D9",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
    {
      id: 3,
      color: "#CCDDFF",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 4,
      color: "#e3fff1",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
  ];
  let trendings = [
    {
      id: 1,
      color: "#CCDDFF",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 2,
      color: "#C7C9D9",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
    {
      id: 3,
      color: "#CCDDFF",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 4,
      color: "#e3fff1",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
    {
      id: 5,
      color: "#CCDDFF",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 6,
      color: "#C7C9D9",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
    {
      id: 7,
      color: "#CCDDFF",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 8,
      color: "#e3fff1",
      image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
  ];
  const HeroImages = importAll(
    require.context("../assets/img/hero/", false, /\.(png|jpe?g)$/)
  );

  const handleHeroImageChange = (step) => {
    const element = document.querySelector("#hero-image");
    let next = 1;
    if (step === "back") {
      element.classList.add("animate__animated", "animate__fadeOutRight");
      element.addEventListener("animationend", () => {
        next =
          heroImageIndex === 1
            ? Object.keys(HeroImages).length
            : heroImageIndex - 1;
        setHeroImageIndex(next);
        element.classList.remove(
          "animate__animated",
          "animate__fadeOutRight",
          "animate__fadeInRight"
        );
        element.classList.add("animate__animated", "animate__fadeInLeft");
      });
    } else {
      element.classList.add("animate__animated", "animate__fadeOutLeft");
      element.addEventListener("animationend", () => {
        next =
          heroImageIndex === Object.keys(HeroImages).length
            ? 1
            : heroImageIndex + 1;
        setHeroImageIndex(next);
        element.classList.remove(
          "animate__animated",
          "animate__fadeOutLeft",
          "animate__fadeInLeft"
        );
        element.classList.add("animate__animated", "animate__fadeInRight");
      });
    }
  };

  return (
    <Box id="home-container">
      <Box paddingX={12} className="hero-section-wrapper">
        <Grid container className="hero-section">
          <Grid
            item
            xs={12}
            md={6}
            className="text-side animate__animated animate__backInLeft"
          >
            <Typography className="green-text" component={"span"}>
              La premiere boutique dedié aux amoureux de la Tech #TT237{" "}
            </Typography>
            <Typography
              className="hero-title"
              component={"h2"}
              variant={"title"}
            >
              EXPRIME TA PASSION POUR LA TECH_
            </Typography>
            <Typography
              className="hero-text"
              component={"div"}
              variant={"body1"}
            >
              By the same illusion which lifts the horizon of the sea to the
              level illusion which lifts the horizon of the sea to the level
            </Typography>
            <Button className="hero-button">npm start shopping</Button>
            <Box className="social-container">
              <img src={TwitterIcon} alt="twitter icon" />
              <img src={WhatsappIcon} alt="whatsapp icon" />
              <img src={FacebookIcon} alt="facebook icon" />
              <img src={InstaIcon} alt="insta icon" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="image-side">
            <Box className="animate__animated animate__jackInTheBox  animate__delay-1s">
              <img
                src={HeroImages[`hero_image_${heroImageIndex}.png`]}
                alt="devstyle hero image"
                id="hero-image"
                className="animate__faster"
              />
              <Box className="icons-container">
                <IconButton>
                  <img
                    src={ArrowIcon}
                    alt="backward icon"
                    className="backward-icon"
                    onClick={() => handleHeroImageChange("back")}
                  />
                </IconButton>
                <IconButton>
                  <img
                    src={ArrowIcon}
                    alt="forward icon"
                    className="forward-icon"
                    onClick={() => handleHeroImageChange("next")}
                  />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="our-collections-section" paddingX={12} paddingY={12}>
        <Box className="title-container">
          <Typography className="title" component={"span"}>
            Nos
          </Typography>
          &nbsp; &nbsp;
          <Box position={"relative"}>
            <Typography className="title" component={"span"}>
              Collections
            </Typography>
            <hr
              style={{
                height: "6px",
                width: "100%",
                borderWidth: "0",
                color: "#05A660",
                backgroundColor: "#05A660",
                borderRadius: "20px",
                position: "absolute",
              }}
            />
          </Box>
          <img src={ShopBagIcon} alt="shopping bag icon" />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1} className="collections-wrapper">
            {collections.map((collection, i) => (
              <Grid
                item
                xs={12}
                lg={i === collections.length - 1 ? 12 : 6}
                key={i + "" + collection.id}
              >
                <Link
                  to={`/collection/1${collection.link}`}
                  style={{ textDecoration: "none" }}
                >
                  <Grid
                    container
                    style={{
                      background: `linear-gradient(90deg, ${collection.colors[0]} 0%, ${collection.colors[1]} 100%)`,
                    }}
                    className={`collection-item animate__animated ${
                      i % 2 === 0
                        ? "animate__fadeInLeft"
                        : "animate__fadeInRight"
                    }`}
                  >
                    <Grid
                      item
                      xs={10}
                      paddingX={i === collections.length - 1 ? 10 : 4}
                      justifyItems={"center"}
                      alignContent={"center"}
                      zIndex={3}
                    >
                      <Typography
                        className={`collection-item-title  ${
                          i === collections.length - 1 ? "large" : ""
                        }`}
                        component={"h2"}
                      >
                        {i === collections.length - 1 ? (
                          <>
                            {collection.title.split(" ")[0]} <br />
                            {collection.title.split(" ")[1]}
                          </>
                        ) : (
                          collection.title
                        )}
                      </Typography>
                      <Button
                        className={`button ${
                          i === collections.length - 1 ? "large" : ""
                        }`}
                      >
                        this.shop.now()
                      </Button>
                    </Grid>
                    <Grid item xs={2} className="collection-image-container">
                      <img
                        className="collection-image"
                        src={collection.image}
                        alt={collection.title + " image"}
                      />
                    </Grid>
                  </Grid>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Box className="goodies-listing-section" paddingX={12} paddingY={12}>
        <Box className="title-container">
          <Box position={"relative"}>
            <Typography className="title" component={"span"}>
              Nouveaux
            </Typography>
            <hr
              style={{
                height: "6px",
                width: "100%",
                borderWidth: "0",
                color: "#ff3b3b",
                backgroundColor: "#ff3b3b",
                borderRadius: "20px",
                position: "absolute",
              }}
            />
          </Box>
          &nbsp; &nbsp;
          <Typography className="title" component={"span"}>
            et Chauds
          </Typography>
          <img src={HotIcon} alt="hot icon" />
        </Box>

        <Box className="goodies-container" marginY={8}>
          <Grid container spacing={5}>
            {newHot.map((goodie, i) => (
              <Grid
                key={i + " " + goodie.id}
                item
                xs={12}
                md={6}
                lg={4}
                xl={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GoodieCard {...goodie} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <br />
        <br />
        <br />
        <Box className="title-container">
          <Typography className="title" component={"span"}>
            En
          </Typography>
          &nbsp; &nbsp;
          <Box position={"relative"}>
            <Typography className="title" component={"span"}>
              Tendances
            </Typography>
            <hr
              style={{
                height: "6px",
                width: "100%",
                borderWidth: "0",
                color: "#0063F7",
                backgroundColor: "#0063F7",
                borderRadius: "20px",
                position: "absolute",
              }}
            />
          </Box>
          <img src={RocketIcon} alt="rocket icon" />
        </Box>
        <Box className="goodies-container" marginY={8}>
          <Grid container spacing={5}>
            {trendings.map((goodie, i) => (
              <Grid
                key={i + " " + goodie.id}
                item
                xs={12}
                md={6}
                lg={4}
                xl={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <GoodieCard {...goodie} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <br />
        <Box display={"flex"} justifyContent={"center"}>
          <Link to={"/collections"} style={{ textDecoration: "none" }}>
            <Button className="button">
              Voir tous nos goodies{" "}
              <img
                src={ArrowWhiteIcon}
                alt="arrow icon"
                style={{ marginLeft: "7px" }}
              />
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
