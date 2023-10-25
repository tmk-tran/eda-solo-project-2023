import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import "./GamesList.css";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

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
  // const [bestRoundGameId, setBestRoundGameId] = useState(target.game_id);
  // console.log(bestRoundGameId);

  // const bestRound = useSelector((store) => store.bestRound);
  // const bestScore = bestRound.map((game) => {
  //   if (game.game_id === 57) {
  //     return game.best_round_score;
  //   }
  //   // You can choose to return a default value or null for games that don't match the specificGameId.
  //   return null;
  // });
  // console.log(bestRound);

  useEffect(() => {
    dispatch({ type: "FETCH_GAMES" });
  }, []);

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
    <div>
      <Card style={{ width: "65%", margin: "0 auto" }}>
        <CardContent>
          <div className="list-header">
            <Button onClick={handleEdit}>Edit</Button>
          </div>
          <hr />
          {edit ? (
            // Render an input field in edit mode
            <div className="edit-mode">
              <div className="edit-field">
                <label>Date:</label>
                <input
                  type="date"
                  value={editGameDate}
                  onChange={(e) => setEditGameDate(e.target.value)}
                />
              </div>
              <div className="edit-field">
                <label>Notes:</label>
                <textarea
                  type="text"
                  value={editGameNotes}
                  rows={3}
                  onChange={(e) => setEditGameNotes(e.target.value)}
                />
              </div>
              <div className="edit-field">
                <label>Name:</label>
                <input
                  type="text"
                  value={editTargetName}
                  onChange={(e) => setEditTargetName(e.target.value)}
                />
              </div>
              <div className="edit-field">
                <label>Score:</label>
                <input
                  type="text"
                  value={editScore}
                  onChange={(e) => setEditScore(e.target.value)}
                />
              </div>
              <div className="edit-field">
                <label>Total Score:</label>
                <input
                  type="text"
                  value={editTotalScore}
                  onChange={(e) => setEditTotalScore(e.target.value)}
                />
              </div>
              <Button onClick={saveEdit}>Save</Button>
            </div>
          ) : (
            // Render the formatted date in non-edit mode
            <>
              Date: {formatDate(target.game_date)}
              <div className="game-data-line">
                <EmojiEventsOutlinedIcon />
                {/* {bestRound.map((best) => (
                  <span key={best.game_id} style={{ marginBottom: "15px" }}>
                    {best.best_round_score}
                  </span>
                ))} */}
              </div>
              Notes: {target.game_notes !== null ? target.game_notes : "empty - icon?"}
              <br />
              Target Name: {target.target_name !== null ? target.target_name : "No Name - icon?"}
              <br />
              Total Game Score: {target.total_game_score}
              <br />
              Target Value: {target.target_score_value !== null ? target.target_score_value : "None Set - icon?"}
              <br />
            </>
          )}
          {target.user_id &&
            !edit && ( // Check if user.id exists AND edit mode=false
              <div className="list-buttons">
                <Button
                  onClick={() =>
                    dispatch({ type: "DELETE_GAME", payload: target.game_id })
                  }
                  variant="contained"
                  style={{ backgroundColor: "crimson" }}
                >
                  Delete
                </Button>
              </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
