import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import "./GamesList.css";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
// ~~~~~~~~~~~~~~~ Sweet Alert ~~~~~~~~~~~~~~~~~~
import Swal from "sweetalert2/dist/sweetalert2.js";
import "animate.css";

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

export default function GamesList({ target, roundScores }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [gameId, setGameId] = useState("");
  const [editGameDate, setEditGameDate] = useState(
    formatDate(target.game_date)
  );
  const [editGameNotes, setEditGameNotes] = useState(target.game_notes);
  const [editTargetName, setEditTargetName] = useState(target.target_name);
  const [editScore, setEditScore] = useState(target.target_score_value);
  const [editTotalScore, setEditTotalScore] = useState(target.total_game_score);

  // const rounds = useSelector((store) => store.roundReducer);
  // const roundScores = rounds.map((round) => round.round_score);
  // console.log(roundScores);

  function handleEdit() {
    setEdit(!edit);
    setEditGameDate(formatDate(target.game_date));
    setGameId(target.game_id);
  }

  const saveEdit = () => {
    console.log("clicked saveEdit");
    if (editScore === "") {
      editScore = 0;
      // update later, when decided on what score is used for
    }

    const editedItem = {
      game_id: gameId,
      game_date: editGameDate,
      game_notes: editGameNotes,
      target_name: editTargetName,
      target_score_value: editScore,
      total_game_score: editTotalScore,
    };

    dispatch({ type: "EDIT_GAME", payload: editedItem });

    setEdit(false);
    savedAlert();
  };

  // format the date to mm/dd/yyyy
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US");
  }

  // Find the largest score using reduce
  const largestScore = roundScores.reduce((maxScore, round) => {
    return Math.max(maxScore, round.round_score);
  }, -Infinity); // Start with negative infinity to ensure any score is greater
  // Now, `largestScore` contains the largest score

  const sweetAlert = () => {
    Swal.fire({
      title: "Delete Game?",
      width: 600,
      padding: "3em",
      color: "#716add",
      // background: "#fff url(/images/trees.png)",
      backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "DELETE_GAME",
          payload: target.game_id,
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const savedAlert = () => {
    Swal.fire({
      title: "Game Saved!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      confirmButtonColor: "#3085d6",
    });
  };

  return (
    <Card id="games-list-card">
      <CardContent>
        <div className="list-header">
          <Button
            variant="outlined"
            color="info"
            onClick={handleEdit}
            style={{ marginLeft: "auto" }}
          >
            {!edit ? (<MoreHorizIcon />):(<ArrowBackIcon />)}
            {/* <MoreHorizIcon /> */}
          </Button>
        </div>
        <hr />
        {target.user_id && edit ? (
          // Render an input field in edit mode
          <div className="edit-mode">
            <Card id="edit-card" elevation={8} style={{ margin: "0 auto" }}>
              <List>
                <Typography
                  variant="h5"
                  style={{
                    textAlign: "center",
                    backgroundColor: "rgb(18 29 94)",
                    color: "ghostwhite",
                    fontFamily: "avenir",
                  }}
                >
                  Edit Game
                </Typography>
                <br />
                <ListItem>
                  <TextField
                    label="Date"
                    type="date"
                    value={editGameDate}
                    onChange={(e) => setEditGameDate(e.target.value)}
                    fullWidth
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Notes"
                    multiline
                    maxRows={3}
                    value={editGameNotes}
                    onChange={(e) => setEditGameNotes(e.target.value)}
                    fullWidth
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Target Name"
                    type="text"
                    value={editTargetName}
                    onChange={(e) => setEditTargetName(e.target.value)}
                    fullWidth
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Total Game Score"
                    type="number"
                    value={editScore}
                    onChange={(e) => setEditScore(e.target.value)}
                    fullWidth
                    style={{ marginRight: "5px" }}
                  />
                  <TextField
                    label="Target Score Value"
                    type="number"
                    value={editTotalScore}
                    onChange={(e) => setEditTotalScore(e.target.value)}
                    fullWidth
                    style={{ marginLeft: "5px" }}
                  />
                </ListItem>
                <div className="list-buttons">
                  <Button
                    onClick={sweetAlert}
                    variant="contained"
                    style={{ backgroundColor: "crimson" }}
                  >
                    Delete
                  </Button>
                  <Button onClick={saveEdit}>Save</Button>
                </div>
              </List>
            </Card>
          </div>
        ) : (
          // Render the formatted date in non-edit mode
          <div className="game-list-display-container">
            <Table sx={{ minWidth: 250, marginLeft: "auto" }} size="small">
              <TableHead>
                <TableRow sx={{ "&:last-child th": { border: 0 } }}>
                  <StyledTableCell>
                    <Typography variant="h6">
                      Date: {formatDate(target.game_date)}
                    </Typography>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell>
                    <EmojiEventsOutlinedIcon />
                    Best Round: {largestScore} points
                  </StyledTableCell>
                </TableRow>
                <StyledTableRow>
                  <StyledTableCell className="game-history">
                    <ListItemText primary="Notes: " />
                    {target.game_notes !== (null || "") ? (
                      target.game_notes
                    ) : (
                      <SpeakerNotesOffIcon />
                    )}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell className="game-history">
                    <ListItem
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <ListItemText primary="Target: " />
                      <Typography style={{ fontWeight: "bold" }}>
                        {target.target_name !== (null || "") ? (
                          target.target_name
                        ) : (
                          <DriveFileRenameOutlineIcon />
                        )}
                      </Typography>
                    </ListItem>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell className="game-history">
                    <ListItem
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <ListItemText primary="Total Score: " />
                      <Typography style={{ fontWeight: "bold" }}>
                        {target.total_game_score}
                      </Typography>
                    </ListItem>
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell className="game-history">
                    <ListItem
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <ListItemText primary="Game Score: " />
                      <Typography style={{ fontWeight: "bold" }}>
                        {target.target_score_value !== (null || 0)
                          ? target.target_score_value
                          : "None Set"}
                      </Typography>
                    </ListItem>
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
            <Card
              className="round-info"
              elevation={7}
              style={{ backgroundColor: "#131434cf" }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "ghostwhite",
                  }}
                >
                  Round
                </Typography>
                <br />
                {roundScores.map((round, index) => (
                  <div key={index} style={{ display: "flex" }}>
                    <Typography id="round-scores" variant="body1">
                      #{index + 1}: {round.round_score} points
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
