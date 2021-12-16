import { Box, Grid, Toolbar } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import React, { useState, useEffect } from "react";
import FixedCosts from "../fixedCosts";
import Costs from "../fixedCosts";
import FeaturedInfo from "../featuredInfo";
import Jumbo from "../jumbo";
import Recents from "../recents";
import Saving from "../savings";
import NewItem from "../newItem";
import Setup from "../setup";
import axios from "axios";
import Link from "react-router-dom/Link";

function Dashboard(props) {
  //API data placeholders
  const [utilItems, setUtilItems] = useState([]);
  const [entertainmentItems, setEntertainmentItems] = useState([]);
  const [educationItems, setEducationItems] = useState([]);
  const [miscItems, setMiscItems] = useState([]);
  const [oneTime, setOneTime] = useState([]);

  const [finances, setFinances] = useState({
    income: 0,
    lastMonth: 0,
  });

  let Finances = {
    ...finances,
    thisMonth: 0,
    entertainment: 0,
    utilities: 0,
    education: 0,
    misc: 0,
    oneTime: 0,
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `/users/${localStorage.getItem("currentUser")}`
        );
        setEducationItems(res.data.Education);
        setEntertainmentItems(res.data.Entertainment);
        setMiscItems(res.data.MISC);
        setUtilItems(res.data.Utility);
        setOneTime(res.data.OneTime);
        setFinances(res.data.finances);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  //Calculations for totals

  entertainmentItems.forEach(
    (e) => ((Finances.thisMonth += e.cost), (Finances.entertainment += e.cost))
  );
  utilItems.forEach(
    (e) => ((Finances.thisMonth += e.cost), (Finances.utilities += e.cost))
  );
  educationItems.forEach(
    (e) => ((Finances.thisMonth += e.cost), (Finances.education += e.cost))
  );
  miscItems.forEach(
    (e) => ((Finances.thisMonth += e.cost), (Finances.misc += e.cost))
  );
  oneTime.forEach(
    (e) => ((Finances.thisMonth += e.cost), (Finances.oneTime += e.cost))
  );

  return (
    <Box>
      {finances ? (
        <Grid container justifyContent="center">
          <Grid item xs={12} mb={2}>
            <Jumbo spendings={Finances}></Jumbo>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeaturedInfo
              title="Total Spendings"
              comparedTo="Last Month"
              value={Finances.thisMonth - Finances.lastMonth}
            />
          </Grid>
          <Tooltip title="Check one time purchases" placement="top">
            <Grid item xs={12} md={4}>
              <Link className="text-link" to="/history">
                <FeaturedInfo
                  title="One Time Spendings"
                  comparedTo="Last Month"
                  value="120"
                />
              </Link>
            </Grid>
          </Tooltip>
          <Tooltip title="Log One Time Purchase" placement="top">
            <Grid item xs={12} md={2} mr={1} mb={2}>
              <NewItem default="One-Time"></NewItem>
            </Grid>
          </Tooltip>
          <Grid item mr={2} xs={12} lg={8}>
            <Saving finances={Finances}></Saving>
          </Grid>
        </Grid>
      ) : (
        <Setup></Setup>
      )}

      <Grid container justifyContent="center">
        <Grid item mr={2} xs={12} md={5}>
          <FixedCosts
            name={"Utilities"}
            items={utilItems}
            total={Finances.utilities}
          ></FixedCosts>
        </Grid>
        <Grid item xs={12} md={5}>
          <FixedCosts
            name={"Entertainment"}
            items={entertainmentItems}
            total={Finances.entertainment}
          ></FixedCosts>
        </Grid>
        <Grid item mr={2} xs={12} md={5}>
          <FixedCosts
            name={"Education"}
            items={educationItems}
            total={Finances.education}
          ></FixedCosts>
        </Grid>
        <Grid item xs={12} md={5}>
          <FixedCosts name={"MISC"} total={Finances.misc}></FixedCosts>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
