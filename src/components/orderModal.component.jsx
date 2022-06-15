import * as React from "react";
import { Box, Typography, Modal, Button, Divider } from "@mui/material";
import { toast } from "react-toastify";

import Spinner from "./spinner.component";

import myAxios from "../utils/axios.config";

import "./orderModal.styles.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 410,
  bgcolor: "#220f00",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "15px",
  p: 4,
};

const OrderModal = ({ open, handleClose, message = () => "" }) => {
  const [number, setNumber] = React.useState(null);
  const [isSending, setIsSending] = React.useState(false);

  const send = () => {
    setIsSending(true);
    if (!number || String(number).length < 9) {
      toast.error(
        <div style={{ color: "#fff" }}>
          {" "}
          Entrer un numéro valide: 6xxxxxxxx{" "}
        </div>,
        {
          style: { textAlign: "center" },
        }
      );
      setIsSending(false);
    } else {
      myAxios
        .post("/order/create", {
          number,
          description: `%0A%60%60%60%3C%20MA%20COMMANDE%20%2F%3E%60%60%60%F0%9F%9B%92%0A${message()}%5B%20%C3%A0%20ne%20pas%20supprimer%F0%9F%91%86%F0%9F%8F%BD%20%5D`,
        })
        .then((response) => {
          if (response.status === 200) {
            window.localStorage.setItem(
              "_devStyle-order-number",
              String(number)
                .split("")
                .reduce(
                  (acc, val, i) =>
                    (acc += String.fromCharCode(val.charCodeAt() + 3)),
                  ""
                )
            );
            toast.success(
              <div style={{ color: "#fff" }}>Commande bien reçu</div>,
              {
                style: { textAlign: "center" },
                icon: "🎉",
              }
            );
            // console.log(response.data.message);
          } else {
            toast.erreur(
              <div style={{ color: "#fff" }}>Une erreur est survenu</div>,
              {
                style: { textAlign: "center" },
              }
            );
            console.log(response.data.message);
          }
        })
        .catch((error) => {
          toast.erreur(
            <div style={{ color: "#fff" }}>
              Une erreur est survenu, réessayer
            </div>,
            {
              style: { textAlign: "center" },
              icon: "😕",
            }
          );
          console.log(error);
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  const contact = () => {
    window
      .open(
        `https://api.whatsapp.com/send/?phone=237692650993&text=%0A%60%60%60%3C%20MA%20COMMANDE%20%2F%3E%60%60%60%F0%9F%9B%92%0A${
          message() ?? ""
        }%5B%20%C3%A0%20ne%20pas%20supprimer%F0%9F%91%86%F0%9F%8F%BD%20%5D`,
        "_blank"
      )
      .focus();
  };
  React.useEffect(() => {
    let localNumber = window.localStorage.getItem("_devStyle-order-number");
    if (localNumber) {
      setNumber(
        Number(
          String(localNumber)
            .split("")
            .reduce(
              (acc, val, i) =>
                (acc += String.fromCharCode(val.charCodeAt() - 3)),
              ""
            )
        )
      );
    }
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="order-modal-container">
          <Typography
            className="order-modal-title"
            variant="h6"
            component="h2"
            style={{ fontWeight: "400" }}
          >
            {"< Commander Maintenant🛒 />"}
          </Typography>
          <Box>
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                width: "100%",
                padding: "10px 0",
              }}
            >
              Es-tu sur Telephone ou as tu Whatsapp web ouvert ?
            </p>
            <Button
              className="button-direct"
              onClick={() => contact()}
              disabled={isSending}
            >
              Allons-y sur whatsapp
            </Button>
            <Divider
              light={false}
              style={{ fontSize: "12px", margin: "18px 0" }}
            >
              Sinon
            </Divider>
            <p
              style={{
                fontSize: "12px",
                textAlign: "center",
                width: "100%",
                paddingBottom: "10px",
              }}
            >
              Laisse ton numéro, on te contact juste après
            </p>
            <input
              id="whatsapp-number"
              placeholder="Numéro whatsapp valide"
              type={"number"}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <Button
              className="button"
              onClick={() => send()}
              disabled={isSending}
            >
              {isSending ? (
                <Spinner size={25} thickness={3} color={"white"} />
              ) : (
                "Contactez moi sur whatsapp"
              )}
            </Button>
            <p style={{ textAlign: "center", paddingTop: "25px" }}>
              Dans tous les cas, retrouvons nous de l'autre côté😜
            </p>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default OrderModal;
