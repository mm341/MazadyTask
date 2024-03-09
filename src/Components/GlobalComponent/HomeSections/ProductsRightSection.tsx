import {
  CustomGlobalTypography,
  CustomPaperBigCard,
  CustomTypography,
  GlobalButton,
  GlobalDisplayFlexBox,
  GlobalDisplayFlexColumnBox,
} from "@/styles/PublicStyles";
import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonactiveCard from "./ButtonactiveCard";
import Image from "next/image";
import plusImg from "../../../../public/homeImages/add-circle.svg";
import ProductCard from "./ProductCard";
const ProductsRightSection = () => {
  //  array

  const array = [...Array(12)];

  return (
    <Grid item md={8} xs={12}>
      <CustomPaperBigCard>
        <GlobalDisplayFlexColumnBox gap={"24px"}>
          {/*  top section */}

          <GlobalDisplayFlexBox>
            {/*  buttons */}
            <GlobalDisplayFlexBox
              sx={{
                justifyContent: { md: "flex-start", xs: "center" },
                width: { md: "50%", xs: "100%" },
                gap: "10px",
              }}
            >
              <ButtonactiveCard h1="Products" active />
              <ButtonactiveCard h1="Articles" />
              <ButtonactiveCard h1="Reviews" />
            </GlobalDisplayFlexBox>

            <GlobalButton
              sx={{
                display: {
                  md: "flex",
                  xs: "none",
                  width: "125px",
                  borderRadius: "10px",
                  gap: "5px",
                  px: "4px",
                },
              }}
            >
              <Image
                src={plusImg}
                loading="lazy"
                alt="img"
                width={18}
                height={18}
              />
              <Typography className="text-[14px]  font-bold">
                Add Review
              </Typography>
            </GlobalButton>

            <GlobalButton
              sx={{
                display: {
                  md: "none",
                  xs: "flex",
                },
                width: "125px",
                borderRadius: "10px",
                gap: "5px",
                px: "4px",
                position: "fixed",
                top: "60%",
                right: "0",
              }}
            >
              <Image
                src={plusImg}
                loading="lazy"
                alt="img"
                width={18}
                height={18}
              />
              <Typography className="text-[14px]  font-bold">
                Add Review
              </Typography>
            </GlobalButton>
          </GlobalDisplayFlexBox>

          {/*  products section */}
          <GlobalDisplayFlexColumnBox gap={"13px"}>
            <GlobalDisplayFlexBox
              sx={{ justifyContent: "flex-start", gap: "8px" }}
            >
              <CustomGlobalTypography>Products</CustomGlobalTypography>

              <Typography className="text-[#828282]  text-[14px]  font-normal">
                ( {array?.length} )
              </Typography>
            </GlobalDisplayFlexBox>

            <GlobalDisplayFlexColumnBox gap={"24px"}>
              {array?.map((product, index) => (
                <ProductCard key={index} />
              ))}
            </GlobalDisplayFlexColumnBox>
          </GlobalDisplayFlexColumnBox>
        </GlobalDisplayFlexColumnBox>
      </CustomPaperBigCard>
    </Grid>
  );
};

export default ProductsRightSection;
