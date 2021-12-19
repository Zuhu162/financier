import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import _ from "lodash";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import moment from "moment";
import { Box } from "@mui/material";

// import "chart.css";

//Find total of one time spendings by month
export default function LC(props) {
  let Data = [];
  props.items.map((item) => {
    let time = moment(item.created_at).format("MMMM YYYY");
    if (Data.some((d) => d.time === time)) {
      const i = Data.findIndex((i) => i.time === time);
      Data[i].value += item.cost;
    } else {
      Data.push({
        time: time,
        value: item.cost,
      });
    }
  });

  return (
    <Box>
      <ResponsiveContainer width="95%" height={400}>
        <LineChart data={Data.reverse()}>
          <XAxis dataKey="time" stroke="#5550bd"></XAxis>
          <YAxis stroke="#5550bd"></YAxis>
          <Line type="monotone" dataKey="value" stroke="#5550bd"></Line>
          <Tooltip></Tooltip>
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
