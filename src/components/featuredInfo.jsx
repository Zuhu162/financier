import React, { useState } from "react";
import Box from "@mui/material/Box";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
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
          ":hover":
            props.value < 0
              ? {
                  bgcolor: "rgba(0, 196, 180, 1)",
                  color: "white",
                }
              : {
                  bgcolor: "rgba(255, 0, 115, 1)",
                  color: "white",
                },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <Typography sx={{ mt: 1.5, mb: 1.5, fontSize: 14 }} gutterBottom>
              {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} variant="h4" component="div">
              ${props.value > 0 ? `+` : ``}
              {props.value}
            </Typography>
            <Typography>Compared to - {props.comparedTo}</Typography>
            <Typography variant="body2">
              <br />
            </Typography>
          </CardContent>
          {props.value > 0 ? (
            <SentimentVeryDissatisfiedIcon
              sx={{ mt: 7, color: "white", fontSize: 50 }}
            ></SentimentVeryDissatisfiedIcon>
          ) : (
            <TagFacesIcon sx={{ mt: 7, color: "white", fontSize: 50 }}>
              {" "}
            </TagFacesIcon>
          )}{" "}
          <Typography sx={{ mt: 7, color: "white" }}>
            {props.percentage}
          </Typography>
        </Box>
      </Card>
    </div>
  );
}
