import {
  CustomGlobalTypography,
  GlobalDisplayFlexBox,
  GlobalDisplayFlexColumnBox,
} from "@/styles/PublicStyles";
import Image from "next/image";
import React from "react";
import productCardImg from "../../../../public/homeImages/product.png";
import stickyImg from "../../../../public/homeImages/stickyImg.png";
import heartSmImg from "../../../../public/homeImages/heartSm.svg";
import whiteHeart from "../../../../public/homeImages/whiteHeart.svg";
import { Box, Typography } from "@mui/material";
import DaysCardButton from "./DaysCardButton";
const ProductCard = () => {
  return (
    <GlobalDisplayFlexBox  sx={{alignItems:"flex-start"}}>
      <GlobalDisplayFlexBox
        sx={{
          justifyContent: {
            md: "flex-start",
            xs: "center",
          },
          gap: { md: "16px", xs: "10px" },
          alignItems: "flex-start",
          width: { md: "95%", xs: "100%" },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Image
            src={productCardImg}
            loading="lazy"
            alt="img"
            width={145}
            height={127}
          />
          <Box sx={{ position: "absolute", right: "0", bottom: "0" }}>
            <Image
              src={stickyImg}
              loading="lazy"
              alt="img"
              width={114}
              height={37}
            />
          </Box>
          <Box
            sx={{
              display: { md: "none", xs: "flex" },
              position: "absolute",
              left: "5px",
              top: "5px",
            }}
          >
            <Image
              src={heartSmImg}
              loading="lazy"
              alt="img"
              width={24}
              height={24}
            />
          </Box>
        </Box>

        <GlobalDisplayFlexColumnBox gap={"8px"}>
          <Typography
            sx={{ fontSize: { md: "18px", xs: "12px" } }}
            className="font-normal"
          >
            Six-piece clothing set (blouse - pants - hat and ...
          </Typography>
          <GlobalDisplayFlexBox
            sx={{ justifyContent: "flex-start", gap: "5px" }}
          >
            <Typography
              sx={{ fontSize: { md: "14px", xs: "12px" } }}
              className=" font-normal text-[#828282]"
            >
              Starting Price
            </Typography>
            <CustomGlobalTypography
              sx={{ fontSize: { md: "24px", xs: "12px" } }}
            >
              1000 EGP
            </CustomGlobalTypography>
          </GlobalDisplayFlexBox>

          <GlobalDisplayFlexBox
            sx={{
              justifyContent: "flex-start",
              alignItems: {md:"center",xs:"flex-start"},
              flexDirection: { md: "row", xs: "column" },
              gap: "10px",
            }}
          >
            <Typography
              className="text-[#828282]"
              sx={{ fontWeight: "400", fontSize: { md: "16px", xs: "12px" },width:"50%" }}
            >
              Lot starts in
            </Typography>
            <GlobalDisplayFlexBox
              gap={"10px"}
              sx={{ justifyContent: "flex-start" }}
            >
              <DaysCardButton number={2} h1="Days" />
              <DaysCardButton number={10} h1="Hours" />
              <DaysCardButton number={50} h1="Minutes" />
            </GlobalDisplayFlexBox>
          </GlobalDisplayFlexBox>
        </GlobalDisplayFlexColumnBox>
      </GlobalDisplayFlexBox>

      <Box sx={{display:{md:"flex",xs:"none"},cursor:"pointer"}}>
        <Image src={whiteHeart} loading="lazy" alt="img" width={24} height={24}/>
      </Box>
    </GlobalDisplayFlexBox>
  );
};

export default ProductCard;
