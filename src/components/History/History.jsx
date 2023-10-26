import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Component
import GamesList from "../GamesList/GamesList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

export default function History() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_GAMES" });
    // dispatch({ type: "FETCH_ROUND_SCORES" });
  }, []);
  const gameList = useSelector((store) => store.gamesReducer); // possible change of name here
  const reversedGameList = [...gameList].reverse();
  const rounds = useSelector((store) => store.roundReducer);

  return (
    <div className="page-container">
      <h1>History</h1>
      <Box sx={{ width: "100%" }}>
        <List>
          {/* {reversedGameList.map((target) => (
          <ListItem key={target.game_id} style={{ marginBottom: "15px" }}>
            <GamesList target={target} />
          </ListItem>
        ))} */}
          {reversedGameList.map((target) => (
            <ListItem key={target.game_id} style={{ marginBottom: "15px" }}>
              <GamesList
                target={target}
                roundScores={rounds.filter(
                  (round) => round.game_id === target.game_id
                )}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
