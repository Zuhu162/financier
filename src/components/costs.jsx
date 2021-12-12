import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { Box, Card, Grid, Typography } from "@mui/material";
import NewItem from "./newItem";

export default function Costs(props) {
  return (
    <Box mt={10}>
      <Typography color="white" variant="h4">
        {props.name}
      </Typography>
      <List>
        {[0, 1, 2, 3].map((value) => {
          return (
            <Card sx={{ marginBottom: "1px" }}>
              <ListItem key={value} sx={{ color: "White" }}>
                <ListItemButton sx={{ minHeight: "100px" }}>
                  <ListItemAvatar>
                    <Avatar
                      alt={`Avatar n°${value + 1}`}
                      src={`/static/images/avatar/${value + 1}.jpg`}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={`Line item ${value + 1}`} />
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
