import React from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import Image from "../assets/img/ambassador.png";
import AmbassadorMan from "../assets/img/ambassador-man.png";
import TwitterGradientIcon from "../assets/icons/twitter-gradient.png";

import "./ambassador.styles.scss";

const Ambassador = () => {
  const match1000 = useMediaQuery("(max-width:1000px)");

  let ambassadors = [
    {
      id: 1,
      color: "#CCDDFF",
      // image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 2,
      color: "#C7C9D9",
      // image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
    {
      id: 3,
      color: "#CCDDFF",
      // image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 4,
      color: "#e3fff1",
      // image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
    {
      id: 5,
      color: "#CCDDFF",
      // image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 6,
      color: "#C7C9D9",
      // image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
    {
      id: 7,
      color: "#CCDDFF",
      // image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: true,
    },
    {
      id: 8,
      color: "#e3fff1",
      // image: Tshirt,
      name: "Linux is the whole house",
      promoPercentage: 23,
      price: 6500,
      link: "",
      inPromo: false,
    },
  ];

  return (
    <Box paddingX={match1000 ? 0 : 12} className="ambassador-wrapper">
      <Box
        className="ambassador-hero-section-wrapper"
        style={{
          background:
            "linear-gradient(147.14deg, #3E7BFA 6.95%, #6600CC 93.05%)",
          overflow: "hidden",
        }}
        padding={10}
      >
        <Box className="ambassador-hero-section-container">
          <Box>
            <Typography
              className="text animate__animated animate__flipInX animate__delay__1s"
              style={{
                fontSize: match1000 ? "56px" : "96px",
                lineHeight: match1000 ? "80px" : "100px",
              }}
            >
              NOS AMBASSADEURS
            </Typography>
            <Typography className="subtext animate__animated animate__fadeInUp animate_delay-5s animate__slower">
              By the same illusion which lifts the horizon of the sea to the
              level
            </Typography>
          </Box>
          <img
            src={Image}
            alt="ambassador hero image"
            className="animate__animated animate__fadeInBottomRight animate__delay-1s"
          />
        </Box>
      </Box>
      <Box className="ambassadors-listing" marginTop={15} marginBottom={8}>
        <Grid container spacing={5}>
          {ambassadors.map((goodie, i) => (
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
              <Box className="ambassador-card">
                <Box
                  className="ambassador-card-top  animate__animated animate__fadeIn"
                  style={{
                    background:
                      "linear-gradient(147.14deg, #3E7BFA 6.95%, #6600CC 93.05%)",
                  }}
                >
                  <img src={AmbassadorMan} alt="ambassador image" />
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <Typography className="name">Rayan</Typography>
                  <img src={TwitterGradientIcon} alt="twitter icon" />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Typography>
          Rejoins le programme <b>DSA</b>
        </Typography>
        <Link to={"/collections"} style={{ textDecoration: "none" }}>
          <Button className="button">Deviens un _DevStyle Ambassador</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Ambassador;
