import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Skeleton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { importAll } from "../utils/utils.script";

import GoodieCard from "../components/goodieCard.component";
import GoodieCardSkeleton from "../components/goodieCardSkeleton.component";

import ArrowIcon from "../assets/icons/arrow.png";
import ArrowWhiteIcon from "../assets/icons/arrow-white.png";
import TwitterIcon from "../assets/icons/twitter.png";
import FacebookIcon from "../assets/icons/facebook.png";
import InstaIcon from "../assets/icons/insta.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";
import ShopBagIcon from "../assets/icons/shopping-bag.png";
import HotIcon from "../assets/icons/hot.png";
import RocketIcon from "../assets/icons/rocket.png";

import "./home.style.scss";
import { COLLECTIONS_SEEDER, GOODIES_SEEDER } from "../utils/seeders.data";
import { scrollToTop } from "../utils/utils.script";

const Home = () => {
  const [heroImageIndex, setHeroImageIndex] = useState(1);
  const [collections, setCollections] = useState([]);
  const [trendingGoodies, setTrendingGoodies] = useState([]);
  const [newGoodies, setNewGoodies] = useState([]);
  const [isLoadingCollections, setIsLoadingCollections] = useState(true);
  const [isLoadingTrendingGoodies, setIsLoadingTrendingGoodies] =
    useState(true);
  const [isLoadingNewGoodies, setIsLoadingNewGoodies] = useState(true);

  const match1000 = useMediaQuery("(max-width:1000px)");
  const match900 = useMediaQuery("(max-width:900px)");

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

  useEffect(() => {
    let hash = window.location.hash;
    try {
      if (document.querySelector(hash)) {
        document.querySelector(hash).scrollIntoView(true);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      //TODO: LOAD COLLECTIONS
      setCollections(COLLECTIONS_SEEDER);
      setIsLoadingCollections(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      //TODO: LOAD TRENDING GOODIES
      setTrendingGoodies(GOODIES_SEEDER);
      setIsLoadingTrendingGoodies(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      //TODO: LOAD NEW & HOT GOODIES
      setNewGoodies(GOODIES_SEEDER.slice(0, 4));
      setIsLoadingNewGoodies(false);
    }, 3000);
  }, []);

  useEffect(() => {
    let id = setInterval(() => {
      let nextButton = document.querySelector("#next-hero-image");

      if (nextButton) {
        nextButton.click();
      }
    }, 6500);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    try {
      let hash = window.location.hash;
      if (!hash) {
        scrollToTop();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Box id="home-container">
      <Box paddingX={match1000 ? "10%" : 12} className="hero-section-wrapper">
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
            <Button className="hero-button">
              <a
                href="#our-collections-section"
                style={{ textDecoration: "none", color: "white" }}
              >
                npm start shopping
              </a>
            </Button>
            <Box className="social-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/_devstyle"
              >
                <img src={TwitterIcon} alt="twitter icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send/?phone=237692650993&text=Hello _DevStyle"
              >
                <img src={WhatsappIcon} alt="whatsapp icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/devstyl"
              >
                <img src={FacebookIcon} alt="facebook icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/_devstyle/"
              >
                <img src={InstaIcon} alt="insta icon" />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="image-side">
            <Box
              className="animate__animated animate__jackInTheBox  animate__delay-1s"
              style={{
                alignSelf: match900 ? "center" : "flex-end",
              }}
            >
              <img
                src={HeroImages[`hero_image_${heroImageIndex}.png`]}
                alt="devstyle hero"
                id="hero-image"
                className="animate__faster"
              />
              <Box className="icons-container">
                <IconButton>
                  <img
                    id="back-hero-image"
                    src={ArrowIcon}
                    alt="backward icon"
                    className="backward-icon"
                    onClick={() => handleHeroImageChange("back")}
                  />
                </IconButton>
                <IconButton>
                  <img
                    id="next-hero-image"
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
      <Box
        id="our-collections-section"
        className="our-collections-section"
        paddingX={match1000 ? 0 : 12}
        paddingY={12}
      >
        <Box className="title-container">
          <Typography
            className="title"
            style={{ fontSize: "36px" }}
            component={"span"}
          >
            Nos
          </Typography>
          &nbsp; &nbsp;
          <Box position={"relative"}>
            <Typography
              className="title"
              style={{ fontSize: "36px" }}
              component={"span"}
            >
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
          <Grid
            container
            spacing={match1000 ? 0 : 1}
            className="collections-wrapper"
          >
            {isLoadingCollections ? (
              <>
                <Grid item xs={12} lg={6}>
                  <Skeleton
                    variant="rectangular"
                    height={600}
                    width={"100%"}
                    animation="wave"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Skeleton
                    variant="rectangular"
                    height={600}
                    width={"100%"}
                    animation="wave"
                  />
                </Grid>
              </>
            ) : (
              collections.map((collection, i) => (
                <Grid
                  item
                  xs={12}
                  lg={i === collections.length - 1 ? 12 : 6}
                  key={i + "" + collection.id}
                >
                  <Link
                    to={`/collection/${collection.slug}`}
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
                        paddingX={
                          i === collections.length - 1 && !match1000 ? 10 : 4
                        }
                        justifyItems={"center"}
                        alignContent={"center"}
                        zIndex={3}
                      >
                        <Typography
                          className={`collection-item-title  ${
                            i === collections.length - 1 && !match1000
                              ? "large"
                              : ""
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
                            i === collections.length - 1 && !match1000
                              ? "large"
                              : ""
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
              ))
            )}
          </Grid>
        </Box>
      </Box>
      <Box
        className="goodies-listing-section"
        paddingX={match1000 ? "10%" : 12}
        paddingY={12}
      >
        <Box className="title-container" style={{ fontSize: "16px" }}>
          <Box position={"relative"}>
            <Typography
              className="title"
              style={{ fontSize: "36px" }}
              component={"span"}
            >
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
          <Typography
            className="title"
            style={{ fontSize: "36px" }}
            component={"span"}
          >
            et Chauds
          </Typography>
          <img src={HotIcon} alt="hot icon" />
        </Box>

        <Box className="goodies-container" marginY={8}>
          <Grid container spacing={5}>
            {isLoadingNewGoodies ? (
              <>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <GoodieCardSkeleton />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <GoodieCardSkeleton />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <GoodieCardSkeleton />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <GoodieCardSkeleton />
                </Grid>
              </>
            ) : (
              newGoodies.map((goodie, i) => (
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
              ))
            )}
          </Grid>
        </Box>
        <br />
        <br />
        <br />
        <Box className="title-container" style={{ fontSize: "16px" }}>
          <Typography
            className="title"
            style={{ fontSize: "36px" }}
            component={"span"}
          >
            En
          </Typography>
          &nbsp; &nbsp;
          <Box position={"relative"}>
            <Typography
              className="title"
              style={{ fontSize: "36px" }}
              component={"span"}
            >
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
            {isLoadingTrendingGoodies ? (
              <>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <GoodieCardSkeleton />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <GoodieCardSkeleton />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <GoodieCardSkeleton />
                </Grid>
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <GoodieCardSkeleton />
                </Grid>
              </>
            ) : (
              trendingGoodies.map((goodie, i) => (
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
              ))
            )}
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
