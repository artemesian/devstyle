import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  useMediaQuery,
  ButtonBase,
  Skeleton,
  Tooltip,
  ClickAwayListener,
} from "@mui/material";
import {
  ThumbUpTwoTone,
  RemoveRedEyeOutlined,
  ShareOutlined,
  Check,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";
import OrderModal from "../components/orderModal.component";
// import Cryptr from "cryptr";
import WhatsappIcon from "../assets/icons/whatsapp-green.png";
import "./goodie.styles.scss";

import { GOODIE_SEEDER } from "../utils/seeders.data";
import { calculatePromoPrice, scrollToTop } from "../utils/utils.script";

const Goodie = ({ addToCart }) => {
  const match700 = useMediaQuery("(max-width:700px)");
  const match900 = useMediaQuery("(max-width:900px)");
  const location = useLocation();

  const [isLoadingGoodie, setIsLoadingGoodie] = useState(true);
  const [goodie, setGoodie] = useState({
    ...GOODIE_SEEDER,
    quantity: 1,
    selectedColor: null,
    selectedSize: null,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // const crypt = new Cryptr("HelloWorld");

  const changeMainImage = (image) => {
    if (image.id) {
      setGoodie({ ...goodie, mainImage: image });
    }
  };

  const handleQuantityChange = (newQty) => {
    if (newQty >= 0) {
      setGoodie({ ...goodie, quantity: Number(newQty) });
    }
  };

  const handleSelectedColorChange = (color) => {
    if (color.id) {
      setGoodie({ ...goodie, selectedColor: color });
    }
  };

  const handleSelectedSizeChange = (size) => {
    if (size.id) {
      setGoodie({ ...goodie, selectedSize: size });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      //TODO: LOAD GOODIE
      setGoodie((goodie) => ({
        ...goodie,
        ...GOODIE_SEEDER,
        selectedColor: GOODIE_SEEDER.availableColors[0],
        selectedSize: GOODIE_SEEDER.sizes[0],
        quantity: 1,
      }));
      setIsLoadingGoodie(false);
    }, 3000);
  }, []);

  const _devstyle = () => {
    let text = `
    ID: ${goodie.id}
    Name: ${goodie.name}
    Link: https://dev-style.com/goodie/${goodie.slug}
    Collection: ${goodie.collection.name}
    MainImage: ${goodie.mainImage.image}
    Color: ${goodie.selectedColor.color}
    Size: ${goodie.selectedSize.size}
    Quantity: ${goodie.quantity}
    Price: ${goodie.price}
    PromoPrice: ${
      goodie.inPromo
        ? calculatePromoPrice(goodie.price, goodie.promoPercentage)
        : "none"
    }
    PromoPercent: ${goodie.inPromo ? goodie.promoPercentage : "none"}
    `;

    return text;
  };

  const getCartID = () => {
    let text = ` ${goodie.id}-${goodie.name}-${goodie.collection.name}-${
      goodie.selectedColor.color
    }-${goodie.selectedSize.size}-${goodie.price}-${
      goodie.inPromo
        ? calculatePromoPrice(goodie.price, goodie.promoPercentage)
        : "none"
    }`;
    // let encryptText = crypt.encrypt(text);
    return text;
  };

  const addToCartFromSellPage = () => {
    let cartID = getCartID();

    addToCart({ ...goodie, cartID });
  };

  const share = () => {
    setIsCopied(true);
    navigator.clipboard.writeText("https://dev-style.com" + location.pathname);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <React.Fragment>
      <Box className="goodie-wrapper">
        <Box
          paddingX={match700 ? 5 : 12}
          paddingY={5}
          style={{ width: "100%", height: "100%" }}
        >
          <Grid container style={{ width: "100%", height: "100%" }}>
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
                {isLoadingGoodie ? (
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    height={72}
                    width={72}
                  />
                ) : (
                  goodie.images.map((image, i) => (
                    <Box
                      key={"goodie-" + image.i + "-" + i}
                      className="goodie-preview-container"
                      style={{
                        backgroundColor: image.color,
                        marginBottom: 20,
                        border:
                          image.id === goodie.mainImage.id
                            ? "2px solid #000"
                            : "none",
                        borderRadius:
                          image.id === goodie.mainImage.id ? "4px" : "none",
                      }}
                      onClick={() => changeMainImage(image)}
                    >
                      <img src={image.image} alt="goodie" />
                    </Box>
                  ))
                )}
              </Box>
              {isLoadingGoodie ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={600}
                  width={500}
                  style={{ margin: "0 25px" }}
                />
              ) : (
                <Box
                  className="goodie-image-wrapper"
                  style={{ backgroundColor: goodie.mainImage.color }}
                >
                  {goodie.inPromo && (
                    <Box className="promotion-box">
                      -{goodie.promoPercentage}%
                    </Box>
                  )}
                  <img src={goodie.mainImage.image} alt="goodie" />
                </Box>
              )}
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
                    {isLoadingGoodie ? (
                      <Skeleton
                        animation="wave"
                        variant="text"
                        height={50}
                        width={"70%"}
                      />
                    ) : (
                      goodie.name
                    )}
                  </Typography>
                  <Typography className="collection">
                    {isLoadingGoodie ? (
                      <Skeleton
                        animation="wave"
                        variant="text"
                        height={50}
                        width={"20%"}
                      />
                    ) : (
                      goodie.collection.name
                    )}
                  </Typography>
                </Box>
                <Box className="price">
                  <Typography className="price">
                    {isLoadingGoodie ? (
                      <Skeleton
                        animation="wave"
                        variant="text"
                        height={35}
                        width={100}
                      />
                    ) : goodie.inPromo ? (
                      calculatePromoPrice(goodie.price, goodie.promoPercentage)
                    ) : (
                      goodie.price
                    )}{" "}
                    FCFA
                  </Typography>

                  <div
                    style={{
                      color: "#ff3b3b",
                      textDecoration: "line-through",
                    }}
                  >
                    {goodie.inPromo && (
                      <Typography className="promotion">
                        {goodie.price} FCFA
                      </Typography>
                    )}
                  </div>
                </Box>
                <Box className="quantity">
                  <Typography className="label">Quantité</Typography>
                  <TextField
                    variant="outlined"
                    size="small"
                    type={"number"}
                    style={{
                      width: "40px",
                      height: "40px",
                      textAlign: "center",
                    }}
                    value={goodie.quantity}
                    onChange={(e) => handleQuantityChange(e.target.value)}
                  />
                </Box>
                <Box className="colors">
                  <Typography className="label">
                    Disponible en couleur
                  </Typography>
                  <Box className="colors-wrapper">
                    {isLoadingGoodie ? (
                      <Skeleton
                        animation="wave"
                        variant="circular"
                        height={40}
                        width={40}
                      />
                    ) : (
                      goodie.availableColors.map((color, i) => (
                        <ButtonBase
                          key={"color-" + color.id + "-" + i}
                          className="color"
                          onClick={() => handleSelectedColorChange(color)}
                        >
                          <Box
                            style={{
                              backgroundColor: color.color,
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {goodie.selectedColor.id === color.id && (
                              <Check style={{ color: "white" }} />
                            )}
                          </Box>
                        </ButtonBase>
                      ))
                    )}
                  </Box>
                </Box>
                <Box className="size">
                  <Typography className="label">
                    Selectionner votre taille
                  </Typography>
                  <Box className="size-wrapper">
                    {isLoadingGoodie ? (
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={40}
                        width={40}
                      />
                    ) : (
                      goodie.sizes.map((size, i) => (
                        <ButtonBase
                          className="button"
                          onClick={() => handleSelectedSizeChange(size)}
                        >
                          <button
                            key={"size-" + size.id + "-" + i}
                            style={
                              goodie.selectedSize.id === size.id
                                ? {
                                    color: "#06C270",
                                    borderColor: "#06C270",
                                  }
                                : {}
                            }
                            className="button"
                          >
                            {size.size}
                          </button>
                        </ButtonBase>
                      ))
                    )}
                  </Box>
                </Box>
                <Grid container spacing={match900 ? 0 : 1} className="buttons">
                  <Grid item xs={12} md={6} style={{ width: "100%" }}>
                    <Button
                      style={{ backgroundColor: "#220F00", color: "white" }}
                      disabled={isLoadingGoodie}
                      onClick={() => setModalOpen(true)}
                    >
                      Commander maintenant(
                      <img src={WhatsappIcon} alt="whatsapp" />)
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ width: "100%" }}>
                    <Button
                      disabled={isLoadingGoodie}
                      onClick={addToCartFromSellPage}
                    >
                      Ajouter au panier()
                    </Button>
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
                  <Typography className="text">
                    {isLoadingGoodie ? (
                      <Skeleton animation="wave" variant="text" />
                    ) : (
                      goodie.views
                    )}{" "}
                    Vues
                  </Typography>
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
                <ClickAwayListener onClickAway={() => setIsCopied(false)}>
                  <Tooltip
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={() => setIsCopied(false)}
                    open={isCopied}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Copié dans le presse-papier"
                    arrow
                    placement="top"
                  >
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      marginTop={match900 ? "" : "auto"}
                    >
                      <IconButton onClick={() => share()}>
                        <ShareOutlined />
                      </IconButton>
                      <Typography className="text">Partager</Typography>
                    </Box>
                  </Tooltip>
                </ClickAwayListener>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <OrderModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        message={() => _devstyle()}
      />
    </React.Fragment>
  );
};

export default Goodie;
