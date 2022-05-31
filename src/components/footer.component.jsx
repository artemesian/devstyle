import React, { useEffect, useState } from "react";
import { Box, Grid, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Spinner from "./spinner.component";

import WhatsappWhiteIcon from "../assets/icons/whatsapp-white.png";
import FacebookWhiteIcon from "../assets/icons/facebook-white.png";
import TwitterWhiteIcon from "../assets/icons/twitter-white.png";
import InstaWhiteIcon from "../assets/icons/insta-white.png";
import PhoneIcon from "../assets/icons/phone-white.png";
import EmailIcon from "../assets/icons/email.png";
import DevStyleWhite from "../assets/img/devstyle-white-logo.png";
import SalyFooter from "../assets/img/saly-footer.png";

import "./footer.styles.scss";
import { PARTNERS_SEEDER } from "../utils/seeders.data";

const Footer = () => {
  const [isLoadingPartners, setIsLoadingPartners] = useState(true);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      //TODO: LOAD PARTNERS
      setPartners(PARTNERS_SEEDER);
      setIsLoadingPartners(false);
    }, 3000);
  }, []);

  return (
    <Box className="footer-wrapper" position={"relative"}>
      <Box paddingX={10} paddingY={5}>
        <Grid container className="footer-container">
          <Grid item xs={12} lg={4}>
            <img
              src={DevStyleWhite}
              style={{ marginBottom: 20 }}
              alt="devstyle netcode logo"
              className="devstyle-netcode-logo"
            />
          </Grid>
          <Grid container item xs={12} lg={8} spacing={10}>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Nos pages</Typography>
              <Box className="footer-links-wrapper">
                <Link to="/">Accueil</Link>
                <Link
                  to="/#our-collections-section"
                  // onClick={() => {
                  //   try {
                  //     if (document.querySelector("#our-collections-section")) {
                  //       document
                  //         .querySelector("#our-collections-section")
                  //         .scrollIntoView(true);
                  //     }
                  //   } catch (error) {
                  //     console.log(error);
                  //   }
                  // }}
                >
                  Shop
                </Link>
                <Link to="/about-us">Qui sommes-Nous ?</Link>
                <Link to="/our-ambassadors">Nos Ambassadeurs</Link>
              </Box>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Nos partenaires</Typography>
              {isLoadingPartners ? (
                <Box className="footer-links-wrapper">
                  <Spinner size={25} thickness={3} color={"white"} />
                </Box>
              ) : (
                <Box
                  className="footer-links-wrapper"
                  style={{ flexDirection: "row" }}
                >
                  {partners.map((partner, index) => (
                    <a
                      key={index + "-" + partner.id}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ margin: "0 15px 15px 0" }}
                    >
                      <Tooltip title={partner.name}>
                        <img
                          src={partner.logo_white}
                          alt={partner.name}
                          style={{ height: "48px" }}
                        />
                      </Tooltip>
                    </a>
                  ))}
                </Box>
              )}
            </Grid>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Suivez nous</Typography>
              <Box className="footer-links-wrapper">
                <Box marginBottom={5}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/_devstyle"
                  >
                    <img src={TwitterWhiteIcon} alt="twitter icon" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=237692650993&text=Hello _DevStyle"
                  >
                    <img src={WhatsappWhiteIcon} alt="whatsapp icon" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/devstyl"
                  >
                    <img src={FacebookWhiteIcon} alt="facebook icon" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/_devstyle/"
                  >
                    <img src={InstaWhiteIcon} alt="insta icon" />
                  </a>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  marginTop={1}
                >
                  <img src={PhoneIcon} alt="phone icon" /> &nbsp;&nbsp;
                  <Box>
                    <a href="tel:+237692650993">(+237) 692 650 993</a>
                    <a href="tel:+237654456264"> / 654 456 264</a>
                  </Box>
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
        alt="saly footer"
        className="footer-image"
        style={{ position: "absolute", bottom: 0, left: 0 }}
      />
    </Box>
  );
};

export default Footer;
