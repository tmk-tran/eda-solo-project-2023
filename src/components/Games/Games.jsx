import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";

import GamesList from "../GamesList/GamesList";
// import "./Games.css";

export default function Games() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Initialize with the current date
  const [gameDate, setGameDate] = useState(new Date().toLocaleDateString()); // .toLocaleString shortens the date to just mm/dd/yyyy
  console.log("GAME DATE IS:", gameDate);
  const [gameNotes, setGameNotes] = useState("");
  const [totalScore, setTotalScore] = useState(0); // named total_game_score
  const [targetName, setTargetName] = useState("");
  const [targetScore, setTargetScore] = useState(0); // named target_score_value
  const [newGame, setNewGame] = useState(false);

  useEffect(() => {
    setNewGame(false);
  }, []);

  const gameList = useSelector((store) => store.gamesReducer);
  const reversedGameList = [...gameList].reverse();
  // const bestRound = useSelector((store) => store.bestRound);

  const startNewGame = () => {
    setNewGame(true);
  };

  const startGame = () => {
    const newGame = {
      game_date: formatDate(gameDate),
      game_notes: gameNotes,
      total_game_score: totalScore,
      target_name: targetName,
      target_score_value: targetScore,
    };

    // Dispatch the action with the new target data
    dispatch({ type: "ADD_GAME", payload: newGame });

    // history.push(`/3-ring`);
    // alert("Added Game!");
  };

  // format the date to mm/dd/yyyy
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US");
  }

  return (
    <>
      <h1>Games Admin</h1>
      <div>
        <Card style={{ width: "60%", margin: "0 auto" }}>
          <CardContent>
            <Button onClick={startNewGame}>Start</Button>
            <br />
            <Typography variant="h5">Game Data</Typography>
            {newGame ? (
              <>
                <TextField
                  className="form-control"
                  placeholder="Date"
                  variant="outlined"
                  required
                  value={gameDate}
                  onChange={(e) => setGameDate(e.target.value)}
                />
                <br />
                <TextField
                  className="form-control"
                  placeholder="Notes"
                  variant="outlined"
                  required
                  value={gameNotes}
                  onChange={(e) => setGameNotes(e.target.value)}
                />
                <br />
                <TextField
                  className="form-control"
                  placeholder="Target Name"
                  variant="outlined"
                  required
                  value={targetName}
                  onChange={(e) => setTargetName(e.target.value)}
                />
                <br />
                <Typography variant="h7">Target Score Value:</Typography>
                <br />
                <TextField
                  className="form-control"
                  placeholder="Score Value"
                  variant="outlined"
                  required
                  value={targetScore}
                  onChange={(e) => setTargetScore(e.target.value)}
                />
                <br />
                <Typography variant="h7">Total Score:</Typography>
                <br />
                <TextField
                  className="form-control"
                  placeholder="Total Score"
                  variant="outlined"
                  required
                  value={totalScore}
                  onChange={(e) => setTotalScore(e.target.value)}
                />
                <br />
                <Button variant="contained" onClick={startGame}>
                  Finish
                </Button>
              </>
            ) : (
              <>
                <p>Start a Game!</p>
              </>
            )}
          </CardContent>
        </Card>
        <br />
        <br />
        <div>
          {reversedGameList.map((target) => (
            <div key={target.game_id} style={{ marginBottom: "15px" }}>
              <GamesList target={target} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
