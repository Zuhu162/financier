import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../assets/placeholderLogo.png";
import React, { useState } from "react";

export default function Login() {
  return (
    <Grid
      container
      sx={{ height: "80vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} lg={6}>
        <Card sx={{ minHeight: "50vh" }}>
          <CardContent>
            <Grid container justifyContent="center">
              <Grid item>
                <img style={{ height: "75px" }} src={logo} alt="" />
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Grid item mb={6} mt={2}>
                <Typography variant="h5" fontWeight="bold">
                  Get started with Financier!
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  // onChange={(e) => setEmail(e.currentTarget.value)}
                  margin="normal"
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  sx={{ bgcolor: "white", borderRadius: "10px" }}
                />
              </Grid>
              <Grid item xs={12} lg={8}>
                <TextField
                  // onChange={(e) => setEmail(e.currentTarget.value)}
                  margin="normal"
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  sx={{ bgcolor: "white", borderRadius: "10px" }}
                />
              </Grid>
              <Grid item xs={12} lg={8}>
                <Button
                  // onClick={handleSubmit}
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, width: "100%", height: "50px" }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
