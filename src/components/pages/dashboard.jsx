import { Grid } from "@mui/material";
import React, { useState } from "react";
import FixedCosts from "../fixedCosts";
import Costs from "../fixedCosts";
import FeaturedInfo from "../featuredInfo";
import Jumbo from "../jumbo";
import Recents from "../recents";
import Saving from "../savings";
import NewItem from "../newItem";

function Dashboard() {
  //API data placeholders
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
  const [miscItems, setMiscItems] = useState([]);

  const [finances, setfinances] = useState({
    income: 2000,
    saveGoal: 5000,
    currentlySaved: 2000,
    saveItem: "Graphics Card",
    thisMonth: 0,
    lastMonth: 300,
    entertainment: 0,
    utilities: 0,
    education: 0,
    misc: 0,
    oneTime: 0,
  });

  //Calculations for totals
  entertainmentItems.forEach(
    (e) => ((finances.thisMonth += e.cost), (finances.entertainment += e.cost))
  );
  utilItems.forEach(
    (e) => ((finances.thisMonth += e.cost), (finances.utilities += e.cost))
  );
  educationItems.forEach(
    (e) => ((finances.thisMonth += e.cost), (finances.education += e.cost))
  );
  miscItems.forEach(
    (e) => ((finances.thisMonth += e.cost), (finances.misc += e.cost))
  ); //Use setFinances

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} mb={2}>
        <Jumbo spendings={finances}></Jumbo>
      </Grid>
      <Grid item xs={12} md={4}>
        <FeaturedInfo
          title="Total Spendings"
          comparedTo="Last Month"
          value={finances.lastMonth - finances.thisMonth}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <FeaturedInfo
          title="One Time Spendings"
          comparedTo="Last Month"
          value="+120"
        />
      </Grid>
      <Grid item xs={12} md={2} mr={1} mb={2}>
        <NewItem default="One-Time"></NewItem>
      </Grid>
      <Grid item mr={2} xs={12} lg={8}>
        <Saving finances={finances}></Saving>
      </Grid>
      <Grid item mr={2} xs={12} md={5}>
        <FixedCosts
          name={"Utilities"}
          items={utilItems}
          total={finances.utilities}
        ></FixedCosts>
      </Grid>
      <Grid item xs={12} md={5}>
        <FixedCosts
          name={"Entertainment"}
          items={entertainmentItems}
          total={finances.entertainment}
        ></FixedCosts>
      </Grid>
      <Grid item mr={2} xs={12} md={5}>
        <FixedCosts
          name={"Education"}
          items={educationItems}
          total={finances.education}
        ></FixedCosts>
      </Grid>
      <Grid item xs={12} md={5}>
        <FixedCosts name={"MISC"} total={finances.misc}></FixedCosts>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
