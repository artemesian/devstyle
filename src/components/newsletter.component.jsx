import React from "react";
import { Box, Button, Typography } from "@mui/material";

import EmailEmojiIcon from "../assets/icons/email-emoji.png";

import "./newsletter.styles.scss";

const Newsletter = () => {
  return (
    <Box className="newsletter-wrapper" padding={5}>
      <Box className="newsletter-container">
        <Box className="title-container">
          <Typography className="title" component={"span"}>
            NE
          </Typography>
          <Box position={"relative"}>
            <Typography className="title" component={"span"}>
              WSLETTER
            </Typography>
            <hr
              style={{
                height: "6px",
                width: "100%",
                borderWidth: "0",
                color: "#FDAC42",
                backgroundColor: "#FDAC42",
                borderRadius: "20px",
                position: "absolute",
              }}
            />
          </Box>
          &nbsp; &nbsp;
          <img src={EmailEmojiIcon} alt="email icon" />
        </Box>
        <Typography className="text">
          Restez informer de nos nouvelles sorties, evenements et bien plus
          encore.
        </Typography>
        <Box className="email-wrapper">
          <input
            type="email"
            className="email-input"
            placeholder="Entrer votre [email]"
          />
          <Button className="button">S’Abonner</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
