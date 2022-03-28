import React from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import {
  ThumbUpTwoTone,
  RemoveRedEyeOutlined,
  ShareOutlined,
  Check,
} from "@mui/icons-material";
import Tshirt from "../assets/img/tshirt.png";
import WhatsappIcon from "../assets/icons/whatsapp-green.png";
import "./goodie.styles.scss";

const Goodie = () => {
  return (
    <Box className="goodie-wrapper">
      <Box paddingX={12} paddingY={5} style={{ width: "100%", height: "100%" }}>
        <Grid container spacing={2} style={{ width: "100%", height: "100%" }}>
          <Grid
            item
            xs={12}
            lg={5}
            style={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Box className="goodie-preview-wrapper">
              <Box
                className="goodie-preview-container"
                style={{ backgroundColor: "#E3FFF1", marginBottom: 20 }}
              >
                <img src={Tshirt} alt="goodie image" />
              </Box>
              <Box
                className="goodie-preview-container"
                style={{ backgroundColor: "#E3FFF1", marginBottom: 20 }}
              >
                <img src={Tshirt} alt="goodie image" />
              </Box>
              <Box
                className="goodie-preview-container"
                style={{ backgroundColor: "#E3FFF1", marginBottom: 20 }}
              >
                <img src={Tshirt} alt="goodie image" />
              </Box>
            </Box>
            <Box
              className="goodie-image-wrapper"
              style={{ backgroundColor: "#CCDDFF" }}
            >
              <Box className="promotion-box">-23%</Box>
              <img src={Tshirt} alt="goodie image" />
            </Box>
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={7}
            display={"flex"}
            justifyContent={"space-between"}
            className="goodie-description"
          >
            <Grid
              item
              xs={12}
              md={10}
              className="description"
              style={{ width: "100%" }}
            >
              <Box className="title">
                <Typography className="text">
                  Linux gives you the whole house
                </Typography>
                <Typography className="collection">T-Shirt</Typography>
              </Box>
              <Box className="price">
                <Typography className="price">5000 FCFA</Typography>
                <div
                  style={{
                    color: "#ff3b3b",
                    textDecoration: "line-through",
                  }}
                >
                  <Typography className="promotion">6500 FCFA</Typography>
                </div>
              </Box>
              <Box className="quantity">
                <Typography className="label">Quantité</Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  type={"number"}
                  style={{ width: "40px", height: "40px", textAlign: "center" }}
                />
              </Box>
              <Box className="colors">
                <Typography className="label">Disponible en couleur</Typography>
                <Box className="colors-wrapper">
                  <Box className="color" style={{ backgroundColor: "#5b8def" }}>
                    <Check style={{ color: "white" }} />
                  </Box>
                  <Box className="color" style={{ backgroundColor: "#5b8def" }}>
                    <Check style={{ color: "white" }} />
                  </Box>
                  <Box className="color" style={{ backgroundColor: "#5b8def" }}>
                    <Check style={{ color: "white" }} />
                  </Box>
                </Box>
              </Box>
              <Box className="size">
                <Typography className="label">
                  Selectionner votre taille
                </Typography>
                <Box className="size-wrapper">
                  <button>S</button>
                  <button style={{ color: "#06C270", borderColor: "#06C270" }}>
                    M
                  </button>
                </Box>
              </Box>
              <Grid container spacing={2} className="buttons">
                <Grid item xs={12} md={6} style={{ width: "100%" }}>
                  <Button
                    style={{ backgroundColor: "#220F00", color: "white" }}
                  >
                    Commander(
                    <img src={WhatsappIcon} />)
                  </Button>
                </Grid>
                <Grid item xs={12} md={6} style={{ width: "100%" }}>
                  <Button>Ajouter au panier()</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={2}
              className="actions"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                height: "100%",
                width: "auto",
                minWidth: "80px",
              }}
            >
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                marginBottom={1}
                justifyContent={"center"}
              >
                <RemoveRedEyeOutlined />
                <Typography className="text">867 Vues</Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                marginBottom={1}
                justifyContent={"center"}
              >
                <IconButton style={{ color: "#3E7BFA" }}>
                  <ThumbUpTwoTone style={{ color: "#3E7BFA" }} />
                </IconButton>
                <Typography className="text" style={{ color: "#3E7BFA" }}>
                  J'aime
                </Typography>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                marginTop={"auto"}
              >
                <IconButton>
                  <ShareOutlined />
                </IconButton>
                <Typography className="text">Partager</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Goodie;
