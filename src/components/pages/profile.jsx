import {
  Avatar,
  Button,
  Card,
  CardContent,
  Alert,
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Profile(props) {
  const { user } = props;

  const [username, setUsername] = useState("");
  const [income, setIncome] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    let user = {
      username: username,
      income: income,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };

    try {
      const res = await axios.put(
        `/users/${localStorage.getItem("currentUser")}/set`,
        user
      );

      window.location.replace("/profile");
    } catch (err) {
      setError(true);
    }

    e.preventDefault();
  };

  console.log(user);
  return (
    <Grid
      container
      sx={{ height: "80vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} lg={6}>
        <Card sx={{ minHeight: "5vh", bgcolor: "primary.main" }}></Card>
        <Card sx={{ minHeight: "50vh" }}>
          <CardContent>
            <Grid container justifyContent="center" mt={3}>
              <Grid item>
                <Avatar
                  sx={{
                    width: "100px",
                    height: "100px",
                    bgcolor: "secondary.main",
                  }}
                >
                  <Typography variant="h3" color="white">
                    {user.username[0].toUpperCase()}
                  </Typography>
                </Avatar>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center">
              <Grid item xs={12} lg={8}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Username</label>
                  <input
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    type="username"
                    className="form-control p-3"
                    defaultValue={user.username}
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={8}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Income</label>
                  <input
                    onChange={(e) => setIncome(e.currentTarget.value)}
                    type="number"
                    className="form-control p-3"
                    value={user.income}
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={8} mt={3}>
                <div className="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    onChange={(e) => setFirstName(e.currentTarget.value)}
                    type="string"
                    className="form-control p-3"
                    value={user.firstName}
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={8} mt={3}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    onChange={(e) => setLastName(e.currentTarget.value)}
                    type="string"
                    className="form-control p-3"
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={8}>
                <Button
                  onClick={handleSubmit}
                  type="submit"
                  variant="contained"
                  sx={{ mt: 2, mb: 2, width: "100%", height: "50px" }}
                >
                  Save
                </Button>
                {error ? (
                  <Alert
                    sx={{ bgcolor: "secondary.main", color: "white" }}
                    severity="error"
                  >
                    Invalid email or password
                  </Alert>
                ) : null}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
