import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

export default function Recents(props) {
  const items = [1, 2, 3, 4];

  return (
    <Grid container mt={5} mb={5}>
      <Grid item mr={2}>
        <Box minHeight={100}>
          <Card>
            <Button sx={{ height: "100px", width: "100px" }}>
              <AddCircleOutlineRoundedIcon />
            </Button>
          </Card>
        </Box>
      </Grid>

      {[0, 1, 2, 3].map((value) => {
        return (
          <Grid item mr={1}>
            <Box minHeight={100}>
              <Card>
                <Button sx={{ height: "100px", width: "100px" }}>
                  {value}
                </Button>
              </Card>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
