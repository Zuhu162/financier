import React, { useState, useEffect } from "react";
import OneTimeTable from "../oneTimeTable";
import axios from "axios";

export default function History() {
  const [oneTime, setOneTime] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get(
          `/users/${localStorage.getItem("currentUser")}`
        );
        setOneTime(res.data.OneTime);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <h1>
      <OneTimeTable data={oneTime}></OneTimeTable>
    </h1>
  );
}
