import React from "react";
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

import Tshirt from "../assets/img/tshirt.png";
import WhatsappIcon from "../assets/icons/whatsapp-green.png";

import "./checkout.styles.scss";
import {
  ArrowBackIos,
  ArrowForwardIos,
  DeleteForeverOutlined,
  EditOutlined,
} from "@mui/icons-material";

const Checkout = () => {
  function createData(
    image,
    name,
    collection,
    color,
    size,
    unitPrice,
    quantity,
    actions
  ) {
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
  }

  const rows = [
    createData(
      <Box
        bgcolor={"#C7C9D9"}
        height="144px"
        width="144px"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img src={Tshirt} alt="goodie image" style={{ height: "75%" }} />
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>
        Linux is the whole House
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>
        T-Shirts
      </Box>,
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            background: "#00B7C4",
            height: "24px",
            width: "24px",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>2XL</Box>,
      <Typography style={{ fontWeight: "600", fontFamily: "Poppins" }}>
        5000 FCFA
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
        <IconButton>
          <ArrowBackIos />
        </IconButton>
        2
        <IconButton>
          <ArrowForwardIos />
        </IconButton>
      </Box>,
      <Box>
        <IconButton>
          <EditOutlined />
        </IconButton>
        <IconButton>
          <DeleteForeverOutlined />
        </IconButton>
      </Box>
    ),
    createData(
      <Box
        bgcolor={"#C7C9D9"}
        height="144px"
        width="144px"
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <img src={Tshirt} alt="goodie image" style={{ height: "75%" }} />
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>
        Linux is the whole House
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>
        T-Shirts
      </Box>,
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            background: "#00B7C4",
            height: "24px",
            width: "24px",
            borderRadius: "50%",
          }}
        ></Box>
      </Box>,
      <Box style={{ fontWeight: "normal", fontFamily: "Poppins" }}>2XL</Box>,
      <Typography style={{ fontWeight: "600", fontFamily: "Poppins" }}>
        5000 FCFA
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
        <IconButton>
          <ArrowBackIos />
        </IconButton>
        2
        <IconButton>
          <ArrowForwardIos />
        </IconButton>
      </Box>,
      <Box>
        <IconButton>
          <EditOutlined />
        </IconButton>
        <IconButton>
          <DeleteForeverOutlined />
        </IconButton>
      </Box>
    ),
  ];
  return (
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
      <Button
        className="button"
        style={{ backgroundColor: "#220F00", color: "white" }}
      >
        Commander(
        <img src={WhatsappIcon} />)
      </Button>
    </Box>
  );
};

export default Checkout;
