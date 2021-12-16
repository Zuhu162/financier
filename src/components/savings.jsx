import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
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
  const { finances } = props;
  const barProgress =
    ((finances.income - finances.thisMonth) / finances.income) * 100;

  return (
    <Card mt={10} sx={{ padding: "50px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Box alignItems="center" minHeight={100}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Total Income: ${finances.income}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="secondary.main" variant="h6">
                You currently have spent: ${finances.thisMonth}
              </Typography>
            </Grid>
          </Box>
          <Grid item xs={12}>
            <BorderLinearProgress variant="determinate" value={barProgress} />
          </Grid>
          <Grid item xs={12}>
            <Box textAlign="right">
              <Typography variant="p">${finances.income}</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h6">
                Currently Remaining: ${finances.income - finances.thisMonth}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}
