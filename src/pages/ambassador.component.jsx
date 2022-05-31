import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import AmbassadorCardSkeleton from "../components/ambassadorCardSkeleton.component";

import Image from "../assets/img/ambassador.png";

import "./ambassador.styles.scss";
import { AMBASSADORS_SEEDER } from "../utils/seeders.data";
import { scrollToTop } from "../utils/utils.script";

const Ambassador = () => {
  const match1000 = useMediaQuery("(max-width:1000px)");
  const [isLoadingAmbassadors, setIsLoadingAmbassadors] = useState(true);
  const [ambassadors, setAmbassadors] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      //TODO: LOAD AMBASSADORS
      setAmbassadors(AMBASSADORS_SEEDER);
      setIsLoadingAmbassadors(false);
    }, 3000);
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

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
            alt="ambassador hero"
            className="animate__animated animate__fadeInBottomRight animate__delay-1s"
          />
        </Box>
      </Box>
      <Box className="ambassadors-listing" marginTop={15} marginBottom={8}>
        <Grid container spacing={5}>
          {isLoadingAmbassadors ? (
            <>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <AmbassadorCardSkeleton />
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <AmbassadorCardSkeleton />
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <AmbassadorCardSkeleton />
              </Grid>
              <Grid item xs={12} md={6} lg={4} xl={3}>
                <AmbassadorCardSkeleton />
              </Grid>
            </>
          ) : (
            ambassadors.list.map((ambassador, i) => (
              <Grid
                key={i + " " + ambassador.id}
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
                      background: `linear-gradient(147.14deg, ${ambassadors.colors[0]} 6.95%, ${ambassadors.colors[1]} 93.05%)`,
                    }}
                  >
                    <img src={ambassador.image} alt={ambassador.name} />
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    flexDirection={"column"}
                    alignItems={"center"}
                  >
                    <Typography className="name">{ambassador.name}</Typography>
                    {ambassador.social.map((social, i) => (
                      <>
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`/social/${social.name}.png`}
                            alt={social.name}
                          />
                        </a>
                      </>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))
          )}
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
