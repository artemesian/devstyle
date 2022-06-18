import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import Helmet from "react-helmet";

import GoodieCard from "../components/goodieCard.component";
import GoodieCardSkeleton from "../components/goodieCardSkeleton.component";
import Spinner from "../components/spinner.component";

// import Image from "../assets/img/collection-preview/tshirt.png";
// import Tshirt from "../assets/img/tshirt.png";

import "./collection.styles.scss";
import { scrollToTop } from "../utils/utils.script";
import myAxios from "../utils/axios.config";

const Collection = () => {
  const match1000 = useMediaQuery("(max-width:1000px)");
  const params = useParams();
  const [isLoadingCollection, setIsLoadingCollection] = useState(true);
  const [collection, setCollection] = useState({
    collection: { colors: "#FFFFFF-#FFFFFF" },
  });
  let onAllGoodies = params.slug === "all-goodies";

  useEffect(() => {
    if (!onAllGoodies) {
      myAxios
        .get("/collection/goodies/" + params.slug)
        .then((response) => {
          if (response.status === 200) {
            setCollection(response.data.message);
            setIsLoadingCollection(false);
          } else {
            console.log(response.data.message);
            setCollection({});
            setIsLoadingCollection(false);
          }
        })
        .catch((error) => console.log(error));
    } else {
      myAxios
        .get("/goodie/all")
        .then((response) => {
          if (response.status === 200) {
            setCollection({
              collection: {
                colors: "#220f00-#220f00",
                title: "TOUS NOS GOODIES",
              },
              goodies: response.data.message,
            });
            setIsLoadingCollection(false);
          } else {
            console.log(response.data.message);
            setCollection({});
            setIsLoadingCollection(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [params.slug, onAllGoodies]);

  useEffect(() => {
    scrollToTop();
  }, []);

  useEffect(() => {
    if (!onAllGoodies) {
      myAxios
        .put("/collection/update/views/" + params.slug)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data.message);
          } else {
            console.log(response.data.message);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [params.slug, onAllGoodies]);

  return (
    <Box paddingX={match1000 ? 0 : 12}>
      <Helmet>
        <title>
          {" "}
          Collection {isLoadingCollection ? "" : collection.collection.title}
        </title>
        <meta
          name="description"
          content="Nous espérons vivement que lorsque votre ou vos articles favoris arriveront de la boutique, vous ressentirez le même esprit d'originalité et d'euphorie que nous🤗. #EtreDeveloppeurPlusQu'unMetierC'estUnStyleDeVie #devStyle #devAttitude"
        />
      </Helmet>
      <Outlet />
      <Box
        className="collection-hero-section-wrapper"
        style={{
          background: `linear-gradient(90deg, ${
            collection.collection.colors.split("-")[0]
          } 0%, ${collection.collection.colors.split("-")[1]} 100%)`,
        }}
        padding={10}
      >
        {isLoadingCollection ? (
          <Box
            height={"100%"}
            width={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Spinner size={100} thickness={10} color={"#220f0055"} />
          </Box>
        ) : (
          <Box className="collection-hero-section-container">
            <Typography
              className="text"
              style={{
                fontSize: match1000 ? "72px" : "96px",
                margin: onAllGoodies ? "auto" : "",
              }}
            >
              {collection.collection.title}
            </Typography>
            {collection?.collection?.image?.url && (
              <img
                src={collection.collection.image.url}
                alt="collection hero"
              />
            )}
          </Box>
        )}
      </Box>
      <Box className="goodies-container" marginY={20}>
        <Grid container spacing={5}>
          {isLoadingCollection ? (
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
            collection.goodies.map((goodie, i) => (
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
  );
};

export default Collection;
