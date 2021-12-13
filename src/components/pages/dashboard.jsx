import { Grid } from "@mui/material";
import React, { useState } from "react";
import FixedCosts from "../fixedCosts";
import Costs from "../fixedCosts";
import FeaturedInfo from "../featuredInfo";
import Jumbo from "../jumbo";
import Recents from "../recents";
import Saving from "../savings";

function Dashboard() {
  const [utilItems, setUtilItems] = useState([
    {
      name: "Electricity",
      cost: 200,
    },
    {
      name: "Internet",
      cost: 80,
    },
    {
      name: "Dish",
      cost: 50,
    },
  ]);

  const [entertainmentItems, setEntertainmentItems] = useState([
    {
      name: "Netflix",
      cost: 10,
    },
    {
      name: "Spotify",
      cost: 10,
    },
    {
      name: "Amazon Prime",
      cost: 20,
    },
    {
      name: "PS plus",
      cost: 20,
    },
  ]);
  const [educationItems, setEducationItems] = useState([
    {
      name: "Maths Tuition",
      cost: 150,
    },
    {
      name: "Skillshare Subscription",
      cost: 10,
    },
  ]);
  const [miscItems, setMiscItems] = useState([
    {
      name: "Maths Tuition",
      cost: 150,
    },
  ]);

  const [spendings, setSpendings] = useState({
    income: 2000,
    thisMonth: 0,
    lastMonth: 300,
  });

  entertainmentItems.forEach((e) => (spendings.thisMonth += e.cost));
  utilItems.forEach((e) => (spendings.thisMonth += e.cost));
  educationItems.forEach((e) => (spendings.thisMonth += e.cost));
  miscItems.forEach((e) => (spendings.thisMonth += e.cost));
  console.log(spendings);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} mb={2}>
        <Jumbo
          spendings={spendings}
          items={[utilItems, entertainmentItems, educationItems, miscItems]}
        ></Jumbo>
      </Grid>
      <Grid item xs={12} md={4}>
        <FeaturedInfo
          title="Total Spendings"
          comparedTo="Last Month"
          value="-120"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FeaturedInfo
          title="Extra Spendings"
          comparedTo="Last Month"
          value="+120"
        />
      </Grid>
      <Grid item mr={2} xs={8}>
        <Saving></Saving>
      </Grid>
      <Grid item mr={2} xs={12} md={5}>
        <FixedCosts name={"Utilities"} items={utilItems}></FixedCosts>
      </Grid>
      <Grid item xs={12} md={5}>
        <FixedCosts
          name={"Entertainment"}
          items={entertainmentItems}
        ></FixedCosts>
      </Grid>
      <Grid item mr={2} xs={12} md={5}>
        <FixedCosts name={"Education"} items={educationItems}></FixedCosts>
      </Grid>
      <Grid item xs={12} md={5}>
        <FixedCosts name={"MISC"}></FixedCosts>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
