import React from "react";
import { Box, Skeleton } from "@mui/material";

const GoodieCardSkeleton = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Skeleton
        variant="retangular"
        animation="wave"
        height={325}
        width={285}
      />
      <Skeleton variant="text" animation="wave" height={30} width={"60%"} />
      <Skeleton variant="text" animation="wave" height={40} width={"40%"} />
    </Box>
  );
};

export default GoodieCardSkeleton;
