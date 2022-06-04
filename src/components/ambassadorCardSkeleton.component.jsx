import React from "react";
import { Box, Skeleton } from "@mui/material";

const AmbassadorCardSkeleton = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Skeleton
        variant="retangular"
        animation="wave"
        height={325}
        width={285}
      />
      <Skeleton variant="text" animation="wave" height={30} width={"60%"} />
      <Skeleton variant="text" animation="wave" height={65} width={65} />
    </Box>
  );
};

export default AmbassadorCardSkeleton;
