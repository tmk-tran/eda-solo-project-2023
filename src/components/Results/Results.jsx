import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
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
  TableCell,
} from "@mui/material";

import "./Results.css";

export default function Results() {
  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   dispatch({ type: "FETCH_BEST" });
  // }, []);

  const currentGame = useSelector((store) => store.gamesReducer);
  console.log("CURRENT GAME = ", currentGame);
  const currGameId = currentGame[currentGame.length - 1].game_id;
  console.log("CURRENT GAME ID = ", currGameId);
  const finalGameScore = currentGame[currentGame.length - 1].total_game_score;
  console.log("GAME SCORE in Results = ", finalGameScore);

  const rounds = useSelector((store) => store.roundReducer);
  console.log("ROUNDS ARE:", rounds);

  const roundsMatchGameId = rounds.filter(
    (rounds) => rounds.game_id === currGameId
  );
  console.log("ROUNDS MATCH:", roundsMatchGameId);

  useEffect(() => {
    // dispatch({ type: "FETCH_BEST", payload: currGameId });
  }, []);

  return (
    <div>
      <Card>
        <CardContent>
          <h1 className="results-header">Results</h1>
          <h2 className="results-display-head">
            <EmojiEventsOutlinedIcon style={{ fontSize: "40px" }} />
            Score: {finalGameScore} points
            <EmojiEventsOutlinedIcon style={{ fontSize: "40px" }} />
          </h2>
          <Card style={{ width: "80%", margin: "0 auto" }} elevation={8}>
            <CardContent>
              <TableContainer component={Paper} elevation={5}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Round</TableCell>
                      <TableCell>Round Score</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {roundsMatchGameId.map((round, i) => (
                      <TableRow key={i}>
                        <TableCell># {round.round_number}</TableCell>
                        <TableCell>
                          {roundsMatchGameId[i] &&
                            `${roundsMatchGameId[i].round_score} Points`}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </CardContent>
        <FormControl className="form-control" fullWidth>
          <Button variant="contained" onClick={() => history.push("/games")}>
            Finish
          </Button>
        </FormControl>
      </Card>
    </div>
  );
}
