import React from "react";
import { useSelector } from "react-redux";

import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

export default function LineDot({ scoresArrayTen }) {
  // const games = useSelector((store) => store.gamesReducer);

  // Filter the games based on the user_id
  // const filteredGames = games.filter((game) => game.user_id === userId);

  // const lastFiveGames = filteredGames.slice(-5);
  // console.log("Last five games: ", lastFiveGames);

  // const lastTenGames = filteredGames.slice(-10);
  // console.log("Last ten games: ", lastTenGames);

  // const scoresArrayTen = lastTenGames.map((game) => game.total_game_score);

  return (
    <>
      {/* <LineChart
        xAxis={[{ label: "Games", data: [1, 2, 3, 4, 5, 6, 7, 8] }]}
        series={[
          {
            label: "Score",
            data:
              scoresArrayTen.length > 0
                ? scoresArrayTen
                : new Array(8 - scoresArrayTen.length).fill(0).concat(scoresArrayTen),
          },
        ]}
        width={500}
        height={300}
      /> */}
       <LineChart
      xAxis={[
        {
          label: "Games",
          data: Array.from({ length: scoresArrayTen.length }, (_, index) => index + 1),
        }
      ]}
      series={[
        {
          label: "Score",
          data: scoresArrayTen,
        },
      ]}
      width={500}
      height={300}
    />
    </>
  );
}
