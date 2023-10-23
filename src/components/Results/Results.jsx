import React from "react";
import { useSelector } from "react-redux";

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
  const currentGame = useSelector((store) => store.gamesReducer);
  console.log("CURRENT GAME = ", currentGame);
  const currGameId = currentGame[currentGame.length - 1].game_id;
  console.log("CURRENT GAME ID = ", currGameId);
  const rounds = useSelector((store) => store.roundReducer);
  console.log("ROUNDS ARE:", rounds);
  const roundNumberMatchGameId = rounds.filter(
    (roundScore) => roundScore.game_id === currGameId
  );
  console.log("ROUND NUMBER MATCH GAME ID IS:", roundNumberMatchGameId);
  const bestRoundScore = useSelector((store) => store.bestRound);
  console.log("BEST ROUND SCORE = ", bestRoundScore);
  const roundsMatchGameId = bestRoundScore.filter(
    (rounds) => rounds.game_id === currGameId
  ); // change back to currGameId after
  console.log("ROUNDS MATCH GAME ID = ", roundsMatchGameId);

  return (
    <div>
      <h1 className="results-header">Results</h1>
      <Card>
        <CardContent>
          <h2 className="results-display-head">
            <EmojiEventsOutlinedIcon style={{ fontSize: "40px" }} />
            Score: Display Best Here
            <EmojiEventsOutlinedIcon style={{ fontSize: "40px" }} />
          </h2>
          <Card style={{ width: "80%", margin: "0 auto" }}>
            <CardContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Round Number</TableCell>
                      <TableCell>Round Score</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {roundNumberMatchGameId.map((round, i) => (
                      <TableRow key={i}>
                        <TableCell>Round # {round.round_number}</TableCell>
                        <TableCell>
                          {roundsMatchGameId[i] &&
                            `${roundsMatchGameId[i].best_round_score} Points`}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
