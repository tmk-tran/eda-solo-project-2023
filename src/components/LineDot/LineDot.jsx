import React from "react";
import { useSelector } from "react-redux";

import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

export default function LineDot({ userId }) {
  const games = useSelector((store) => store.gamesReducer);
  console.log("Games from line dot: ", games);

  // Filter the games based on the user_id
  const filteredGames = games.filter((game) => game.user_id === userId);
  console.log("Filtered games: ", filteredGames);

  const lastEightGames = filteredGames.slice(-8);
  console.log("Last five games: ", lastEightGames);

  const scoresArray = lastEightGames.map((game) => game.total_game_score);
  console.log("Scores array: ", scoresArray);

  return (
    <>
      {/* <LineChart
        xAxis={[{ label: "Games", data: [1, 2, 3, 4, 5, 6, 7, 8] }]}
        series={[
          {
            label: "Score",
            data:
              scoresArray.length > 0
                ? scoresArray
                : new Array(8 - scoresArray.length).fill(0).concat(scoresArray),
          },
        ]}
        width={500}
        height={300}
      /> */}
       <LineChart
      xAxis={[
        {
          label: "Games",
          data: Array.from({ length: scoresArray.length }, (_, index) => index + 1),
        }
      ]}
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
