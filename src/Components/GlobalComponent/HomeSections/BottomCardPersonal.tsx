import {
  CustomGlobalTypography,
  CustomPaperBigCard,
  GlobalDisplayFlexBox,
  GlobalDisplayFlexColumnBox,
} from "@/styles/PublicStyles";
import Image from "next/image";
import React, { useState } from "react";
import eyeImg from "../../../../public/homeImages/eye.svg";
import shareImg from "../../../../public/homeImages/send-square.svg";
import downloadImg from "../../../../public/homeImages/document-download.svg";
import downloadYellowImg from "../../../../public/homeImages/document-downloadYellow.svg";
import arrowdown from "../../../../public/homeImages/arrowdown.svg";
import arrowUp from "../../../../public/homeImages/arrowUp.svg";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import QRsection from "./QRsection";
const BottomCardPersonal = () => {
  //  hooks
  const theme = useTheme();
  const [Visible, setVisible] = useState(true);
  const sm=useMediaQuery(theme.breakpoints.down("md"))
  return (
    <CustomPaperBigCard>
      <GlobalDisplayFlexColumnBox gap={"16px"}>
        {/*  top section */}
        <GlobalDisplayFlexBox>
          <CustomGlobalTypography sx={{ width: "50%" }}>
            QR Code
          </CustomGlobalTypography>
          {/*  imgs part */}
          <GlobalDisplayFlexBox
            sx={{ justifyContent: "flex-end", gap: "24px" }}
          >
            <Image
              src={eyeImg}
              alt="eye"
              loading="lazy"
              width={24}
              height={24}
            />
            <Image
              src={shareImg}
              alt="share"
              loading="lazy"
              width={24}
              height={24}
            />
            <Image
              src={downloadImg}
              alt="download"
              loading="lazy"
              width={24}
              height={24}
            />
            {!Visible &&sm&& (
              <Image
                src={arrowdown}
                alt="download"
                loading="lazy"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={() => setVisible(true)}
              />
            )}
            {Visible &&sm&& (
              <Image
                className="cursor-pointer"
                src={arrowUp}
                alt="download"
                loading="lazy"
                width={24}
                height={24}
                onClick={() => setVisible(false)}
              />
            )}
          </GlobalDisplayFlexBox>
        </GlobalDisplayFlexBox>

        {/*  middle Section */}

        {Visible && (
          <CustomPaperBigCard
            sx={{
              padding: "16px",
              backgroundColor: theme.palette.background.default,
              borderRadius: "18px",
            }}
          >
            <GlobalDisplayFlexBox
              sx={{ justifyContent: "flex-start", gap: "6px" }}
            >
              <Image
                src={downloadYellowImg}
                alt="downloadYellowImg"
                loading="lazy"
                width={24}
                height={24}
              />

              <Typography sx={{ fontSize: "12px", fontWeight: "400" }}>
                Download the QR code or share it with your friends.
              </Typography>
            </GlobalDisplayFlexBox>
          </CustomPaperBigCard>
        )}
        {/*  bottom qr code section */}

        {Visible && <QRsection />}
      </GlobalDisplayFlexColumnBox>
    </CustomPaperBigCard>
  );
};

export default BottomCardPersonal;
