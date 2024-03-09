import PersonalLeftSection from "@/Components/GlobalComponent/HomeSections/PersonalProfileSection";
import ProductsRightSection from "@/Components/GlobalComponent/HomeSections/ProductsRightSection";
import { Box, CssBaseline, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <CssBaseline />
     <Grid container spacing={3}>
      {/* personal information left section */}
      <PersonalLeftSection/>

      {/* products section right section */}
      <ProductsRightSection/>
     </Grid>
    </>
  );
}
