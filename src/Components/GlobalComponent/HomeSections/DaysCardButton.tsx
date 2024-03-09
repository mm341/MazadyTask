import { GlobalButton, GlobalDisplayFlexBox } from "@/styles/PublicStyles";
import { Typography, useTheme } from "@mui/material";
import React from "react";

const DaysCardButton = ({ number, h1 }: { number: number; h1: string }) => {
  //  hooks
  const theme = useTheme();
  return (
    <GlobalButton
      bg={theme.palette.background.default}
      sx={{
        width: { md: "105px", xs: "62px" },
        height: { md: "40px", xs: "28px" },
      }}
    >
      <GlobalDisplayFlexBox sx={{ justifyContent: "center" }} gap={"5px"}>
        <Typography
          sx={{
            fontSize: { md: "20px", xs: "12px" },
            fontWeight: "700",
            color: theme.palette.primary.main,
          }}
        >
          {number}
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "14px", xs: "8px" },
            fontWeight: "700",
            color: theme.palette.primary.main,
          }}
        >
          {h1}
        </Typography>
      </GlobalDisplayFlexBox>
    </GlobalButton>
  );
};

export default DaysCardButton;
