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
  const bestRoundScore = useSelector((store) => store.bestRound);
  console.log("BEST ROUND SCORE = ", bestRoundScore);

  return (
    <div>
      <h1 className="results-header">Results</h1>
      <Card>
        <CardContent>
          <h2 className="results-display-head">
            <EmojiEventsOutlinedIcon style={{ fontSize: "40px" }} />
            Score: Display Best Here
          </h2>
          <Card style={{ width: "50%", margin: "0 auto" }}>
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
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Score</TableCell>
                    </TableRow>
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
