// import React, { useState, useEffect } from "react";
// // ~~~~~~~~~~~~~~~ Hooks ~~~~~~~~~~~~~~~~~~
// import getCookie from "../../hooks/cookie";
// import RoundTracker from "../RoundTracker/RoundTracker";

// export default function TestComp() {
//   const [showSettings, setShowSettings] = useState(false);
//   const [isEdit, setIsEdit] = useState(false);
//   const [replaceName, setReplaceName] = useState(false);
//   const [roundName, setRoundName] = useState(
//     getCookie("round") || "Test Round"
//   );
//   // Define state to manage round scores and round headers
//   const [roundScores, setRoundScores] = useState([]); // Array to store round scores
//   const [roundHeaders, setRoundHeaders] = useState([1]); // Array to store round headers
//   const [totalRoundScores, setTotalRoundScores] = useState(0);
//   console.log("TOTAL SCORES OF ROUNDS = ", totalRoundScores);

//   // State to manage round numbers
//   const [roundNumber, setRoundNumber] = useState(1);

//   // from Games ~~~~~~~~~~~~~~~~~~~~~~~~~
//   const [notes, setNotes] = useState(getCookie("notes") || "Notes");
//   const [totalScore, setTotalScore] = useState(0);
//   const [gameDate, setGameDate] = useState(new Date()); // Initialize with the current date
//   console.log("GAME DATE IS:", gameDate);
//   const [gameNotes, setGameNotes] = useState("");
//   const [targetName, setTargetName] = useState("3-Ring");
//   const [targetScore, setTargetScore] = useState(0); // update this when we decide what it is for
//   return (
//     <>
//       <RoundTracker
//         showSettings={showSettings}
//         setShowSettings={setShowSettings}
//         isEdit={isEdit}
//         setIsEdit={setIsEdit}
//         replaceName={replaceName}
//         setReplaceName={setReplaceName}
//         roundName={roundName}
//         setRoundName={setRoundName}
//         roundScores={roundScores}
//         setRoundScores={setRoundScores}
//         roundHeaders={roundHeaders}
//         setRoundHeaders={setRoundHeaders}
//         totalRoundScores={totalRoundScores}
//         setTotalRoundScores={setTotalRoundScores}
//         roundNumber={roundNumber}
//         setRoundNumber={setRoundNumber}
//         notes={notes}
//         setNotes={setNotes}
//         totalScore={totalScore}
//         setTotalScore={setTotalScore}
//         gameDate={gameDate}
//         setGameDate={setGameDate}
//         gameNotes={gameNotes}
//         setGameNotes={setGameNotes}
//         targetName={targetName}
//         setTargetName={setTargetName}
//         targetScore={targetScore}
//         setTargetScore={setTargetScore}
//       />
//     </>
//   );
// }

import React from "react";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(
//   name = "Name",
//   calories = 0,
//   fat = number,
//   carbs = number,
//   protein = number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function CustomizedTables() {
  // Define state to manage round scores and round headers
  // const [roundScores, setRoundScores] = useState([]); // Array to store round scores
  // const [roundHeaders, setRoundHeaders] = useState([1]); // Array to store round headers


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* {rounds.map((round_number, i) => (
              <StyledTableCell key={i}>Round {round_number}</StyledTableCell>
            ))} */}
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            {/* {roundScores.map((score, i) => (
              <StyledTableCell key={i} component="th" scope="row">
                {score}
              </StyledTableCell>
            ))} */}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
