import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, useMediaQuery } from "@mui/material";
import Helmet from "react-helmet";

import AmbassadorCardSkeleton from "../components/ambassadorCardSkeleton.component";

import Image from "../assets/img/ambassador.png";

import "./ambassador.styles.scss";
import { scrollToTop } from "../utils/utils.script";
import myAxios from "../utils/axios.config";
import { analyticsEventTracker } from "../app";

const Ambassador = () => {
  const match1000 = useMediaQuery("(max-width:1000px)");
  const [isLoadingAmbassadors, setIsLoadingAmbassadors] = useState(true);
  const [ambassadors, setAmbassadors] = useState([]);

  useEffect(() => {
    myAxios
      .get("/ambassador/all")
      .then((response) => {
        if (response.status === 200) {
          setAmbassadors(response.data.message);
        } else {
          console.log(response.data.message);
          setAmbassadors([]);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoadingAmbassadors(false));
  }, []);

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Box paddingX={match1000 ? 0 : 12} className="ambassador-wrapper">
      <Helmet>
        <title>
          {" "}
          Nos Ambassadeurs | Ils représentent avec Enthousiasme et Fierté notre
          Brand
        </title>
        <meta
          name="description"
          content="Tout comme des flambeaux, ils illuminent notre vision avec enthousiasme et passion | Deviens un Brand Ambassador et on se retrouve de l'autre côté 😉"
        />
      </Helmet>
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
              Ils représentent avec enthousiasme notre <b>Brand🏆</b>
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
          ) : ambassadors.length <= 0 ? (
            <Typography
              style={{
                width: "100%",
                textAlign: "center",
                margin: "25px 0px",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              Coming SOON !💜⌛
            </Typography>
          ) : (
            ambassadors.map((ambassador, i) => (
              <Grid
                key={i + " " + ambassador._id}
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
                      background: `linear-gradient(147.14deg, ${
                        ambassador.colors.split("-")[0]
                      } 6.95%, ${ambassador.colors.split("-")[1]} 93.05%)`,
                    }}
                  >
                    <img src={ambassador.image.url} alt={ambassador.name} />
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
                            src={`/social/${social.id}.png`}
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
        <a
          href="https://bit.ly/devstyle_ambassador"
          target={"_blank"}
          style={{ textDecoration: "none" }}
          rel="noreferrer"
          onClick={() => {
            analyticsEventTracker("AMBASSADOR")("become an ambassador");
          }}
        >
          <Button className="button">Deviens un _DevStyle Ambassador</Button>
        </a>
      </Box>
    </Box>
  );
};

export default Ambassador;
