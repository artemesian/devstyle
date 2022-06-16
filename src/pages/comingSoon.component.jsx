import React from "react";
import ComingSoonVideo from "../assets/video/_DevStyle Coming Soon.mp4";
import TwitterIcon from "../assets/icons/twitter.png";
import FacebookIcon from "../assets/icons/facebook.png";
import InstaIcon from "../assets/icons/insta.png";
import TiktokWhiteIcon from "../assets/icons/tiktok-white.png";
import WhatsappIcon from "../assets/icons/whatsapp.png";
import { analyticsEventTracker } from "../app";

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
      <video autoPlay controls loop width={"90%"}>
        <source src={ComingSoonVideo} type="video/mp4" />
      </video>
      <div style={{ position: "absolute", bottom: 100 }}>
        <a
          onClick={() => {
            analyticsEventTracker("SOCIAL-IN-COMING-SOON")("twitter");
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/_devstyle"
        >
          <img src={TwitterIcon} alt="twitter icon" />
        </a>
        &nbsp; &nbsp;
        <a
          onClick={() => {
            analyticsEventTracker("SOCIAL-IN-COMING-SOON")("whatsapp");
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send/?phone=695151114&text=Hello _DevStyle"
        >
          <img src={WhatsappIcon} alt="whatsapp icon" />
        </a>
        &nbsp; &nbsp;
        <a
          onClick={() => {
            analyticsEventTracker("SOCIAL-IN-COMING-SOON")("tiktok");
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.tiktok.com/@_devstyle"
        >
          <img src={TiktokWhiteIcon} alt="tiktok icon" />
        </a>
        &nbsp; &nbsp;
        <a
          onClick={() => {
            analyticsEventTracker("SOCIAL-IN-COMING-SOON")("facebook");
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/devstyl"
        >
          <img src={FacebookIcon} alt="facebook icon" />
        </a>
        &nbsp; &nbsp;
        <a
          onClick={() => {
            analyticsEventTracker("SOCIAL-IN-COMING-SOON")("instagram");
          }}
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
