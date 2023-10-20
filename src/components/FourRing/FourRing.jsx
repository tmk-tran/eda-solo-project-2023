import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import GameTimer from "../GameTimer/GameTimer"; // timer keeps resetting, figure out issue
import { useDispatch, useSelector } from "react-redux";
// ~~~~~~~~~~~~~~~ Style ~~~~~~~~~~~~~~~~~~
import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import "./FourRing.css";
// ~~~~~~~~~~~~~~~ Hooks ~~~~~~~~~~~~~~~~~~
import getCookie from "../../hooks/cookie";

export default function FourRing() {
  const dispatch = useDispatch();
  const history = useHistory();

  // ~~~~~~~~~~ Fourth Ring State ~~~~~~~~~~
  const [pointsFourth, setPointsFourth] = useState(getCookie("fourth") || 0);
  // ~~~~~~~~~~ Inner 3 Ring State ~~~~~~~~~~
  const [pointsOuter, setPointsOuter] = useState(getCookie("outer") || 0);
  const [pointsInner, setPointsInner] = useState(getCookie("inner") || 0);
  const [bulls, setBulls] = useState(getCookie("bulls") || 0);
  const [showSettings, setShowSettings] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [replaceName, setReplaceName] = useState(false);
  const [roundName, setRoundName] = useState(getCookie("round") || "4-Ring");
  // Round scores and round headers
  const [roundScores, setRoundScores] = useState([]); // Array to store round scores
  const [roundHeaders, setRoundHeaders] = useState([1]); // Array to store round headers
  const [totalRoundScores, setTotalRoundScores] = useState(0);
  console.log("TOTAL SCORES OF ROUNDS = ", totalRoundScores);

  // Round numbers
  const [roundNumber, setRoundNumber] = useState(1);

  // Game State ~~~~~~~~~~~~~~~~~~~~~~~~~
  const [notes, setNotes] = useState(getCookie("notes") || "Notes");
  const [totalScore, setTotalScore] = useState(
    pointsFourth + pointsOuter + pointsInner + bulls
  );
  const [gameDate, setGameDate] = useState(new Date()); // Initialize with the current date
  console.log("GAME DATE IS:", gameDate);
  const [gameNotes, setGameNotes] = useState("");
  const [targetName, setTargetName] = useState("4-Ring");
  const [targetScore, setTargetScore] = useState(0); // update this when we decide what it is for

  useEffect(() => {
    // Calculate the total score whenever any of the individual scores change
    const totalScore =
      Number(pointsFourth) +
      Number(pointsOuter) +
      Number(pointsInner) +
      Number(bulls);

    // Update the total score in the component state
    setTotalScore(totalScore);
  }, [pointsFourth, pointsOuter, pointsInner, bulls]);

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
  console.log("New Game ID:", newGameId);

  // format the date to mm/dd/yyyy
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US");
  }

  const clearScores = (e) => {
    e.preventDefault();

    // Clear the input fields
    setGameDate(gameDate);
    setNotes("Notes");
    setPointsFourth(0);
    setPointsOuter(0);
    setPointsInner(0);
    setBulls(0);
    setTotalScore(0);
    setRoundNumber(1);
    resetScore();
    // alert("Added Target!");
  };

  const clickFourth = () => {
    const newCount = Number(pointsFourth) + 7;
    document.cookie = `fourth=${newCount}`;
    setPointsFourth(newCount);
  };

  // Function to handle clicking on the zone and recording points
  const clickOuter = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent outer zone click action
    const newCount = Number(pointsOuter) + 8;

    // This is making a cookie called count with the newCount amount
    // It will replace anything called count
    document.cookie = `outer=${newCount}`;
    setPointsOuter(newCount);
  };

  const clickInner = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent outer zone click action
    const newCount = Number(pointsInner) + 9;
    document.cookie = `inner=${newCount}`;
    setPointsInner(newCount);
  };

  const clickBull = (e) => {
    e.stopPropagation(); // Stop event propagation to prevent outer zone click action
    const newCount = Number(bulls) + 10;
    document.cookie = `bulls=${newCount}`;
    setBulls(newCount);
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
    const newRoundScore =
      Number(pointsOuter) + Number(pointsInner) + Number(bulls);
    // Create a new array of round scores with the current total score
    const newRoundScores = [...roundScores, totalScore];
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
    };
    console.log("ROUND DATA IS: ", roundData); // remove after confirmation
    const roundScoreData = {
      round_id: roundId,
      round_score: newRoundScore,
    };
    console.log("ROUND SCORE DATA IS: ", roundScoreData); // remove after confirmation

    dispatch({ type: "ADD_ROUND", payload: roundData });
    dispatch({ type: "ADD_ROUND_SCORE", payload: roundScoreData }); // check roundScoreData

    setRoundNumber(roundNumber + 1);
    console.log("ROUND NUMBER IS: ", roundNumber); // remove after confirmation

    setRoundScores(newRoundScores);
    setRoundHeaders([...roundHeaders, newRoundHeader]);
    setPointsFourth(0);
    setPointsOuter(0);
    setPointsInner(0);
    setBulls(0);
    setTotalScore(0);
  };

  const addGame = () => {
    const newGame = {
      game_date: formatDate(gameDate),
      game_notes: gameNotes,
      target_name: targetName,
      target_score_value: targetScore, // what is this representing??? -- decide later
      total_game_score: totalRoundScores, // this is representing the total score of all the rounds for the game
    };

    // Dispatch the action with the new target data
    dispatch({ type: "ADD_GAME", payload: newGame });

    // Clear the input fields
    setGameDate(gameDate);
    setGameNotes("Notes");
    setTotalScore(0);
    setTargetName("");
    alert("Added Game!");
    history.push("/success");
    resetScore();
  };

  const resetScore = () => {
    // Clear the cookies related to the score
    document.cookie = "fourth=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "outer=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "inner=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = "bulls=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    setPointsFourth(0);
    setPointsOuter(0);
    setPointsInner(0);
    setBulls(0);
    setTotalScore(0);
    setRoundScores([]);
    setRoundHeaders([]);
  };

  return (
    <>
      <div className="top-buttons">
        <button onClick={() => history.push("/games")}>Cancel</button>
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
                  <p>7's: {pointsFourth}</p>
                  <p>8's: {pointsOuter}</p>
                  <p>9's: {pointsInner}</p>
                  <p>Bull's: {bulls}</p>
                  <p style={{ fontWeight: "bold" }}>
                    Total: {totalScore} points
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
      <div className="container">
        <div className="fourth-ring" onClick={clickFourth}>
          <div className="third-ring" onClick={clickOuter}>
            <div className="three-ring-inner" onClick={clickInner}>
              <div className="three-ring-bulls" onClick={clickBull}></div>
            </div>
          </div>
        </div>
      </div>
      <FormControl className="form-control" fullWidth>
        <Button
          variant="contained"
          onClick={addRound} // Make sure the button adds a round
        >
          Add Round
        </Button>
      </FormControl>
    </>
  );
}
