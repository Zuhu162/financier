import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Setup() {
  const [income, setIncome] = useState("");

  const userId = `${localStorage.getItem("currentUser")}`;

  const handleSave = async (e) => {
    if (!income) {
      alert("Please fill out all fields");
      return;
    }

    let finances = {
      income: income,
    };

    try {
      await axios.put(`/users/${userId}/set`, { finances });
      window.location.replace("/");
    } catch (err) {}
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={12}>
        <Card sx={{ minHeight: "5vh", bgcolor: "primary.main" }}></Card>
        <Card sx={{ padding: "50px" }}>
          <CardContent>
            <Grid container justifyContent="center" mt={3}></Grid>
            <Grid container direction="row">
              <Grid item mb={6} mt={2}>
                <Typography variant="h4" fontWeight="bold">
                  Welcome to Financier!
                </Typography>
                <Typography variant="h6" fontWeight="bold" mb={3}>
                  Let's get started by adding your monthly fixed expenditures
                  and income!
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  Monthly Income:
                </Typography>
                <TextField
                  onChange={(e) => setIncome(e.currentTarget.value)}
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  autoFocus
                  id="Income"
                  name="Income"
                  sx={{
                    marginBottom: "25px",
                    border: "1px solid white",
                    borderRadius: "5px",
                    color: "white",
                  }}
                />

                <Typography variant="h6" mt={5} fontWeight="bold">
                  Add your fixed costs for the month below <br />
                </Typography>
                <Typography
                  color="#534747"
                  variant="caption"
                  mt={5}
                  fontWeight="bold"
                >
                  Examples: <br />
                  Electricity Bill - Utilities, <br />
                  Netflix subscription - Entertainment
                </Typography>
              </Grid>
            </Grid>
            <Grid container justifyContent="flex-end">
              <Button
                type="submit"
                onClick={handleSave}
                variant="contained"
                sx={{ mt: 3, mb: 2, mr: 10 }}
              >
                Save
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
