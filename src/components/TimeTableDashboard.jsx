import React from "react";
import TimeTableCopy from "./TimeTableGrid";
import Faculty from "./Faculty";
import classes from "../style/TimeTableDashboard.module.css";
import TimeTableButtons from "./TimeTableButtons";

export default function TimeTableDashboard() {
  return (
    <div className={classes.tablegrid}>
      <TimeTableButtons />
      <TimeTableCopy />
      <Faculty />
    </div>
  );
}
