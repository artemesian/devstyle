import React from "react";
import { Box, Typography, Grid } from "@mui/material";

import GoodieCard from "../components/goodieCard.component";

import Image from "../assets/img/collection-preview/tshirt.png";
import Tshirt from "../assets/img/tshirt.png";

import "./collection.styles.scss";

const Collection = () => {
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

  return (
    <Box paddingX={12}>
      <Box
        className="collection-hero-section-wrapper"
        style={{
          background: "linear-gradient(90deg, #6DD5ED 0%, #2193B0 100%)",
        }}
        padding={10}
      >
        <Box className="collection-hero-section-container">
          <Typography className="text">Nos T-SHIRTS</Typography>
          <img src={Image} alt="collection hero image" />
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
