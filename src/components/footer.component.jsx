import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import WhatsappWhiteIcon from "../assets/icons/whatsapp-white.png";
import FacebookWhiteIcon from "../assets/icons/facebook-white.png";
import TwitterWhiteIcon from "../assets/icons/twitter-white.png";
import InstaWhiteIcon from "../assets/icons/insta-white.png";
import PhoneIcon from "../assets/icons/phone-white.png";
import EmailIcon from "../assets/icons/email.png";
import DevStyleWhite from "../assets/img/devstyle-white-logo.png";
import SalyFooter from "../assets/img/saly-footer.png";
import Glom from "../assets/icons/glom.png";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <Box className="footer-wrapper" position={"relative"}>
      <Box paddingX={10} paddingY={5}>
        <Grid container className="footer-container">
          <Grid item xs={12} lg={4}>
            <img
              src={DevStyleWhite}
              alt="devstyle netcode logo"
              className="devstyle-netcode-logo"
            />
          </Grid>
          <Grid container item xs={12} lg={8} spacing={10}>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Nos pages</Typography>
              <Box className="footer-links-wrapper">
                <Link to="">Accueil</Link>
                <Link to="">Shop</Link>
                <Link to="">Contactez-Nous</Link>
                <Link to="">Qui sommes-Nous ?</Link>
                <Link to="">Nos Ambassadeurs</Link>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Nos partenaires</Typography>
              <Box className="footer-links-wrapper">
                <Link to="">
                  <img src={Glom} alt="glom icon" />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Suivez nous</Typography>
              <Box className="footer-links-wrapper">
                <Box marginBottom={5}>
                  <Link to="">
                    <img src={TwitterWhiteIcon} alt="twitter icon" />
                  </Link>
                  &nbsp; &nbsp;
                  <Link to="">
                    <img src={WhatsappWhiteIcon} alt="whatsapp icon" />
                  </Link>
                  &nbsp; &nbsp;
                  <Link to="">
                    <img src={InstaWhiteIcon} alt="instagram icon" />
                  </Link>
                  &nbsp; &nbsp;
                  <Link to="">
                    <img src={FacebookWhiteIcon} alt="facebook icon" />
                  </Link>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  marginTop={1}
                >
                  <img src={PhoneIcon} alt="phone icon" /> &nbsp;&nbsp;
                  <a href="tel:+237695151114">(+237) 695 151 114</a>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  marginTop={1}
                >
                  <img src={EmailIcon} alt="email icon" /> &nbsp;&nbsp;
                  <a href="mailto:contact.devstyle@gmail.com">
                    contact.devstyle@gmail.com
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="footer-copyright-text">Tous droits réservés © 2022</Box>
      <img
        src={SalyFooter}
        alt="saly footer image"
        className="footer-image"
        style={{ position: "absolute", bottom: 0, left: 0 }}
      />
    </Box>
  );
};

export default Footer;
