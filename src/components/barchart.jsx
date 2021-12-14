import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Barchart(props) {
  const data = [
    {
      name: "Utilities",
      uv: 4000,
      pv: props.items.utilities,
      amt: 2400,
    },
    {
      name: "Entertainment",
      uv: 3000,
      pv: props.items.entertainment,
      amt: 2210,
    },
    {
      name: "Education",
      uv: 2000,
      pv: props.items.education,
      amt: 2290,
    },
    {
      name: "MISC",
      uv: 2780,
      pv: props.items.misc,
      amt: 2000,
    },
    {
      name: "One-Time",
      uv: 2780,
      pv: props.items.misc,
      amt: 2000,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid stroke="#1E1E1E" strokeDasharray="none" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
