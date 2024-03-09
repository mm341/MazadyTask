import { GlobalDisplayFlexColumnBox } from "@/styles/PublicStyles";
import { Grid } from "@mui/material";
import React from "react";
import TopCardPersonal from "./TopCardPersonal";
import BottomCardPersonal from "./BottomCardPersonal";

const PersonalLeftSection = () => {
  return (
    <Grid item md={4} xs={12}>
      <GlobalDisplayFlexColumnBox gap={"24px"}>
        {/* top card */}
        <TopCardPersonal />

        {/* bottom card */}
        <BottomCardPersonal />
      </GlobalDisplayFlexColumnBox>
    </Grid>
  );
};

export default PersonalLeftSection;
