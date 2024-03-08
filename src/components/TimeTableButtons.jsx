import React from 'react'
import classes from '../style/TimeTableButton.module.css';
import { HiPencil } from "react-icons/hi";
import { FiShare2 } from "react-icons/fi";

export default function TimeTableButtons() {
  return (
    <div className={classes.buttoncontainer}>
      {/*  */}
      <span>
        <select className={classes.timetable_classbutton} id="class">
          <option value="">Class </option>
          <option value="saab">Class 1</option>
          <option value="opel">Class 1</option>
          <option value="audi">Class 1</option>
        </select>

        <span>
          <select className={classes.timetable_classbutton} id="section">
            <option value="volvo">Section </option>
            <option value="saab">Section 1</option>
            <option value="opel">Section 2</option>
            <option value="audi">Section 3</option>
          </select>
        </span>
      </span>
      {/* ------- */}
      <span>
        <button className={classes.faculty_classbutton}>
          <HiPencil />
        </button>
        {/* <select className={classes.faculty_classbutton} id="class">
          <option value="volvo">Class </option>
          <option value="saab">Class 1</option>
          <option value="opel">Class 1</option>
          <option value="audi">Class 1</option>
        </select> */}

        <span>
          <button className={classes.faculty_sharebutton}>
            {" "}
            Share <FiShare2 />{" "}
          </button>
          {/* <select className={classes.faculty_classbutton} id="section">
            <option value="volvo">Section </option>
            <option value="saab">Section 1</option>
            <option value="opel">Section 2</option>
            <option value="audi">Section 3</option>
          </select> */}
        </span>
      </span>
    </div>
  );
}
