import React from "react";
import Helmet from "react-helmet";
import ComingSoonVideo from "../assets/video/_DevStyle Coming Soon.mp4";
import TwitterIcon from "../assets/icons/twitter.png";
import FacebookIcon from "../assets/icons/facebook.png";
import InstaIcon from "../assets/icons/insta.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";

function ComingSoon() {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#220f00",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Helmet>
        <title> Coming Soon | Wait For It</title>
        <meta
          name="description"
          content="Une communauté de Techies pas comme les autres | LOADING..."
        />
      </Helmet>
      <video autoPlay controls loop width={"90%"}>
        <source src={ComingSoonVideo} type="video/mp4" />
      </video>
      <div style={{ position: "absolute", bottom: 100 }}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/_devstyle"
        >
          <img src={TwitterIcon} alt="twitter icon" />
        </a>
        &nbsp; &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send/?phone=695151114&text=Hello _DevStyle"
        >
          <img src={WhatsappIcon} alt="whatsapp icon" />
        </a>
        &nbsp; &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/devstyl"
        >
          <img src={FacebookIcon} alt="facebook icon" />
        </a>
        &nbsp; &nbsp;
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/_devstyle/"
        >
          <img src={InstaIcon} alt="insta icon" />
        </a>
      </div>
    </div>
  );
}

export default ComingSoon;
