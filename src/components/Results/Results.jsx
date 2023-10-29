import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import ClearIcon from "@mui/icons-material/Clear";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { styled } from "@mui/material/styles";
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
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import "./Results.css";
import Celebration from "../Celebration/Celebration";

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
  // "&:last-child td, &:last-child th": {
  //   border: 0,
  // },
}));

export default function Results() {
  const dispatch = useDispatch();
  const history = useHistory();

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

  return (
    <div className="results-background">
      <Card id="results-card-container">
        <CardContent>
          <Button variant="outlined" onClick={() => history.push("./train")}>
            <ClearIcon />
          </Button>
          <Celebration />
          <h2 className="results-display-head">
            <Card id="results-card" elevation={10}>
              <CardContent>
                <Typography variant="h4">Results</Typography>
              </CardContent>
            </Card>
          </h2>
          <Card id="results-card2" elevation={10}>
            <CardContent>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Card
                  elevation={7}
                  style={{ width: "50%", marginRight: "2px" }}
                >
                  <CardContent style={{ height: "88%" }}>
                    <div
                      style={{
                        textAlign: "center",
                        backgroundColor: "rgb(102 116 102)",
                        borderRadius: "15px",
                        height: "100%",
                      }}
                    >
                      <EmojiEventsOutlinedIcon
                        style={{ fontSize: "60px", margin: "20px auto" }}
                      />
                      <Typography variant="h6">Score Total:</Typography>
                      <Typography variant="h5" style={{ fontWeight: "bold" }}>
                        {finalGameScore} points
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
                <TableContainer
                  component={Paper}
                  elevation={6}
                  style={{ width: "50%" }}
                >
                  <Table sx={{ minWidth: 100 }} className="results-table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell style={{ fontWeight: "bold" }}>
                          Round
                        </StyledTableCell>
                        <StyledTableCell style={{ fontWeight: "bold" }}>
                          Round Score
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {roundsMatchGameId.map((round, i) => (
                        <StyledTableRow key={i}>
                          <StyledTableCell>
                            # {round.round_number}
                          </StyledTableCell>
                          <StyledTableCell style={{ fontWeight: "bold" }}>
                            {round.round_score} Points
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
