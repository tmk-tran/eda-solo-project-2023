import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function LineChart() {
  const svgRef = useRef();

  useEffect(() => {
    // Your D3 code for the line chart
    const svg = d3.select(svgRef.current);

    const data = [
      { x: 0, y: 5 },
      { x: 1, y: 9 },
      { x: 2, y: 7 },
      { x: 3, y: 12 },
      { x: 4, y: 6 },
    ];

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3.scaleLinear().domain([0, 4]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 12]).range([height, 0]);

    const line = d3
      .line()
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Create dots
    svg
      .selectAll("dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("cx", (d) => x(d.x))
      .attr("cy", (d) => y(d.y));

    // Create line
    svg
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, []);

  return (
    <svg ref={svgRef} width={400} height={300}>
      {/* Add axes and labels here */}
      <g></g>
    </svg>

  );
}

export default LineChart;
