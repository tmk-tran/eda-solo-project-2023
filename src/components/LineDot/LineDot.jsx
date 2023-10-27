import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

export default function LineDot() {
  const games = useSelector((store) => store.gamesReducer);
  console.log("Games from line dot: ", games);

  const lastEightGames = games.slice(-8);
  console.log("Last five games: ", lastEightGames);

  const scoresArray = lastEightGames.map((game) => game.total_game_score);
  console.log("Scores array: ", scoresArray);

  return (
    <>
      <LineChart
        xAxis={[{ label: "Games", data: [1, 2, 3, 4, 5, 6, 7, 8] }]}
        series={[
          {
            label: "Score",
            data: scoresArray,
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
}
