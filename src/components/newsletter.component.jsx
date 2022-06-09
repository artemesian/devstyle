import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { toast } from "react-toastify";

import Spinner from "./spinner.component";
import EmailEmojiIcon from "../assets/icons/email-emoji.png";

import "./newsletter.styles.scss";
import myAxios from "../utils/axios.config";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);

  const subscribe = () => {
    setIsSubscribing(true);
    if (!email) {
      toast.error(
        <div style={{ color: "#fff" }}> Entrer une email valide</div>,
        {
          style: { textAlign: "center" },
        }
      );
      setIsSubscribing(false);
    } else {
      myAxios
        .post("/newsletter/save", { email: email })
        .then((response) => {
          if (response.status === 200) {
            toast.success(
              <div style={{ color: "#fff" }}>Bienvenue à bord 🎉</div>,
              {
                style: { textAlign: "center" },
              }
            );
            console.log(response.data.message);
          } else {
            toast.info(
              <div style={{ color: "#fff" }}>
                Vous êtes déjà l'un des nôtres 😉
              </div>,
              {
                style: { textAlign: "center" },
              }
            );
            console.log(response.data.message);
          }
        })
        .catch((error) => {
          if (error.status === 500) {
            console.log("hello checked");
          }
          toast.info(
            <div style={{ color: "#fff" }}>
              Vous êtes déjà l'un des nôtres 😉
            </div>,
            {
              style: { textAlign: "center" },
            }
          );
          console.log(error);
        })
        .finally(() => {
          setEmail("");
          setIsSubscribing(false);
        });
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
