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
import Helmet from "react-helmet";

import GoodieCard from "../components/goodieCard.component";
import GoodieCardSkeleton from "../components/goodieCardSkeleton.component";
import Spinner from "../components/spinner.component";

import ArrowIcon from "../assets/icons/arrow.png";
import ArrowWhiteIcon from "../assets/icons/arrow-white.png";
import TwitterIcon from "../assets/icons/twitter.png";
import FacebookIcon from "../assets/icons/facebook.png";
import InstaIcon from "../assets/icons/insta.png";
import TiktokIcon from "../assets/icons/tiktok.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";
import ShopBagIcon from "../assets/icons/shopping-bag.png";
import HotIcon from "../assets/icons/hot.png";
import RocketIcon from "../assets/icons/rocket.png";

import "./home.style.scss";
// import { COLLECTIONS_SEEDER, GOODIES_SEEDER } from "../utils/seeders.data";
import { importAll } from "../utils/utils.script";
import { scrollToTop } from "../utils/utils.script";
import myAxios from "../utils/axios.config";
import { analyticsEventTracker } from "../app";

const Home = () => {
  const HeroImages = importAll(
    require.context("../assets/img/hero/", false, /\.(png|jpe?g)$/)
  );
  const hero_images = Object.values(HeroImages).map((image, i) => ({
    _id: i,
    image: { url: image },
  }));
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [collections, setCollections] = useState([]);
  const [trendingGoodies, setTrendingGoodies] = useState([]);
  const [newGoodies, setNewGoodies] = useState([]);
  const [isLoadingCollections, setIsLoadingCollections] = useState(true);
  const [heroSection, setHeroSection] = useState(
    hero_images.length > 0 ? [...hero_images] : []
  );
  const [isLoadingTrendingGoodies, setIsLoadingTrendingGoodies] =
    useState(true);
  const [isLoadingNewGoodies, setIsLoadingNewGoodies] = useState(true);
  // const [isLoadingHeroSection, setIsLoadingHeroSection] = useState(true);

  const match1000 = useMediaQuery("(max-width:1000px)");
  const match900 = useMediaQuery("(max-width:900px)");

  const handleHeroImageChange = (step) => {
    const element = document.querySelector("#hero-image");
    let next = 1;
    if (step === "back") {
      element.classList.add("animate__animated", "animate__fadeOutRight");
      element.addEventListener("animationend", () => {
        next =
          heroImageIndex === 0
            ? Object.keys(heroSection).length - 1
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
          heroImageIndex === Object.keys(heroSection).length - 1
            ? 0
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
    myAxios
      .get("/collection/all")
      .then((response) => {
        if (response.status === 200) {
          setCollections(response.data.message);
          setIsLoadingCollections(false);
        } else {
          console.log(response.data.message);
          setCollections([]);
          setIsLoadingCollections(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    myAxios
      .get("/goodies/hot-goodies")
      .then((response) => {
        if (response.status === 200) {
          setTrendingGoodies(response.data.message);
          setIsLoadingTrendingGoodies(false);
        } else {
          console.log(response.data.message);
          setTrendingGoodies([]);
          setIsLoadingTrendingGoodies(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    myAxios
      .get("/goodies/new-goodies")
      .then((response) => {
        if (response.status === 200) {
          setNewGoodies(response.data.message);
          setIsLoadingNewGoodies(false);
        } else {
          console.log(response.data.message);
          setNewGoodies([]);
          setIsLoadingNewGoodies(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    myAxios
      .get("/hero/all")
      .then((response) => {
        if (response.status === 200) {
          setHeroSection((prevState) => [
            ...prevState,
            ...response.data.message,
          ]);
          // setIsLoadingHeroSection(false);
        } else {
          console.log(response.data.message);
          setHeroSection((prevState) => [...prevState]);
          // setIsLoadingHeroSection(false);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (heroSection.length > 1) {
      let id = setInterval(() => {
        let nextButton = document.querySelector("#next-hero-image");

        if (nextButton) {
          nextButton.click();
        }
      }, 6500);
      return () => {
        clearInterval(id);
      };
    }
  }, [heroSection]);

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
      <Helmet>
        <title>
          {" "}
          La premiere boutique dedié aux amoureux de la Tech, Developpeur #TT237
        </title>
        <meta
          name="description"
          content="Optez pour des vêtements tels que des T-shirts, des Hoodies, des Sweat-shirts ou encore des articles plus uniques tels que des Pochettes, des Casquettes, des Mugs, des Posters et des Stickers et bien plus qui reflètent et expriment pleinement votre passion pour la technologie💙. #EtreDeveloppeurPlusQu'unMetierC'estUnStyleDeVie #devStyle #devAttitude"
        />{" "}
        <meta
          name="Devstyle"
          content="Devstyle platforme de vente des Tshirts, Goodies pour developpeur #TT237 "
        />
      </Helmet>
      <Box paddingX={match1000 ? "5%" : 12} className="hero-section-wrapper">
        <Grid container className="hero-section">
          <Grid
            item
            xs={12}
            md={6}
            className="text-side animate__animated animate__backInLeft"
          >
            <Typography
              className="green-text"
              component={"span"}
              style={{ fontSize: match900 ? "12px" : "14px" }}
            >
              La premiere boutique dedié aux amoureux de la Tech #TT237{" "}
            </Typography>
            <Typography
              className="hero-title"
              component={"h2"}
              variant={"title"}
              style={{
                fontSize: match900 ? "40px" : "50px",
                lineHeight: match900 ? "60px" : "68px",
              }}
            >
              EXPRIME TA PASSION POUR LA TECH_
            </Typography>
            <Typography
              className="hero-text"
              component={"div"}
              variant={match900 ? "body2" : "body1"}
            >
              Sois fière d'être passionné💙!
              <br />
              <i>
                <b
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {match900 ? (
                    <span>
                      #Etre Developpeur Plus Qu'un Metier C'est Un Style De Vie
                    </span>
                  ) : (
                    <span>
                      #EtreDeveloppeurPlusQu'unMetierC'estUnStyleDeVie
                    </span>
                  )}{" "}
                  #devStyle #devAttitude
                </b>
              </i>
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
                onClick={() => {
                  analyticsEventTracker("SOCIAL")("twitter");
                }}
                rel="noopener noreferrer"
                href="https://twitter.com/_devstyle"
              >
                <img src={TwitterIcon} alt="twitter icon" />
              </a>
              <a
                target="_blank"
                onClick={() => {
                  analyticsEventTracker("SOCIAL")("whatsapp");
                }}
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send/?phone=237692650993&text=Hello _DevStyle"
              >
                <img src={WhatsappIcon} alt="whatsapp icon" />
              </a>
              <a
                target="_blank"
                onClick={() => {
                  analyticsEventTracker("SOCIAL")("facebook");
                }}
                rel="noopener noreferrer"
                href="https://www.facebook.com/devstyl"
              >
                <img src={FacebookIcon} alt="facebook icon" />
              </a>
              <a
                target="_blank"
                onClick={() => {
                  analyticsEventTracker("SOCIAL")("tiktok");
                }}
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@_devstyle"
              >
                <img src={TiktokIcon} alt="tiktok icon" />
              </a>
              <a
                target="_blank"
                onClick={() => {
                  analyticsEventTracker("SOCIAL")("instagram");
                }}
                rel="noopener noreferrer"
                href="https://www.instagram.com/_devstyle/"
              >
                <img src={InstaIcon} alt="insta icon" />
              </a>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} className="image-side">
            {heroSection.length < 1 ? (
              <Box
                height={"100%"}
                width={"100%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Spinner size={100} thickness={10} color={"#220f0055"} />
              </Box>
            ) : (
              <Box
                className="animate__animated animate__jackInTheBox  animate__delay-1s"
                style={{
                  alignSelf: match900 ? "center" : "flex-end",
                }}
              >
                <img
                  src={heroSection[heroImageIndex].image.url}
                  alt="devstyle hero"
                  id="hero-image"
                  className="animate__faster"
                  style={{
                    margin: match900 ? "auto" : "0 0 0 auto",
                    width: match900 ? "100%" : "65%",
                  }}
                />
                {heroSection.length > 1 && (
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
                )}
              </Box>
            )}
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
            style={{ fontSize: match900 ? "30px" : "36px" }}
            component={"span"}
          >
            Nos
          </Typography>
          &nbsp; &nbsp;
          <Box position={"relative"}>
            <Typography
              className="title"
              style={{ fontSize: match900 ? "30px" : "36px" }}
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
                  key={i + "" + collection._id}
                >
                  <Link
                    to={`/collection/${collection.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Grid
                      container
                      style={{
                        background: `linear-gradient(90deg, ${
                          collection.colors.split("-")[0]
                        } 0%, ${collection.colors.split("-")[1]} 100%)`,
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
                          src={collection.image.url}
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
              style={{ fontSize: match900 ? "30px" : "36px" }}
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
            style={{ fontSize: match900 ? "30px" : "36px" }}
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
                  key={i + " " + goodie._id}
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
            style={{ fontSize: match900 ? "30px" : "36px" }}
            component={"span"}
          >
            En
          </Typography>
          &nbsp; &nbsp;
          <Box position={"relative"}>
            <Typography
              className="title"
              style={{ fontSize: match900 ? "30px" : "36px" }}
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
          <Link
            to={"/collection/all-goodies"}
            style={{ textDecoration: "none" }}
          >
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
