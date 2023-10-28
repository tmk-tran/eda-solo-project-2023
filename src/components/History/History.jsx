import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Box, Paper, List, ListItem, Card, CardContent, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

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
        <Paper id="history-paper">
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
        </Paper>
      </Box>
    </div>
  );
}
