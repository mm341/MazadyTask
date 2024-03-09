import {
  CustomGlobalTypography,
  CustomPaperBigCard,
  GlobalButton,
  GlobalDisplayFlexColumnBox,
} from "@/styles/PublicStyles";
import Image from "next/image";
import React from "react";
import profileImg from "../../../../public/homeImages/homeWomanProfile.png";
import { Grid, Typography, useTheme } from "@mui/material";
import CardReview from "./CardReview";
import followingImg from "../../../../public/homeImages/following.svg";
import followersImg from "../../../../public/homeImages/followers.svg";
import RateImg from "../../../../public/homeImages/magic-star.svg";
const TopCardPersonal = () => {
  //  hooks
  const theme = useTheme();
  return (
    <CustomPaperBigCard>
      <GlobalDisplayFlexColumnBox gap={"16px"}>
        {/*  img */}
        <Image
          src={profileImg}
          loading="lazy"
          alt="woman img"
          width={100}
          height={100}
        />
        <GlobalDisplayFlexColumnBox gap={"24px"}>
          <GlobalDisplayFlexColumnBox gap={"11px"}>
            <CustomGlobalTypography as={"h1"}>
              Hala Ahmed
            </CustomGlobalTypography>

            <Typography
              className="text-[14px] font-[400]"
              sx={{ color: theme.palette.secondary.dark }}
            >
              I am Hala Ahmed, I am the owner of the local brand called Beauty
              which is for Mackeup and Skin Care.
            </Typography>
          </GlobalDisplayFlexColumnBox>
          {/*  cards followers */}
          <Grid container spacing={2}>
            <CardReview img={followingImg} h1="Following" p="5" />
            <CardReview img={followersImg} h1="Followers" p="20" />
            <CardReview img={RateImg} h1="Rate" p="4.2" rateNumber={15} />
          </Grid>

          {/*  follow button */}
          <GlobalButton
            sx={{
              width: "100%",
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            Follow
          </GlobalButton>
        </GlobalDisplayFlexColumnBox>
      </GlobalDisplayFlexColumnBox>
    </CustomPaperBigCard>
  );
};

export default TopCardPersonal;
