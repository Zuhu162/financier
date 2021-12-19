import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "react-router-dom/Link";

export default function Navbar2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Financier
          </Typography>
          <Button color="inherit">
            <Link className="text-link" to="/login">
              Login
            </Link>
          </Button>
          <Button color="inherit">
            <Link className="text-link" to="/register">
              Sign Up
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
