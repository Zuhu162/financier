import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { Box, Card, Grid, Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function Saving(props) {
  return (
    <Card mt={10} sx={{ padding: "50px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Box alignItems="center" minHeight={100}>
            <Grid item xs={12}>
              <Typography color="white" variant="h6">
                Saving for
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="white" variant="p">
                You're on track to save $5000 a month
              </Typography>
            </Grid>
          </Box>
          <Grid item xs={12}>
            <BorderLinearProgress variant="determinate" value={50} />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="right">
              <Typography color="white" variant="p">
                $5000
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography color="white" variant="p">
                You're on track to save $5000 a month
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
