import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { Badge, Box, Card, Grid, Typography } from "@mui/material";
import NewItem from "./newItem";

export default function FixedCosts(props) {
  const items = props.items ? props.items : [];

  let totalCost = 0;
  for (let i = 0; i < items.length; i++) {
    totalCost += items[i].cost;
  }

  return (
    <Box mt={10}>
      <Typography color="white" variant="h4">
        {props.name}:<Badge className="badge">${totalCost}</Badge>
      </Typography>
      <List>
        {items.map((items) => {
          return (
            <Card sx={{ marginBottom: "1px" }}>
              <ListItem key={items} sx={{ color: "White" }}>
                <ListItemButton sx={{ minHeight: "100px" }}>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${items + 1}`}
                      src={`/static/images/avatar/${items + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText>
                    <Box textAlign="left">
                      <Typography>{items.name} </Typography>
                    </Box>
                  </ListItemText>
                  <ListItemText>
                    <Box textAlign="right">
                      <Typography>${items.cost} </Typography>
                    </Box>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Card>
          );
        })}
        <NewItem></NewItem>
      </List>
    </Box>
  );
}
