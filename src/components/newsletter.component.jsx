import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import Spinner from "./spinner.component";
import EmailEmojiIcon from "../assets/icons/email-emoji.png";

import "./newsletter.styles.scss";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const subscribe = () => {
    setIsSubscribing(true);
    if (!email) {
      //TODO:ERROR TOAST
      setIsSubscribing(false);
    } else {
      //TODO:SUBSCRIBE TO NEWSLETTER
      setTimeout(() => {
        setEmail("");
        setIsSubscribing(false);
      }, 3000);
    }
  };
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
          Pour ne rater aucune de nos nouvelles sorties, événements et bien plus
          encore.
        </Typography>
        <Box className="email-wrapper">
          <input
            type="email"
            className="email-input"
            placeholder="Entrer votre [email]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="button"
            disabled={isSubscribing}
            onClick={() => subscribe()}
          >
            {isSubscribing ? (
              <Spinner size={25} thickness={3} color={"white"} />
            ) : (
              "S’Abonner"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Newsletter;
