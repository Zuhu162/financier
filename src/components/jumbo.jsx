import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Barchart from "./barchart";

function Jumbo() {
  return (
    <Card>
      <Box sx={{ mx: "auto" }} mb={5} padding={5} minHeight={500}>
        <Grid container>
          <Grid item xs={12}>
            <Typography color="white" variant="h4">
              <Box sx={{ fontWeight: "bold" }}>Total Monthly Spendings: </Box>
            </Typography>
            <Typography variant="secondary" color="white">
              Lorem, ipsum dolor.
            </Typography>
            <Box mt={10}>
              <Barchart></Barchart>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default Jumbo;
