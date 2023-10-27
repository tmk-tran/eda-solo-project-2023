import React from 'react';
import { useSelector } from "react-redux";
import { BarChart } from '@mui/x-charts/BarChart';

export default function HorizontalBars() {
  const games = useSelector((store) => store.gamesReducer);
  const scoresArray = games.map((game, index) => ({
    index: `${index + 1}`,
    score: game.total_game_score,
  }));
  console.log("Scores array in bar graph: ", scoresArray);


  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Game A', 'Game B', 'Game C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
    />
  );
}