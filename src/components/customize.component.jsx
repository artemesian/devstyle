import React from "react";
import { Grid, Button, Typography, useMediaQuery } from "@mui/material";

import VSCodeIcon from "../assets/icons/vscode.png";
import GithubIcon from "../assets/icons/github.png";
import Saly from "../assets/img/saly.png";

import "./customize.styles.scss";

const Customize = () => {
  const match = useMediaQuery("(max-width:900px)");

  return (
    <Grid container className="custom-section" id="custom-section">
      <Grid
        item
        xs={12}
        md={6}
        padding={8}
        className="info-box"
        bgcolor={"#FFC1BD"}
        alignItems={"flex-start"}
      >
        <Typography className="title">
          Obtenez des goodies sur mesure specialement fait pour vous !
        </Typography>
        <Typography className="text">
          Souhaitez-vous avoir un T-shirt super cool personnalisé avec un
          QR-code unique qui redirigera vers votre compte github 😏?
          <img src={GithubIcon} alt="github icon" /> avoir sur un T-shirt ou Mug
          vos meilleures lignes de code 😎?
          <img src={VSCodeIcon} alt="visual code icon" /> où toutes autres idées
          que vous avez en tête, une seul chose à faire...
        </Typography>
        <Button className="button">Contactez-Nous </Button>
      </Grid>
      {!match && <img src={Saly} alt="saly illustration" className="saly" />}
      <Grid
        item
        xs={12}
        md={6}
        padding={8}
        className="info-box"
        bgcolor={"#8FC8FF"}
        alignItems={"flex-end"}
        overflow={"hidden"}
        height={"500px"}
      >
        {match && (
          <img
            src={Saly}
            alt="saly illustration"
            style={{
              height: "600px",
              position: "absolute",
              left: -285,
              bottom: 0,
              transform: "rotateY(180deg)",
            }}
          />
        )}

        <Typography
          className="title"
          style={{ textAlign: "right", width: "80%" }}
        >
          Pour tout autre chose
        </Typography>
        <Typography className="text" style={{ textAlign: "right" }}>
          Discuter, partenariat, couverture d’evenements etc. N’hesitez pas..
        </Typography>
        <Button className="button">Contactez-Nous Ici</Button>
      </Grid>
    </Grid>
  );
};

export default Customize;
