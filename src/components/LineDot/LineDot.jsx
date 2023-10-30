import React, { useState } from "react";
import { useSelector } from "react-redux";

import { LineChart } from "@mui/x-charts/LineChart";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";

export default function LineDot({ scoresArrayTen, scoresArrayFive }) {
  const [viewLastTen, setViewLastTen] = useState(true);

  const handleViewToggle = () => {
    setViewLastTen(!viewLastTen);
  };

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
<button onClick={handleViewToggle}>
  View Last {viewLastTen ? "5" : "10"} Games
</button>
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
      },
    ]}
    width={450}
    height={300}
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
      },
    ]}
    width={450}
    height={300}
    minWidth={400}
  />
)}
</>
);
}