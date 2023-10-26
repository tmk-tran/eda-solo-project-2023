import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

export default function LineDot() {
  return (
    <>
      <LineChart
        xAxis={[{ label: "Rounds", data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            label: "Score",
            data: [2, 5.5, 2, 10.5, 1.5, 50],
          },
        ]}
        width={500}
        height={300}
      />
    </>
  );
}
