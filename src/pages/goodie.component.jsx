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
import Helmet from "react-helmet";
import {
  ThumbUpTwoTone,
  RemoveRedEyeOutlined,
  ShareOutlined,
  Check,
} from "@mui/icons-material";
import { useLocation, useParams } from "react-router-dom";
import OrderModal from "../components/orderModal.component";
// import Cryptr from "cryptr";
import WhatsappIcon from "../assets/icons/whatsapp-green.png";
import "./goodie.styles.scss";

// import { GOODIE_SEEDER } from "../utils/seeders.data";
import { calculatePromoPrice, scrollToTop } from "../utils/utils.script";
import myAxios from "../utils/axios.config";
import GoodieCardSkeleton from "../components/goodieCardSkeleton.component";
import GoodieCard from "../components/goodieCard.component";

const Goodie = ({ addToCart }) => {
  const match700 = useMediaQuery("(max-width:700px)");
  const match900 = useMediaQuery("(max-width:900px)");
  const location = useLocation();
  const params = useParams();

  const [isLoadingGoodie, setIsLoadingGoodie] = useState(true);
  const [isLoadingSomeCollectionGoodies, setIsLoadingSomeCollectionGoodies] =
    useState(true);
  const [someCollectionGoodies, setSomeCollectionGoodies] = useState([]);
  const [isLiking, setIsLiking] = useState(false);
  const [goodie, setGoodie] = useState({
    quantity: 1,
    selectedColor: null,
    selectedSize: null,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  // const crypt = new Cryptr("HelloWorld");

  const changeMainImage = (image) => {
    if (image.url) {
      setGoodie({ ...goodie, mainImage: image });
    }
  };

  const handleQuantityChange = (newQty) => {
    if (newQty >= 0) {
      setGoodie({ ...goodie, quantity: Number(newQty) });
    }
  };

  const handleSelectedColorChange = (color) => {
    if (color) {
      setGoodie({ ...goodie, selectedColor: color });
    }
  };

  const handleSelectedSizeChange = (size) => {
    if (size) {
      setGoodie({ ...goodie, selectedSize: size });
    }
  };

  useEffect(() => {
    myAxios
      .get("/goodie/" + params.slug)
      .then((response) => {
        if (response.status === 200) {
          setGoodie({
            ...response.data.message,
            quantity: 1,
            selectedColor: response.data.message.availableColors[0],
            selectedSize: response.data.message.size[0].size,
          });
          setIsLoadingGoodie(false);

          myAxios
            .get(
              `/goodies/hot-goodies/collection/${response.data.message.fromCollection._id}/6291983220a1fdf5b8a280cf`
            )
            .then((response) => {
              if (response.status === 200) {
                // console.log(response.data.message);
                setSomeCollectionGoodies([...response.data.message]);
                setIsLoadingSomeCollectionGoodies(false);
              } else {
                console.log(response.data.message);
                setSomeCollectionGoodies([]);
                setIsLoadingSomeCollectionGoodies(false);
              }
            })
            .catch((error) => console.log(error));
        } else {
          console.log(response.data.message);
          setGoodie({});
          setIsLoadingGoodie(false);
        }
      })
      .catch((error) => console.log(error));
  }, [params.slug]);

  useEffect(() => {
    myAxios
      .put("/goodie/update/views/" + params.slug)
      .then((response) => {
        if (response.status === 200) {
          // console.log(response.data.message);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => console.log(error));
  }, [params.slug]);

  const _devstyle = () => {
    if (goodie._id) {
      let text = `
*ID:* ${goodie._id} ;
*Name:* ${goodie.name} ;
*Link:* https://dev-style.com/goodie/${goodie.slug} ;
*Collection:* ${goodie.fromCollection.title} ;
*MainImage:* ${goodie.mainImage.url} ;
*Color:* ${goodie.selectedColor} ;
*Size:* ${goodie.selectedSize} ;
*Quantity:* ${goodie.quantity} ;
*Price:* ${goodie.price} ;
*PromoPrice:* ${
        goodie.inPromo
          ? calculatePromoPrice(goodie.price, goodie.promoPercentage)
          : "none"
      } ;
*PromoPercent:* ${goodie.inPromo ? goodie.promoPercentage : "none"} ;    
`;

      return encodeURIComponent(text);
    }
  };

  const getCartID = () => {
    let text = ` ${goodie._id}-${goodie.name}-${goodie.fromCollection.title}-${
      goodie.selectedColor
    }-${goodie.selectedSize}-${goodie.price}-${
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

  const like = () => {
    myAxios
      .put("/goodie/update/likes/" + params.slug)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.message);
          setIsLiking(true);
        } else {
          console.log(response.data.message);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <React.Fragment>
      <Helmet pr>
        <title> Goodie {isLoadingGoodie ? "" : "- " + goodie.name}</title>
        <meta
          name="description"
          content={
            isLoadingGoodie
              ? "Un Goodie de chez _DevStyle, que pour des Techies"
              : `Un Goodie de chez _DevStyle | Collection: ${
                  goodie.fromCollection.title
                } Prix promo: ${
                  goodie.inPromo
                    ? calculatePromoPrice(goodie.price, goodie.promoPercentage)
                    : goodie.price
                } FCFA`
          }
        />
      </Helmet>
      <Box className="goodie-wrapper">
        <Box
          paddingX={match700 ? 3 : 12}
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
                flexDirection: match700 ? "column-reverse" : "row",
              }}
            >
              <Box
                className="goodie-preview-wrapper"
                style={
                  match700
                    ? { display: "flex", marginTop: 25, flexWrap: "wrap" }
                    : {}
                }
              >
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
                      key={"goodie-" + image.url + "-" + i}
                      className="goodie-preview-container"
                      style={{
                        backgroundColor: goodie.backgroundColors[i],
                        marginBottom: match700 ? 5 : 20,
                        marginRight: match700 ? 20 : 0,
                        border:
                          image.url === goodie.mainImage.url
                            ? "2px solid #000"
                            : "none",
                        borderRadius:
                          image.url === goodie.mainImage.url ? "4px" : "none",
                      }}
                      onClick={() => changeMainImage(image)}
                    >
                      <img src={image.url} alt="goodie" />
                    </Box>
                  ))
                )}
              </Box>
              {isLoadingGoodie ? (
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  height={600}
                  width={match700 ? "100%" : 500}
                  style={{ margin: match700 ? "0" : "0 25px" }}
                />
              ) : (
                <Box
                  className="goodie-image-wrapper"
                  style={
                    match700
                      ? {
                          backgroundColor:
                            goodie.backgroundColors[
                              goodie.images.findIndex(
                                (image) => image.url === goodie.mainImage.url
                              )
                            ],
                          width: "100%",
                          margin: "0",
                        }
                      : {
                          backgroundColor:
                            goodie.backgroundColors[
                              goodie.images.findIndex(
                                (image) => image.url === goodie.mainImage.url
                              )
                            ],
                        }
                  }
                >
                  {goodie.inPromo && (
                    <Box className="promotion-box">
                      -{goodie.promoPercentage}%
                    </Box>
                  )}
                  <img src={goodie.mainImage.url} alt="goodie" />
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
                  <a
                    href={"/collection/" + goodie?.fromCollection?.slug}
                    className="collection"
                  >
                    {isLoadingGoodie ? (
                      <Skeleton
                        animation="wave"
                        variant="text"
                        height={50}
                        width={"20%"}
                      />
                    ) : (
                      goodie.fromCollection.title
                    )}
                  </a>
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
                      width: "48px",
                      height: "48px",
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
                          key={"color-" + color + "-" + i}
                          className="color"
                          onClick={() => handleSelectedColorChange(color)}
                        >
                          <Box
                            style={{
                              backgroundColor: color,
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {goodie.selectedColor === color && (
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
                      goodie.size.map((size, i) => (
                        <ButtonBase
                          className="button"
                          onClick={() => handleSelectedSizeChange(size.size)}
                        >
                          <button
                            key={"size-" + size.id + "-" + i}
                            style={
                              goodie.selectedSize === size.size
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
                      goodie.views + 1
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
                  <IconButton
                    style={{ color: "#3E7BFA" }}
                    onClick={() => like()}
                  >
                    <ThumbUpTwoTone style={{ color: "#3E7BFA" }} />
                  </IconButton>
                  <ClickAwayListener onClickAway={() => setIsLiking(false)}>
                    <Tooltip
                      PopperProps={{
                        disablePortal: true,
                      }}
                      onClose={() => setIsLiking(false)}
                      open={isLiking}
                      disableFocusListener
                      disableHoverListener
                      disableTouchListener
                      title="+1 ❤️"
                      arrow
                      placement="bottom"
                    >
                      <Typography className="text" style={{ color: "#3E7BFA" }}>
                        J'aime
                      </Typography>
                    </Tooltip>
                  </ClickAwayListener>
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
          <Box className="goodies-container">
            <Box
              className="title-container"
              style={
                match700
                  ? { paddingTop: "75px", justifyContent: "center" }
                  : { paddingTop: "100px" }
              }
            >
              <Typography
                className="title"
                style={{ fontSize: match900 ? "30px" : "36px" }}
                component={"span"}
              >
                Toujour dans
              </Typography>
              &nbsp; &nbsp;
              <Box position={"relative"}>
                <Typography
                  className="title"
                  style={{ fontSize: "30px" }}
                  component={"span"}
                >
                  {goodie?.fromCollection?.title}
                </Typography>
                <hr
                  style={{
                    height: "6px",
                    width: "100%",
                    borderWidth: "0",
                    color: "#05A660",
                    backgroundColor: "#05A660",
                    borderRadius: "20px",
                    position: "absolute",
                  }}
                />
              </Box>
            </Box>
            <Grid container spacing={5}>
              {isLoadingSomeCollectionGoodies ? (
                <>
                  <Grid item xs={12} md={6} lg={4} xl={3}>
                    <GoodieCardSkeleton />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} xl={3}>
                    <GoodieCardSkeleton />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} xl={3}>
                    <GoodieCardSkeleton />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4} xl={3}>
                    <GoodieCardSkeleton />
                  </Grid>
                </>
              ) : (
                someCollectionGoodies.map((goodie, i) => (
                  <Grid
                    key={i + " " + goodie._id}
                    item
                    xs={12}
                    md={6}
                    lg={4}
                    xl={3}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <GoodieCard {...goodie} />
                  </Grid>
                ))
              )}
            </Grid>
          </Box>
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
