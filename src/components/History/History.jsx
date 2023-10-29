import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Paper,
  List,
  ListItem,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

// Component
import GamesList from "../GamesList/GamesList";

export default function History() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_GAMES" });
  }, []);

  const gameList = useSelector((store) => store.gamesReducer); // possible change of name here
  const reversedGameList = [...gameList].reverse();
  const rounds = useSelector((store) => store.roundReducer);
  const user = useSelector((store) => store.user);
  const userId = user.user_id;
  console.log("HISTORY: ", userId);

  return (
    <div className="page-container">
      <Typography
        variant="h4"
        style={{
          color: "ghostwhite",
          textAlign: "center",
        }}
      >
        Game History
      </Typography>
      <br />
      <Box sx={{ width: "100%" }}>
        {/* <Paper id="history-paper">
          {reversedGameList.map((target) => (
            <CardContent key={target.game_id} style={{ marginBottom: "15px" }}>
              <GamesList
                target={target}
                roundScores={rounds.filter(
                  (round) => round.game_id === target.game_id
                )}
              />
            </CardContent>
          ))}
        </Paper> */}
        <Paper id="history-paper">
          {reversedGameList.map((target) => {
            // Add a condition to check if the user_id matches the desired userId
            if (target.user_id === userId) {
              return (
                <CardContent
                  key={target.game_id}
                  style={{ marginBottom: "15px" }}
                >
                  <GamesList
                    target={target}
                    roundScores={rounds.filter(
                      (round) => round.game_id === target.game_id
                    )}
                  />
                </CardContent>
              );
            } else {
              return null; // Return null for items that don't match the user_id
            }
          })}
        </Paper>
      </Box>
    </div>
  );
}
