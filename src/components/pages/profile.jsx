import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function Profile() {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item xs={12}>
        <Avatar sx={{ width: 200, height: 200, bgcolor: "#EA4C89" }}>
          <Typography variant="h2" color="text.primary" fontWeight="bold">
            N
          </Typography>
        </Avatar>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Typography variant="h5" fontWeight="bold">
          Username
        </Typography>
      </Grid>
      <Grid item xs={12} mt={1}>
        <Typography variant="h6" fontWeight="bold">
          Monthly Income - $2000
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          // onChange={(e) => setEmail(e.currentTarget.value)}
          margin="normal"
          fullWidth
          id="name"
          label="name"
          name="name"
          sx={{ bgcolor: "white", borderRadius: "10px" }}
        />
        <TextField
          // onChange={(e) => setEmail(e.currentTarget.value)}
          margin="normal"
          fullWidth
          id="name"
          type="number"
          label="income"
          name="name"
          sx={{ bgcolor: "white", borderRadius: "10px" }}
        />
        <TextField
          // onChange={(e) => setEmail(e.currentTarget.value)}
          margin="normal"
          fullWidth
          id="password"
          label="password"
          name="password"
          type="password"
          sx={{ bgcolor: "white", borderRadius: "10px" }}
        />
        <Button
          // onClick={handleSubmit}
          type="submit"
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
}
