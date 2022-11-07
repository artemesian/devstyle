import React, { useEffect, useState } from "react";
import { Box, Grid, Tooltip, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import Spinner from "./spinner.component";

import WhatsappWhiteIcon from "../assets/icons/whatsapp-white.png";
import FacebookWhiteIcon from "../assets/icons/facebook-white.png";
import TwitterWhiteIcon from "../assets/icons/twitter-white.png";
import InstaWhiteIcon from "../assets/icons/insta-white.png";
import TiktokWhiteIcon from "../assets/icons/tiktok-white.png";
import PhoneIcon from "../assets/icons/phone-white.png";
import EmailIcon from "../assets/icons/email.png";
import DevStyleWhite from "../assets/img/devstyle-white-logo.png";
import SalyFooter from "../assets/img/saly-footer.png";

import "./footer.styles.scss";
import myAxios from "../utils/axios.config";
import { analyticsEventTracker } from "../app";

const Footer = () => {
  const [isLoadingPartners, setIsLoadingPartners] = useState(true);
  const [partners, setPartners] = useState([]);

  const match900 = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    myAxios
      .get("/partner/all")
      .then((response) => {
        if (response.status === 200) {
          setPartners(response.data.message);
        } else {
          console.log(response.data.message);
          setPartners([]);
        }
      })
      .catch((error) => {
        toast.error(<div style={{ color: "#fff" }}>{error.message}</div>, {
          icon: "🌐",
          style: { textAlign: "center" },
        });
        console.log(error);
      })
      .finally(() => setIsLoadingPartners(false));
  }, []);

  return (
    <Box className="footer-wrapper" position={"relative"}>
      <Box paddingX={match900 ? 5 : 10} paddingY={5}>
        <Grid container className="footer-container">
          <Grid item xs={12} lg={4}>
            <img
              src={DevStyleWhite}
              style={{ marginBottom: 40 }}
              alt="devstyle netcode logo"
              className="devstyle-netcode-logo"
            />
          </Grid>
          <Grid container item xs={12} lg={8}>
            <Grid item xs={12} lg={4}>
              <Typography className="footer-title">Nos pages</Typography>
              <Box className="footer-links-wrapper">
                <Link to="/">Accueil</Link>
                <Link
                  to="/#our-collections-section"
                  onClick={() => {
                    try {
                      if (document.querySelector("#our-collections-section")) {
                        document
                          .querySelector("#our-collections-section")
                          .scrollIntoView(true);
                      }
                    } catch (error) {
                      console.log(error);
                    }
                  }}
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
                      key={index + "-" + partner._id}
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ margin: "0 15px 15px 0" }}
                    >
                      <Tooltip title={partner.name}>
                        <img
                          src={partner.logoWhite.url}
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
                    onClick={() => {
                      analyticsEventTracker("SOCIAL")("twitter");
                    }}
                    rel="noopener noreferrer"
                    href="https://twitter.com/_devstyle"
                  >
                    <img src={TwitterWhiteIcon} alt="twitter icon" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    onClick={() => {
                      analyticsEventTracker("SOCIAL")("whatsapp");
                    }}
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send/?phone=237692650993&text=Hello _DevStyle"
                  >
                    <img src={WhatsappWhiteIcon} alt="whatsapp icon" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    onClick={() => {
                      analyticsEventTracker("SOCIAL")("facebook");
                    }}
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/devstyl"
                  >
                    <img src={FacebookWhiteIcon} alt="facebook icon" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    onClick={() => {
                      analyticsEventTracker("SOCIAL")("instagram");
                    }}
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/_devstyle/"
                  >
                    <img src={InstaWhiteIcon} alt="insta icon" />
                  </a>
                  &nbsp; &nbsp;
                  <a
                    target="_blank"
                    onClick={() => {
                      analyticsEventTracker("SOCIAL")("tiktok");
                    }}
                    rel="noopener noreferrer"
                    href="https://www.tiktok.com/@_devstyle"
                  >
                    <img src={TiktokWhiteIcon} alt="tiktok icon" />
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
                    <a
                      href="tel:+237692650993"
                      onClick={() => {
                        analyticsEventTracker("CONTACT")("Orange Number");
                      }}
                    >
                      (+237) 692 650 993
                    </a>
                    <a
                      href="tel:+237654456264"
                      onClick={() => {
                        analyticsEventTracker("CONTACT")("Mtn Number");
                      }}
                    >
                      {" "}
                      / 654 456 264
                    </a>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"center"}
                  marginTop={1}
                >
                  <img src={EmailIcon} alt="email icon" /> &nbsp;&nbsp;
                  <a
                    href="mailto:contact.devstyle@gmail.com"
                    onClick={() => {
                      analyticsEventTracker("CONTACT")("Email");
                    }}
                  >
                    contact.devstyle@gmail.com
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box className="footer-copyright-text">
        Tous droits réservés © {new Date().getFullYear()}
      </Box>
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
