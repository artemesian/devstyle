import React, { useEffect } from "react";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";

import AboutHeroImage from "../assets/img/about-hero.png";
// import TeamImage from "../assets/img/team.jpg";
import AccountIcon from "../assets/icons/account.png";
import GlobeIcon from "../assets/icons/globe.png";
import ModuleIcon from "../assets/icons/module.png";

import "./about.styles.scss";
import { scrollToTop } from "../utils/utils.script";
import { analyticsEventTracker } from "../app";

const About = () => {
  const match900 = useMediaQuery("(max-width:900px)");
  const match1000 = useMediaQuery("(max-width:1000px)");
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Box className="about-wrapper">
      <Box paddingX={match1000 ? 0 : 12}>
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
              alt="about hero"
              className="animate__animated animate__fadeInUp animate__delay-1s animate__fast"
            />
          </Box>
        </Box>
      </Box>
      <Box
        className="abouts-info animate__animated animate__fadeIn"
        marginTop={2}
      >
        <Box
          padding={match900 ? 3 : 10}
          style={{
            height: "100%",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "40px",
            textAlign: "center",
            width: "100%",
            maxWidth: "1400px",
          }}
        >
          <Box className="title-container">
            <Typography
              className="title"
              style={{ fontSize: "36px" }}
              component={"span"}
            >
              C’est quoi
            </Typography>
            &nbsp; &nbsp;
            <Box position={"relative"}>
              <Typography
                className="title"
                style={{ fontSize: "36px" }}
                component={"span"}
              >
                DevStyle?
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
          </Box>
          <Box
            style={{
              fontSize: "15px",
              textAlign: match900 ? "justify" : "center",
            }}
          >
            De façon littérale DevStyle est composé de deux mots Dev et Style,
            Dev qui désigne les professionnels, passionnés et fans de
            Technologies ( <b>Techx</b> ) et Style qui désigne un mode de vie et
            une façon de s'exprimer via le vestimentaire. <br />
            <br /> DevStyle est une marque dont l'objectif premier est de
            concevoir des designs, des visuels et des slogans originaux,
            créatifs et fun, méticuleusement réalisés sur des vêtements et
            Accessoires pour vous distinguer et vous connecter à votre passion
            pour la technologie. Optez pour des vêtements tels que des T-shirts,
            des Hoodies, des Sweat-shirts ou encore des articles plus uniques
            tels que des Pochettes, des Casquettes, des Mugs, des Posters et des
            Stickers et bien plus qui reflètent et expriment pleinement votre
            passion pour la technologie💙.
            <br />
            <br />
            <q>
              <i style={{ fontWeight: 300 }}>
                Nous espérons vivement que lorsque votre ou vos articles favoris
                arriveront de la boutique, vous ressentirez le même esprit
                d'originalité et d'euphorie que nous
              </i>
              🤗
            </q>
            <br />
            <br />
            📌 Ensuite, DevStyle vise à construire{" "}
            <b>
              une communauté Techx solidaire, dynamique et amusante partageant
              la même passion pour la technologie que vous, et par-dessus tout,
              nous visons à établir un écosystème dynamique pour les Techx
            </b>
            , en mettant en œuvre les objectifs suivants:
            <br />
            <br />
            <span
              style={{
                backgroundColor: "#a9eff2",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              Meets & Talks Events fréquentes,
            </span>
            <br />
            <br />
            nous croyons que l'organisation plus fréquente d'événements Meets &
            Talks dynamise l'écosystème Tech, donne la possibilité de s'informer
            sur les nouvelles technologies en vogue{" "}
            <span style={{ fontWeight: 600 }}>
              ( Software, Blockchain, Electronic, AI etc )
            </span>{" "}
            et d'apprendre des expériences des experts de notre communauté et
            surtout cela permettra de se créer un réseau de personnes partageant
            la même passion que vous, créant ainsi plus d'opportunités
            potentielles, plus d'idées, et qui sait, peut-être que cette idée
            pourrait aboutir à la prochaine Licorne ou pourquoi pas Hectocorne
            de notre Société !🚀.
            <br />
            <br />
            <span
              style={{
                backgroundColor: "#a9eff2",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              Hackathons & Compétitions,
            </span>
            <br />
            <br />
            nous croyons également que les compétitions favorisent
            l'amélioration de la norme au sein d'une communauté. Nous aspirons à
            créer des compétitions qui donneront l'occasion aux programmeurs,
            développeurs et designers de tous niveaux de se tester et de se
            surpasser tout en concourant pour remporter des Prix prestigieux et,
            bien sûr, tout en s'amusant.😉. En bonus, attendez de voir notre
            concept " Scavenger Hunt "👾 !
            <br />
            <br />
            <span
              style={{
                backgroundColor: "#a9eff2",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              Bien plus à venir…⌛
            </span>
            <br />
            <br />
            <br />
            <Box className="title-container">
              <Box position={"relative"}>
                <Typography
                  className="title"
                  style={{ fontSize: "36px" }}
                  component={"span"}
                >
                  Les piliers
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
                de DevStyle
              </Typography>
            </Box>
          </Box>
          <br />
          <Grid container>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={GlobeIcon}
                alt="pillar icon"
                style={{ width: "64px" }}
              />
              <span style={{ fontWeight: 500 }}>Rassembler</span>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={AccountIcon}
                alt="pillar icon"
                style={{ width: "64px" }}
              />
              <span style={{ fontWeight: 500 }}>Dynamiser</span>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={ModuleIcon}
                alt="pillar icon"
                style={{ width: "64px" }}
              />
              <span style={{ fontWeight: 500 }}>Édifier</span>
            </Grid>
          </Grid>
          <br />
          <br />
          Rejoignez notre communauté{" "}
          <a
            href="/"
            // target="_blank"
            onClick={() => {
              analyticsEventTracker("SOCIAL")("discord");
            }}
          >
            Discord DevStyle
          </a>{" "}
          et échangez avec l'équipe et de nombreuses autres personnes qui
          partagent la même passion à un niveau personnel. Et surtout, n'oubliez
          pas de suivre nos comptes{" "}
          <a
            target="_blank"
            onClick={() => {
              analyticsEventTracker("SOCIAL")("twitter");
            }}
            rel="noopener noreferrer"
            href="https://twitter.com/_devstyle"
          >
            Twitter
          </a>
          ,{" "}
          <a
            target="_blank"
            onClick={() => {
              analyticsEventTracker("SOCIAL")("instagram");
            }}
            rel="noopener noreferrer"
            href="https://www.instagram.com/_devstyle/"
          >
            Instagram
          </a>{" "}
          et{" "}
          <a
            target="_blank"
            onClick={() => {
              analyticsEventTracker("SOCIAL")("facebook");
            }}
            rel="noopener noreferrer"
            href="https://www.facebook.com/devstyl"
          >
            Facebook
          </a>{" "}
          pour ne rien rater de nos nouveautés et de ce qui se passe dans la
          TT237😉.
        </Box>
      </Box>
      {/* <Grid xs={12} style={{ display: "flex", alignItems: "center" }} item>
        <img src={TeamImage} alt="devstyle team" style={{ width: "100%" }} />
      </Grid> */}
    </Box>
  );
};

export default About;
