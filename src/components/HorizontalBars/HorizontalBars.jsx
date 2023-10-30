import React from "react";
import { useSelector } from "react-redux";
import { BarChart } from "@mui/x-charts/BarChart";

export default function HorizontalBars({ roundAvgArray }) {
  return (
    <BarChart
      xAxis={[
        {
          label: "Average Round Score",
          scaleType: "band",
          data: Array.from(
            { length: roundAvgArray.length },
            (_, index) => index + 1
          ),
        },
      ]}
      series={[
        {
          // label: "Score",
          data: roundAvgArray,
          color: "#4190ba",
        },
      ]}
      width={700}
      height={275}
      minWidth={400}
    />
  );
}
