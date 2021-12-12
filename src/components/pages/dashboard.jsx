import { Grid } from "@mui/material";
import React, { useState } from "react";
import Costs from "../costs";
import FeaturedInfo from "../featuredInfo";
import Jumbo from "../jumbo";
import Recents from "../recents";
import Saving from "../savings";

function Dashboard() {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} mb={2}>
        <Jumbo></Jumbo>
      </Grid>
      <Grid item xs={4}>
        <FeaturedInfo value="120" />
      </Grid>
      <Grid item xs={4}>
        <FeaturedInfo value="-120" />
      </Grid>
      <Grid item mr={2} xs={8}>
        <Saving></Saving>
      </Grid>
      <Grid item mr={2} xs={5}>
        <Costs name={"Utilities"}></Costs>
      </Grid>
      <Grid item xs={5}>
        <Costs name={"Entertainment"}></Costs>
      </Grid>
      <Grid mr={2} item xs={5}>
        <Costs name={"Groceries"}></Costs>
      </Grid>
      <Grid item xs={5}>
        <Costs name={"Education"}></Costs>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
