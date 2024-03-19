import {
  CustomGlobalTypography,
  CustomTypography,
  GlobalDisplayFlexBox,
  GlobalDisplayFlexColumnBox,
} from "@/styles/PublicStyles";
import { Stack, Typography } from "@mui/material";
import React from "react";
import logoImg from "../../../../public/homeImages/logo.svg";
import QrImg from "../../../../public/homeImages/World-Static.png";
import Image from "next/image";
const QRsection = () => {
  return (
    <Stack
      sx={{
        background: "linear-gradient(90deg, #D20653 0%, #FF951D 100%)",
        borderRadius: "21px",
        py: "23px",
      }}
    >
      <GlobalDisplayFlexBox
        sx={{
          width: "87%",
          py: "32px",
          mx: "auto",
          justifyContent: "center",
          backgroundColor: "white",
          borderRadius: "21px",
        }}
      >
        <GlobalDisplayFlexColumnBox gap={"8px"}>
          {/*  logo */}
          {/* <Image
          src={logoImg}
          alt="logo"
          width={152}
          height={48}
          loading="lazy"
        /> */}
          <p>logo</p>
          {/*  qr code */}
          <GlobalDisplayFlexColumnBox>
            <CustomGlobalTypography sx={{ color: "#363333" }}>
              Hala Ahmed
            </CustomGlobalTypography>
            <Image
              src={QrImg}
              alt="logo"
              width={135}
              height={135}
              loading="lazy"
            />
          </GlobalDisplayFlexColumnBox>
          <Typography className="text-[14px] font-normal text-[#363333]">
            Follow Us on Mazaady
          </Typography>
        </GlobalDisplayFlexColumnBox>
      </GlobalDisplayFlexBox>
    </Stack>
  );
};

export default QRsection;
