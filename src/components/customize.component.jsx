import React from "react";
import { Grid, Button, Typography, useMediaQuery } from "@mui/material";

import VSCodeIcon from "../assets/icons/vscode.png";
import GithubIcon from "../assets/icons/github.png";
import Saly from "../assets/img/saly.png";

import "./customize.styles.scss";
import { analyticsEventTracker } from "../app";

const Customize = () => {
  const match900 = useMediaQuery("(max-width:900px)");

  const contactForCustomGoodie = () => {
    analyticsEventTracker("CONTACT")("contact for custom goodie");
    window
      .open(
        encodeURIComponent(
          `https://api.whatsapp.com/send/?phone=237692650993&text=${`*#CustomGoodie*📌

        Hello _DevStyle

        `}`
        ),
        "_blank"
      )
      .focus();
  };

  const contactForPartnership = () => {
    analyticsEventTracker("CONTACT")("contact for partnership");
    window
      .open(
        encodeURIComponent(
          `https://api.whatsapp.com/send/?phone=237692650993&text=${`*#Partnership*📌

      Hello _DevStyle

      `}`
        ),
        "_blank"
      )
      .focus();
  };

  return (
    <Grid container className="custom-section" id="custom-section">
      <Grid
        item
        xs={12}
        md={6}
        paddingY={8}
        paddingX={match900 ? 4 : 8}
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
        <Button className="button" onClick={() => contactForCustomGoodie()}>
          Contactez-Nous{" "}
        </Button>
      </Grid>
      {!match900 && <img src={Saly} alt="saly illustration" className="saly" />}
      <Grid
        item
        xs={12}
        md={6}
        paddingY={8}
        paddingX={match900 ? 4 : 8}
        className="info-box"
        bgcolor={"#8FC8FF"}
        alignItems={"flex-end"}
        overflow={"hidden"}
        height={"500px"}
      >
        {match900 && (
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
          Discuter, partenariat, couverture d’événements etc. N’hesitez pas..
        </Typography>
        <Button className="button" onClick={() => contactForPartnership()}>
          Contactez-Nous Ici
        </Button>
      </Grid>
    </Grid>
  );
};

export default Customize;
