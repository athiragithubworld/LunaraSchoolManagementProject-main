import React from "react";
import classes from "../style/MainComponent.module.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TimeTable from "./TimeTableCopy1";
import Faculty from "./Faculty";
import TimeTableCopy from "./TimeTableGrid";
import TimeTableDashboard from "./TimeTableDashboard";

export default function MainComponent() {
  return (
    <>
      {/* <div className={classes.navbar}> */}
      <Navbar />

      <div className={classes.maincomponentwraper}>
        <Sidebar />
        <TimeTableDashboard />
        {/* <TimeTable /> */}

        {/* <TimeTableCopy />

        <Faculty /> */}
      </div>
    </>
  );
}
