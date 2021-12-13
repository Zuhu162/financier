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

const data = [
  {
    name: "Utilities",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Entertainment",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Education",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "MISC",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

export default function Barchart(props) {
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
