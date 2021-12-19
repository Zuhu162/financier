import {
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

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    let user = {
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };

    try {
      const res = await axios.post("/auth/register", user);

      localStorage.setItem("token", res.data);
      window.location.replace("/dashboard");
    } catch (err) {
      setError(true);
    }

    e.preventDefault();
  };

  return (
    <Grid
      container
      sx={{ height: "80vh" }}
      justifyContent="center"
      alignItems="center"
      pt={3}
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
                  Get Started with Financier!
                </Typography>
              </Grid>
              <Grid item xs={12} lg={8}>
                <div className="form-group">
                  <label for="exampleInputEmail1">First Name</label>
                  <input
                    onChange={(e) => setFirstName(e.currentTarget.value)}
                    type="name"
                    className="form-control p-3"
                    id="exampleInputusername1"
                    aria-describedby="usernameHelp"
                    placeholder="Enter First Name"
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={8} mt={3}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Last Name</label>
                  <input
                    onChange={(e) => setLastName(e.currentTarget.value)}
                    type="name"
                    className="form-control p-3"
                    id="exampleInputusername1"
                    aria-describedby="usernameHelp"
                    placeholder="Enter Last Name"
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={8} mt={3}>
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
                  Register
                </Button>

                <Typography color="primary.main" mt={3} mb={5}>
                  <Link
                    style={{ textDecoration: "none", color: "#FFF" }}
                    to="/login"
                  >
                    Already have an account? Click here to Login.
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
