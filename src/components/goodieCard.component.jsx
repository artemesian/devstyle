import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { calculatePromoPrice } from "../utils/utils.script";
import "./goodieCard.styles.scss";

const GoodieCard = ({
  id,
  name,
  image,
  price,
  promoPercentage,
  inPromo,
  color,
  link,
}) => {
  return (
    <Box
      className="goodie-card-wrapper animate__animated animate__fadeIn"
      key={id}
    >
      <Link to={`/goodie/${link}`} style={{ textDecoration: "none" }}>
        <Box className="goodie-card-container">
          <Box className="top" padding={1.25} bgcolor={color}>
            {inPromo && <Box className="promo">-{promoPercentage}%</Box>}
            <img src={image} alt="goodie image" className="image" />
          </Box>
          <Box className="bottom" paddingX={2} paddingY={1}>
            <Typography className="name">{name}</Typography>
            <Box className="price-container">
              <Typography className="current-price">
                {calculatePromoPrice(price, promoPercentage)} FCFA
              </Typography>{" "}
              {inPromo && (
                <Typography
                  style={{ color: "#ff3b3b", textDecoration: "line-through" }}
                >
                  <Typography className="real-price">{price} FCFA</Typography>
                </Typography>
              )}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default GoodieCard;
