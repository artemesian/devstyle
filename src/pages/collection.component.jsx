import React, { useEffect } from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";

import GoodieCard from "../components/goodieCard.component";

import Image from "../assets/img/collection-preview/tshirt.png";
import Tshirt from "../assets/img/tshirt.png";

import "./collection.styles.scss";
import { Outlet } from "react-router-dom";
import { scrollToTop } from "../utils/utils.script";

const Collection = () => {
  const match1000 = useMediaQuery("(max-width:1000px)");

  let collection = [
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

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Box paddingX={match1000 ? 0 : 12}>
      <Outlet />
      <Box
        className="collection-hero-section-wrapper"
        style={{
          background: "linear-gradient(90deg, #6DD5ED 0%, #2193B0 100%)",
        }}
        padding={10}
      >
        <Box className="collection-hero-section-container">
          <Typography
            className="text"
            style={{ fontSize: match1000 ? "72px" : "96px" }}
          >
            Nos T-SHIRTS
          </Typography>
          <img src={Image} alt="collection hero" />
        </Box>
      </Box>
      <Box className="goodies-container" marginY={20}>
        <Grid container spacing={5}>
          {collection.map((goodie, i) => (
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
    </Box>
  );
};

export default Collection;
