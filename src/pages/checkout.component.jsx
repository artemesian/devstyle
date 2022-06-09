import React, { Fragment, useEffect, useState } from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  DeleteForeverOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

import WhatsappIcon from "../assets/icons/whatsapp-green.png";

import "./checkout.styles.scss";

import { calculatePromoPrice, scrollToTop } from "../utils/utils.script";
import OrderModal from "../components/orderModal.component";

const Checkout = ({ cart, deleteFromCart, getTotalPrice, updateCart }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const createData = (
    image,
    name,
    collection,
    color,
    size,
    unitPrice,
    quantity,
    actions
  ) => {
    return {
      image,
      name,
      collection,
      color,
      size,
      unitPrice,
      quantity,
      actions,
    };
  };

  const rows = Object.values(cart).map((goodie, i) =>
    createData(
      <Box
        bgcolor={
          goodie.backgroundColors[
            goodie.images.findIndex(
              (image) => image.url === goodie.mainImage.url
            )
          ] ?? goodie.backgroundColors[0]
        }
        height="144px"
        width="144px"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link
          to={"/goodie/" + goodie.slug}
          style={{
            textDecoration: "none",
            height: "75%",
          }}
        >
          <img
            src={
              // goodie.images.find(
              //   (image) => image.id === goodie.selectedColor.id
              // ).image ?? goodie.mainImage.image
              goodie.mainImage.url
            }
            alt="goodie"
            style={{ height: "100%" }}
          />
        </Link>
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>
        <Link
          to={"/goodie/" + goodie.slug}
          style={{
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          {goodie.name}
        </Link>
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>
        {goodie.fromCollection.title}
      </Box>,
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            background: goodie.selectedColor,
            height: "24px",
            width: "24px",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>
        {goodie.selectedSize}
      </Box>,
      <Typography style={{ fontWeight: "600", fontFamily: "Poppins" }}>
        {goodie.inPromo
          ? calculatePromoPrice(goodie.price, goodie.promoPercentage)
          : goodie.price}{" "}
        FCFA
      </Typography>,
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "normal",
          fontFamily: "Poppins",
        }}
      >
        <IconButton onClick={() => updateCart(goodie, -1)}>
          <ArrowBackIos />
        </IconButton>
        {goodie.quantity}
        <IconButton onClick={() => updateCart(goodie, +1)}>
          <ArrowForwardIos />
        </IconButton>
      </Box>,
      <Box>
        {/* <IconButton>
          <EditOutlined />
        </IconButton> */}
        <IconButton onClick={() => deleteFromCart(goodie.cartID)}>
          <DeleteForeverOutlined />
        </IconButton>
      </Box>
    )
  );

  const _devstyle = () => {
    const cartDescription = Object.values(cart).reduce((acc, goodie, i) => {
      return (acc += `
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
        
        ------------------------------------
        
        `);
    }, "");

    return cartDescription;
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Fragment>
      <Box className="checkout-wrapper" paddingX={12}>
        <Typography className="title">{"< Panier />"}</Typography>
        <Box className="checkout-container">
          <TableContainer>
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                  >
                    Goodie
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                  >
                    Nom
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                  >
                    Collection
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                  >
                    Couleur
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                  >
                    Taille
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                  >
                    Prix unitaire
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                  >
                    Quantité
                  </TableCell>
                  <TableCell
                    align="right"
                    style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                  >
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "normal", fontFamily: "Poppins" }}
                    >
                      {row.image}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.collection}</TableCell>
                    <TableCell align="center">{row.color}</TableCell>
                    <TableCell align="center">{row.size}</TableCell>
                    <TableCell align="center">{row.unitPrice}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="right">{row.actions}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems="center"
          marginY={1}
          marginLeft={"auto"}
        >
          <Typography style={{ fontSize: "20px", fontWeight: "500" }}>
            Total:
          </Typography>
          &nbsp; &nbsp; &nbsp;
          <Typography style={{ fontSize: "36px", fontWeight: "bold" }}>
            {getTotalPrice() ?? 0} FCFA
          </Typography>
        </Box>
        <Button
          className="button"
          style={{ backgroundColor: "#220F00", color: "white" }}
          onClick={() => (getTotalPrice() ? setModalOpen(true) : null)}
        >
          Commander(
          <img src={WhatsappIcon} alt="whatsapp" />)
        </Button>
      </Box>
      <OrderModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        message={() => _devstyle()}
      />
    </Fragment>
  );
};

export default Checkout;
