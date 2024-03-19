import { GlobalButton, GlobalDisplayFlexBox } from "@/styles/PublicStyles";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import logoImg from "../../public/homeImages/logo.svg";
import menuImg from "../../public/Navbar/menu.svg";
import searchImg from "../../public/Navbar/search-normal.svg";
import notificationImg from "../../public/Navbar/notification.svg";
import EllipseImg from "../../public/Navbar/Ellipse 1.png";
import languageImg from "../../public/Navbar/global.svg";
import PlusImg from "../../public/Navbar/add-circle.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomDivider from "./CustomDivider";
const Navbar = () => {
  //  hooks

  const theme = useTheme();
  const { pathname } = useRouter();
  const Sm = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box className="bg-white py-[12px] ">
      <Container>
        <GlobalDisplayFlexBox>
          {/*  left section */}
          <GlobalDisplayFlexBox
            sx={{ width: "50%", justifyContent: "flex-start", gap: "32px" }}
          >
            <Box>
              <GlobalDisplayFlexBox
                sx={{ justifyContent: "flex-start", gap: "4px" }}
              >
                {Sm && (
                  //  menu
                  <Image
                    src={menuImg}
                    alt="menu"
                    width={24}
                    height={24}
                    loading="lazy"
                  />
                )}
                {/*  logo */}

                {/* <Image
                  src={logoImg}
                  alt="logo"
                  width={108}
                  height={43}
                  loading="lazy"
                /> */}
                <p>logo</p>
              </GlobalDisplayFlexBox>
            </Box>
            {/* links */}
            {!Sm && (
              <GlobalDisplayFlexBox
                sx={{ justifyContent: "flex-start", gap: "40px" }}
              >
                <Link href={"/"}>
                  <Typography
                    sx={{
                      position: "relative",
                      color: pathname === "/" ? "#D20653" : "#828282",
                      fontWeight: pathname === "/" ? "700" : "400",
                      fontSize: "18px",
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        width: "44px",
                        height: "6px",
                        backgroundColor: "#D20653",
                        bottom: "-12px",
                        left: "3px",
                        borderTopLeftRadius: "8px",
                        borderTopRightRadius: "8px",
                      },
                    }}
                  >
                    Home
                  </Typography>
                </Link>
                <Link href={"/blog"}>
                  <Typography
                    sx={{
                      color: pathname === "/blog" ? "#D20653" : "#828282",
                      fontWeight: pathname === "/blog" ? "700" : "400",
                      fontSize: "18px",
                    }}
                  >
                    Blog
                  </Typography>
                </Link>
                <Link href={"/gifts"}>
                  <Typography
                    sx={{
                      color: pathname === "/gift" ? "#D20653" : "#828282",
                      fontWeight: pathname === "/gift" ? "700" : "400",
                      fontSize: "18px",
                    }}
                  >
                    Gifts
                  </Typography>
                </Link>
              </GlobalDisplayFlexBox>
            )}
          </GlobalDisplayFlexBox>

          {/*  right Section */}
          <GlobalDisplayFlexBox
            sx={{ width: "50%", justifyContent: "flex-end", gap: "24px" }}
          >
            <Image
              className=" cursor-pointer"
              alt="search"
              loading="lazy"
              src={searchImg}
              width={24}
              height={24}
            />

            <CustomDivider />
            <Image
              className=" cursor-pointer"
              alt="notification"
              loading="lazy"
              src={notificationImg}
              width={24}
              height={24}
            />

            <CustomDivider />
            <Image
              className=" cursor-pointer"
              alt="EllipseImg"
              loading="lazy"
              src={EllipseImg}
              width={24}
              height={24}
            />

            {!Sm && (
              <GlobalButton
                sx={{
                  display: "flex",
                  width: "172px",
                  borderRadius: "10px",
                  gap: "5px",
                  px: "4px",
                }}
              >
                <Image
                  src={PlusImg}
                  loading="lazy"
                  alt="img"
                  width={18}
                  height={18}
                />
                <Typography className="text-[14px]  font-bold">
                  Add new product
                </Typography>
              </GlobalButton>
            )}
            {!Sm && (
              <Box>
                <GlobalDisplayFlexBox
                  sx={{ justifyContent: "flex-end", gap: "8px" }}
                >
                  <Image
                    className=" cursor-pointer"
                    alt="languageImg"
                    loading="lazy"
                    src={languageImg}
                    width={24}
                    height={24}
                  />
                  <CustomDivider />
                  <Typography className="text-[18px] font-bold">EN</Typography>
                </GlobalDisplayFlexBox>
              </Box>
            )}
          </GlobalDisplayFlexBox>
        </GlobalDisplayFlexBox>
      </Container>
    </Box>
  );
};

export default Navbar;
