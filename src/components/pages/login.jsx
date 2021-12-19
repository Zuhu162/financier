import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../assets/financierLogo.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    let user = {
      username: username,
      password: password,
    };

    try {
      const res = await axios.post("/auth/login", user);

      localStorage.setItem("token", res.data);
      window.location.replace("/");
    } catch (err) {
      setError(true);
    }

    e.preventDefault();
  };

  return (
    <Box>
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
                  <img style={{ height: "150px" }} src={logo} alt="" />
                </Grid>
              </Grid>
              <Grid container direction="row" justifyContent="center">
                <Grid item mb={6} mt={2}>
                  <Typography variant="h5" fontWeight="bold">
                    Welcome Back to Financier!
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={8}>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input
                      onChange={(e) => setUsername(e.currentTarget.value)}
                      type="username"
                      className="form-control p-3"
                      id="exampleInputusername1"
                      aria-describedby="usernameHelp"
                      placeholder="Enter Username"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} lg={8} mt={3}>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input
                      onChange={(e) => setPassword(e.currentTarget.value)}
                      type="password"
                      className="form-control p-3"
                      id="exampleInputusername1"
                      aria-describedby="usernameHelp"
                      placeholder="Enter Password"
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
                    Login
                  </Button>
                  {error ? (
                    <Alert
                      sx={{ bgcolor: "secondary.main", color: "white" }}
                      severity="error"
                    >
                      Invalid email or password
                    </Alert>
                  ) : null}
                  <Typography color="primary.main" mt={3} mb={5}>
                    <Link
                      style={{ textDecoration: "none", color: "#FFF" }}
                      to="/register"
                    >
                      Don't have an account? Click here to register.
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
