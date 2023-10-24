import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";

export default function Rounds() {
  const dispatch = useDispatch();

  const [roundNumber, setRoundNumber] = useState(1);
  const [gameId, setGameId] = useState(""); // needs to be the actual game_id

  useEffect(() => {
    dispatch({ type: "FETCH_ROUNDS" });
  }, []);

  const roundList = useSelector((store) => store.roundReducer);

  const handleClick = () => {
    const newRound = {
      game_id: Number(gameId),
      round_number: Number(roundNumber),
    };

    // Dispatch the action with the new target data
    dispatch({ type: "ADD_ROUND", payload: newRound });

    // setGameId(1); // needs to be the actual game_id
    setRoundNumber(1);
  };

  return (
    <div className="page-container">
      <h1>Rounds Admin Page</h1>
      <Card style={{ width: "50%", margin: "0 auto" }}>
        <CardContent>
          <Typography variant="h7">Round Data</Typography>
          <br />
          <TextField
            className="form-control"
            placeholder="Game ID"
            variant="outlined"
            required
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
          />
          <br />
          <TextField
            className="form-control"
            placeholder="Round Number"
            variant="outlined"
            required
            value={roundNumber}
            onChange={(e) => setRoundNumber(e.target.value)}
          />
          <br />
          <br />
          <Button onClick={handleClick} variant="contained">
            Add
          </Button>
        </CardContent>
      </Card>
      <ul>
        {roundList.map((round) => (
          <li key={round.round_id} style={{ color: "white" }}>
            Game ID: {round.game_id} - Round #: {round.round_number}{" "}
            <Button
              onClick={() =>
                dispatch({ type: "DELETE_ROUND", payload: round.game_id })
              }
              variant="contained"
              style={{ backgroundColor: "crimson" }}
            >
              Delete
            </Button>
            <br />
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}
