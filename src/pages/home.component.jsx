import React, { useState } from "react";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { importAll } from "../utils/utils.script";

import ArrowIcon from "../assets/icons/arrow.png";
import TwitterIcon from "../assets/icons/twitter.png";
import FacebookIcon from "../assets/icons/facebook.png";
import InstaIcon from "../assets/icons/insta.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";

import "./home.style.scss";

const Home = () => {
  const [heroImageIndex, setHeroImageIndex] = useState(1);

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
      <Box paddingX={12}>
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
    </Box>
  );
};

export default Home;
