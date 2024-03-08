import classes from "../style/TimeTableGrid.module.css";
export default function TimeTableGrid() {
  return (
    <>
      <div className={classes.container}>
        <table>
          <tr>
            <th>
              <div className={classes.columnheading}>Time</div>
            </th>
            <th>
              <div className={classes.columnheading}>MON</div>
            </th>
            <th>
              <div className={classes.columnheading}>TUE</div>
            </th>
            <th>
              <div className={classes.columnheading}>WED</div>
            </th>
            <th>
              <div className={classes.columnheading}>THU</div>
            </th>
            <th>
              <div className={classes.columnheading}>FRI</div>
            </th>
            <th>
              <div className={classes.columnheading}>SAT</div>
            </th>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>9:30 AM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.maths}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Priyanka</div>

                <div className={classes.facultysubject}>Mathematics</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>10:00 AM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.english}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Akansha</div>

                <div className={classes.facultysubject}>English</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>10:30 AM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.hindi}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Akansha</div>

                <div className={classes.facultysubject}>Hindi</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>11:00 AM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.science}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Krishna Kripa</div>

                <div className={classes.facultysubject}>Science</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>11:30 AM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.biology}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Krishna Kripa</div>

                <div className={classes.facultysubject}>Biology</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>01:00 PM </div>
            </td>
            <td colSpan="6" style={{ paddingRight: "20px" }}>
              <div className={classes.breaktime}> Lunch Break</div>
            </td>
            {/* <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td> */}
          </tr>
          <tr>
            <td>
              <div className={classes.time}>02:00 PM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.social}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Krishna Kripa</div>

                <div className={classes.facultysubject}>Social Science</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>02:30 PM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.chemistry}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Krishna Kripa</div>

                <div className={classes.facultysubject}>Chemistry</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>03:00 PM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.biology}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Krishna Kripa</div>

                <div className={classes.facultysubject}>Biology</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          <tr>
            <td>
              <div className={classes.time}>03:30 PM</div>
            </td>
            <td>
              <div className={`${classes.facultytime} ${classes.english}`}>
                <div>
                  <img
                    className={classes.facultyphoto}
                    src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR0z05PojcRHiTNrFUseKmoladcd9crZxALRYrnqGn_ANbxN8CZ"
                    alt="profile"
                  />
                </div>
                <div className={classes.facultyname}>Krishna Kripa</div>

                <div className={classes.facultysubject}>Science</div>
              </div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
            <td>
              <div className={classes.facultytime}></div>
            </td>
          </tr>
          {/* <tr>
            <td>
              <div className={classes.time}>03:30 PM</div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td>
            <td>
              <div className={classes.facultytime}>ABC</div>
            </td>
          </tr> */}
        </table>
      </div>
    </>
  );
}

// import React from 'react'
// import classes from "../stylecss/TimeTable.module.css";
// export default function TimeTable() {
//   return (
//     <>
//       <div className={classes.body}>
//         <div className={classes.container}>
//           <div className={classes.day}>
//             <div>1</div>
//             <div>Mon</div>
//             <div>Tue</div>
//             <div>Wed</div>
//             <div>Thu</div>
//             <div>Fri</div>
//             <div>Sat</div>
//           </div>
//           <div>
//             <div className={classes.time}>09:30 AM</div>
//             <div className={classes.time}>10:00 AM</div>
//             <div className={classes.time}>10:30 AM</div>
//             <div className={classes.time}>11:00 AM</div>
//             <div className={classes.time}>11:30 AM</div>
//             <div className={classes.time}>01:00 PM</div>
//             <div className={classes.time}>01:30 PM</div>
//             <div className={classes.time}>02:00 PM</div>
//             <div className={classes.time}>02:30 PM</div>
//             <div className={classes.time}>03:00 PM</div>
//             <div className={classes.time}>03:30 PM</div>
//           </div>
//           <div className={classes.periodstable}>
//             <div className={classes.period}>a</div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//             <div className={classes.period}></div>
//           </div>
//         </div>
//       </div>
//     
//   );
// }
