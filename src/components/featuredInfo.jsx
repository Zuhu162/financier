import React, { useState } from "react";
import Box from "@mui/material/Box";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function FeaturedInfo(props) {
  return (
    <div>
      <Card
        sx={{
          bgcolor: props.value > 0 ? "secondary.main" : "#00C49F",
          mb: 2,
          mr: 1,
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <Typography
              sx={{ mt: 1.5, mb: 1.5, fontSize: 14 }}
              color="white"
              gutterBottom
            >
              {props.title}
            </Typography>
            <Typography
              sx={{ mb: 1.5 }}
              color="white"
              variant="h4"
              component="div"
            >
              ${props.value}
            </Typography>
            <Typography color="white">
              Compared to - {props.comparedTo}
            </Typography>
            <Typography variant="body2">
              <br />
            </Typography>
          </CardContent>
          {props.value > 0 ? (
            <ArrowUpwardIcon
              sx={{ mt: 7, color: "white", fontSize: 50 }}
            ></ArrowUpwardIcon>
          ) : (
            <ArrowDownwardIcon sx={{ mt: 7, color: "white", fontSize: 50 }}>
              {" "}
            </ArrowDownwardIcon>
          )}{" "}
          <Typography sx={{ mt: 7, color: "white" }}>
            {props.percentage}
          </Typography>
        </Box>
      </Card>
    </div>
  );
}
