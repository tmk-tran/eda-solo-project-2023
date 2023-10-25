import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import GameTimer from "../GameTimer/GameTimer"; // timer keeps resetting, figure out issue
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import ModeStandbyIcon from "@mui/icons-material/ModeStandby";
// ~~~~~~~~~~~~~~~ Hooks ~~~~~~~~~~~~~~~~~~
import getCookie from "../../hooks/cookie";
import CustomizedTables from "../TestComponent/TestComponent";

export default function QuickRound() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showSettings, setShowSettings] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [replaceName, setReplaceName] = useState(false);
  const [roundName, setRoundName] = useState(
    getCookie("round") || "Quick Round"
  );
  // Define state to manage round scores and round headers
  const [roundScores, setRoundScores] = useState([]); // Array to store round scores
  const [roundHeaders, setRoundHeaders] = useState([1]); // Array to store round headers
  const [totalRoundScores, setTotalRoundScores] = useState(0);
  console.log("TOTAL SCORES OF ROUNDS = ", totalRoundScores);

  // State to manage round numbers
  const [roundNumber, setRoundNumber] = useState(1);
  // from Games ~~~~~~~~~~~~~~~~~~~~~~~~~
  const [notes, setNotes] = useState(getCookie("notes") || "Notes");
  const [gameDate, setGameDate] = useState(new Date()); // Initialize with the current date
  console.log("GAME DATE IS:", gameDate);
  const [gameNotes, setGameNotes] = useState("");
  const [targetName, setTargetName] = useState("Quick Round");
  const [targetScore, setTargetScore] = useState(0); // for this component, we want to record total shots taken, too
  console.log("TARGET SCORE = ", targetScore);
  // State for Quick Round Scoring ~~~~~~~~~~~~~~~~~~~~~~~~~
  const [hit, setHit] = useState(getCookie("hit_quick") || 0); // hit count for game
  const [hitDisplay, setHitDisplay] = useState(getCookie("hit_quick_display") || 0); // hit count for display
  const [totalHits, setTotalHits] = useState(0); // count total hits
  const [miss, setMiss] = useState(getCookie("miss_quick") || 0);
  const [totalShots, setTotalShots] = useState(0); // for user to set total shots per round
  const [userTargetInput, setUserTargetInput] = useState(false);
  console.log("USER TARGET INPUT IS: ", userTargetInput);

  // useEffect(() => {
  //   // Calculate the total score whenever any of the individual scores change
  //   const totalScore = Number(hit) + Number(totalRoundScores); // add something here

  //   // Update the total score in the component state
  //   setTotalHits(totalHits);
  // }, [hit]);

  // Bring in Rounds
  const rounds = useSelector((store) => store.roundReducer);
  console.log("SCORES: ", rounds);
  const roundIds = rounds.map((round, i) => {
    // Check if it's the last score in the array
    if (i === rounds.length - 1) {
      // You've reached the last score, so you can extract the ID
      const rId = round.round_id;
      return rId;
    }
    // If it's not the last object, return null or undefined, or handle it as needed.
    return null;
  });
  // Extract the last round's ID
  const roundId = roundIds.filter((round_id) => round_id !== null)[0];
  console.log("Round ID = ", roundId);

  // Bring in Games
  const games = useSelector((store) => store.gamesReducer);
  console.log("GAMES: ", games);
  const gameIds = games.map((game, i) => {
    // Check if it's the last game in the array
    if (i === games.length - 1) {
      // You've reached the last game, so you can extract the ID
      const newId = game.game_id;
      return newId;
    }
    // If it's not the last game, return null or undefined, or handle it as needed.
    return null;
  });

  // Extract the last game's ID
  const newGameId = gameIds.filter((game_id) => game_id !== null)[0];
  console.log("New Game ID:", newGameId); // not logging correctly right now

  // format the date to mm/dd/yyyy
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US");
  }

  // Record Hits
  const targetHit = () => {
    setHit(hit + 1);
    setHitDisplay(hitDisplay + 1);
  };

  // Record Misses
  const targetMiss = () => {
    setMiss(miss + 1);
  };

  const clearScores = (e) => {
    e.preventDefault();

    // Clear the input fields
    setGameDate(gameDate);
    setNotes("Notes");
    setHit(0);
    setTotalHits(0);
    setTargetScore(0);
    setRoundNumber(1);
    resetScore();
    // alert("Added Target!");
  };

  const toggleSettings = (e) => {
    e.preventDefault();
    setShowSettings(!showSettings);
  };

  const saveNotes = (e) => {
    e.preventDefault();
    document.cookie = `notes=${notes}`;
    setIsEdit(false);
  };

  const saveName = (e) => {
    e.preventDefault();
    document.cookie = `round=${roundName}`;
    setReplaceName(false);
  };

  const addRound = (e) => {
    e.preventDefault();
    //  Ensure there's a game_id before adding rounds
    //   if (newGameId) {

    // Calculate the total score for the current round
    const newRoundScore = Number(hitDisplay);
    // Create a new array of round scores with the current total score
    const newRoundScores = [...roundScores, newRoundScore];
    console.log("NEW ROUND SCORES: ", newRoundScores); // confirmed

    const sumRoundScores = newRoundScores.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );

    console.log("Sum of round scores:", sumRoundScores);
    setTotalRoundScores(sumRoundScores);

    // Increment the round header
    const newRoundHeader = roundHeaders.length + 1;

    const roundData = {
      game_id: newGameId,
      round_number: roundNumber,
      round_score: newRoundScore,
    };
    console.log("ROUND DATA IS: ", roundData); // remove after confirmation

    dispatch({ type: "ADD_ROUND", payload: roundData });
    // dispatch({ type: "ADD_ROUND_SCORE", payload: roundScoreData }); // check roundScoreData

    setRoundNumber(roundNumber + 1);
    console.log("ROUND NUMBER IS: ", roundNumber); // remove after confirmation

    setRoundScores(newRoundScores);
    setRoundHeaders([...roundHeaders, newRoundHeader]);
    // setHit(0);
    setHitDisplay(0);
    setTargetScore(sumRoundScores);
    // setTotalHits(0);
  };

  const shotTotal = Number(hit + miss);
  console.log("SHOT TOTAL IS: ", shotTotal);

  const addGame = () => {
    const newGame = {
      game_id: newGameId,
      game_date: formatDate(gameDate),
      game_notes: gameNotes,
      target_name: targetName,
      target_score_value: shotTotal, // the total shots taken by user
      total_game_score: totalRoundScores, // this is representing the total score of all the rounds for the game
    };

    // Dispatch the action with the new target data
    dispatch({ type: "EDIT_GAME", payload: newGame });

    // Clear counters
    setGameDate(gameDate);
    setGameNotes("Notes");
    // setTotalHits(0);
    setTargetName("");
    setTargetScore(0);
    alert("Added Game!");
    history.push("/results");
    resetScore();
  };

  const resetScore = () => {
    // Clear the cookies related to the score (e.g., hits)
    document.cookie = "hit_quick=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    // Reset the related state variables if needed
    setRoundScores([]);
    setRoundHeaders([]);
  };

  const saveTotalShots = (e) => {
    e.preventDefault();
    document.cookie = `totalShots=${totalShots}`;
    setUserTargetInput(false);
  };

  return (
    <div className="page-container">
      <div className="top-buttons">
        <button
          onClick={() => {
            resetScore(); // Call your resetScores() function here
            history.push("/games");
          }}
        >
          Cancel
        </button>{" "}
        <button onClick={addGame}>Finish</button>
      </div>
      <div>
        <Card>
          <CardContent>
            <div className="game-header">
              {!replaceName ? (
                <div>
                  <Typography variant="h6">{roundName}</Typography>
                </div>
              ) : (
                <input
                  type="text"
                  value={roundName}
                  onChange={(e) => setRoundName(e.target.value)}
                  onBlur={saveName}
                />
              )}
              <button variant="contained" onClick={toggleSettings}>
                <MoreHorizIcon />
              </button>
            </div>
            {showSettings ? (
              <div className="settings-div">
                <div className="round-edit">
                  <Button
                    variant="outlined"
                    onClick={() => setReplaceName(!replaceName)}
                    style={{ fontSize: "10px" }}
                  >
                    <EditIcon />
                    Edit
                  </Button>
                  <br />
                </div>
                <div className="round-table">
                  <table>
                    <thead>
                      <tr>
                        {roundHeaders.map((header) => (
                          <th key={header} className="header">
                            Round {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {roundScores.map((score, index) => (
                          <td key={index} className="score">
                            {score}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ textAlign: "right", fontSize: "12px" }}>
                  <p>Hits: {hit}</p>
                  <p style={{ fontWeight: "bold" }}>
                    Total: {targetScore} points
                  </p>
                  <button onClick={clearScores}>Clear</button>
                </div>
              </div>
            ) : (
              <>
                {isEdit ? (
                  // Render an input field in edit mode
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    onBlur={saveNotes}
                  />
                ) : (
                  // Render the round title
                  <>
                    {/* <GameTimer /> gameId={game_id} */}
                    <Typography
                      variant="h7"
                      onClick={() => {
                        setIsEdit(!isEdit);
                      }}
                    >
                      {notes}
                    </Typography>
                  </>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </div>
      <h1>Quick Round</h1>
      <Card className="trap-hit-card">
        <CardContent>
          <div className="round-display">
            <table>
              <thead>
                <tr>
                  {roundHeaders.map((header) => (
                    <th key={header} className="header">
                      Round {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {roundScores.map((score, index) => (
                    <td key={index} className="score">
                      {score}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
            {/* <CustomizedTables addRound={addRound}/> */}
          </div>
          <div className="trap-hit-display">
            <p>Hits: {hit}</p>
            <p>Hit Display: {hitDisplay}</p>
          </div>
          <div className="trap-hit-button">
            <Button variant="contained" onClick={targetHit}>
              <ModeStandbyIcon />
              Hit
            </Button>
            <Button onClick={targetMiss}>Miss</Button>
            <p>Miss: {miss}</p>
          </div>
          <button onClick={() => setUserTargetInput(!userTargetInput)}>
            total shots
          </button>
          {userTargetInput ? (
            <input
              placeholder="Total Shots"
              value={totalShots}
              onChange={(e) => setTotalShots(e.target.value)}
              onBlur={saveTotalShots}
            ></input>
          ) : (
            <p>Total Shots: {totalShots}</p>
          )}
        </CardContent>
      </Card>
      <FormControl className="form-control" fullWidth>
        <Button
          variant="contained"
          onClick={addRound} // Make sure the button adds a round
        >
          Add Round
        </Button>
      </FormControl>
    </div>
  );
}
