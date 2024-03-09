import {
  CustomPaperBigCard,
  GlobalDisplayFlexBox,
  GlobalDisplayFlexColumnBox,
} from "@/styles/PublicStyles";
import { Grid, Typography, alpha, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

interface props {
  img: string;
  h1: string;
  p: string;
  rateNumber?: number;
}
const CardReview = ({ img, h1, p, rateNumber }: props) => {
  //  hooks
  const theme = useTheme();
  return (
    <Grid item xs={4}>
      <CustomPaperBigCard
        sx={{
          borderRadius: "12px",
          padding: "8px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <GlobalDisplayFlexBox sx={{ justifyContent: "flex-start", gap: "5px" }}>
          <Image src={img} alt="icon" width={24} height={24} loading="lazy"/>

          <GlobalDisplayFlexColumnBox>
            <GlobalDisplayFlexBox
              sx={{ justifyContent: "flex-start", gap: "4px" }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "700",
                  color: theme.palette.primary.dark,
                }}
              >
                {p}
              </Typography>

              {rateNumber && (
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "10px",
                    color: alpha(theme.palette.primary.dark, 0.3),
                  }}
                >
                  ( {rateNumber} )
                </Typography>
              )}
            </GlobalDisplayFlexBox>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "400",
                color: theme.palette.primary.main,
              }}
            >
              {h1}
            </Typography>
          </GlobalDisplayFlexColumnBox>
        </GlobalDisplayFlexBox>
      </CustomPaperBigCard>
    </Grid>
  );
};

export default CardReview;
