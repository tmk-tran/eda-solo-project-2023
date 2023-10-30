import React, { useState } from "react";
import { useSelector } from "react-redux";

import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

export default function LineDot({
  viewLastTen,
  scoresArrayTen,
  scoresArrayFive,
}) {
  // const [viewLastTen, setViewLastTen] = useState(true);

  // const handleViewToggle = () => {
  //   setViewLastTen(!viewLastTen);
  // };

  return (
    //     <>
    //       <LineChart
    //         xAxis={[
    //           {
    //             label: "Games",
    //             data: Array.from(
    //               { length: scoresArrayTen.length },
    //               (_, index) => index + 1
    //             ),
    //           },
    //         ]}
    //         series={[
    //           {
    //             label: "Score",
    //             data: scoresArrayTen,
    //           },
    //         ]}
    //         width={450}
    //         height={300}
    //         minWidth={400}
    //       />
    //     </>
    //   );
    // }

    <>
      {viewLastTen ? (
        <LineChart
          xAxis={[
            {
              label: "Games",
              data: Array.from(
                { length: scoresArrayTen.length },
                (_, index) => index + 1
              ),
            },
          ]}
          series={[
            {
              label: "Score",
              data: scoresArrayTen,
              color: "#1976D2"
            },
          ]}
          width={700}
          height={275}
          minWidth={400}
        />
      ) : (
        <LineChart
          xAxis={[
            {
              label: "Games",
              data: Array.from(
                { length: scoresArrayFive.length },
                (_, index) => index + 1
              ),
            },
          ]}
          series={[
            {
              label: "Score",
              data: scoresArrayFive,
              // color: "#94e0f7"
            },
          ]}
          width={700}
          height={275}
          minWidth={400}
        />
      )}
    </>
  );
}
