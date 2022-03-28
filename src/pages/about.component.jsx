import React from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";

import AboutHeroImage from "../assets/img/about-hero.png";
import TeamImage from "../assets/img/team.jpg";

import "./about.styles.scss";

const About = () => {
  const match1000 = useMediaQuery("(max-width:1000px)");

  return (
    <Box>
      <Box paddingX={match1000 ? 0 : 12} className="about-wrapper">
        <Box
          className="about-hero-section-wrapper"
          style={{
            background:
              "linear-gradient(147.14deg, #5B8DEF 6.95%, #0063F7 93.05%)",
          }}
          padding={10}
        >
          <Box className="about-hero-section-container">
            <Box>
              <Typography
                className="text animate__animated animate__flipInX "
                style={{
                  fontSize: match1000 ? "48px" : "64px",
                  lineHeight: match1000 ? "72px" : "100px",
                }}
              >
                {
                  "Tout comme vous nous sommes Developpeurs </> et passionnés de Tech"
                }
              </Typography>
            </Box>
            <img
              src={AboutHeroImage}
              alt="about hero image"
              className="animate__animated animate__fadeInUp animate__delay-1s animate__fast"
            />
          </Box>
        </Box>
      </Box>
      <Box
        className="abouts-info animate__animated animate__fadeIn"
        marginTop={8}
      >
        <Grid container>
          <Grid
            xs={12}
            lg={6}
            style={{ display: "flex", alignItems: "center" }}
            item
          >
            <img
              src={TeamImage}
              alt="devstyle team image"
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid xs={12} lg={6} item>
            <Box
              padding={10}
              style={{
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "20px",
                lineHeight: "40px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
