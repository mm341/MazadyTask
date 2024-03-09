import { GlobalButton } from "@/styles/PublicStyles";
import { useTheme } from "@mui/material";
import React from "react";

const ButtonactiveCard = ({ active, h1 }: { active?: boolean; h1: string }) => {
  //  hooks
  const theme = useTheme();
  return (
    <GlobalButton
      bg={!active ? "white" : theme.palette.background.default}
      sx={{
        width: "108px",
        height: "35px",
        borderRadius: "14px",
        fontSize: "14px",
        fontWeight: "400",
        color: !active ? "#828282" : theme.palette.primary.main,

        border: !active
          ? "1px solid #828282"
          : `1px solid ${theme.palette.primary.main}`,
      }}
    >
      {h1}
    </GlobalButton>
  );
};

export default ButtonactiveCard;
