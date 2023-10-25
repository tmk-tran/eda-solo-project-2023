import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
} from "@mui/material";

import "./GamesList.css";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SpeakerNotesOffIcon from "@mui/icons-material/SpeakerNotesOff";
import VideogameAssetOffIcon from "@mui/icons-material/VideogameAssetOff";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

export default function GamesList({ target }) {
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

  function handleEdit() {
    setEdit(!edit);
    setEditGameDate(formatDate(target.game_date));
    setGameId(target.game_id);
  }

  const saveEdit = () => {
    console.log("clicked saveEdit");
    if (editScore === "") {
      // update later, when decided on what score is used for
      editScore = 0;
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
  };

  // format the date to mm/dd/yyyy
  function formatDate(inputDate) {
    const date = new Date(inputDate);
    return date.toLocaleDateString("en-US");
  }

  return (
    <Card style={{ margin: "0 auto" }}>
      <CardContent>
        <div className="list-header">
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleEdit}
            style={{ marginLeft: "auto" }}
          >
            <MoreHorizIcon />
          </Button>
        </div>
        <hr />
        {target.user_id && edit ? (
          // Render an input field in edit mode
          <div className="edit-mode">
            <List>
              <ListItem>
                <label>Date:</label>
                <TextField
                  type="date"
                  value={editGameDate}
                  onChange={(e) => setEditGameDate(e.target.value)}
                />
              </ListItem>
              <ListItem>
                <TextField
                  label="Notes"
                  multiline
                  maxRows={5}
                  value={editGameNotes}
                  onChange={(e) => setEditGameNotes(e.target.value)}
                />
              </ListItem>
              <ListItem>
                <label>Name:</label>
                <TextField
                  type="text"
                  value={editTargetName}
                  onChange={(e) => setEditTargetName(e.target.value)}
                />
              </ListItem>
              <ListItem>
                <label>Score:</label>
                <TextField
                  type="text"
                  value={editScore}
                  onChange={(e) => setEditScore(e.target.value)}
                />
              </ListItem>
              <ListItem>
                <label>Total Score:</label>
                <TextField
                  type="text"
                  value={editTotalScore}
                  onChange={(e) => setEditTotalScore(e.target.value)}
                />
              </ListItem>
              {target.user_id &&
                edit && ( // Check if user.id exists AND edit mode=true
                  <div className="list-buttons">
                    <Button
                      onClick={() =>
                        dispatch({
                          type: "DELETE_GAME",
                          payload: target.game_id,
                        })
                      }
                      variant="contained"
                      style={{ backgroundColor: "crimson" }}
                    >
                      Delete
                    </Button>
                    <Button onClick={saveEdit}>Save</Button>
                  </div>
                )}
            </List>
          </div>
        ) : (
          // Render the formatted date in non-edit mode
          <List
            sx={{
              "--ListItem-minHeight": "45px",
              "--List-padding": "5px",
              "--List-radius": "20px",
              "--List-gap": "5px",
            }}
          >
            Date: {formatDate(target.game_date)}
            <div className="game-data-line">
              <EmojiEventsOutlinedIcon />
              {/* {bestRound.map((best) => (
                  <span key={best.game_id} style={{ marginBottom: "15px" }}>
                    {best.best_round_score}
                  </span>
                ))} */}
            </div>
            <ListItem>
              Notes:{" "}
              {target.game_notes !== (null || "") ? (
                target.game_notes
              ) : (
                <SpeakerNotesOffIcon />
              )}
            </ListItem>
            <ListItem>
              Target Name:{" "}
              {target.target_name !== (null || "") ? (
                target.target_name
              ) : (
                <DriveFileRenameOutlineIcon />
              )}
            </ListItem>
            <ListItem>Total Game Score: {target.total_game_score}</ListItem>
            <ListItem>
              Target Value:{" "}
              {target.target_score_value !== (null || 0) ? (
                target.target_score_value
              ) : (
                <VideogameAssetOffIcon />
              )}
              <br />
            </ListItem>
          </List>
        )}
      </CardContent>
    </Card>
  );
}
