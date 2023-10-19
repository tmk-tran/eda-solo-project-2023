import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function BarChart({ data }) {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const data = [10, 25, 30, 45, 60];

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 400 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3
      .scaleBand()
      .domain(data.map((d, i) => i))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height, 0]);

    svg
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", (d) => y(d))
      .attr("height", (d) => height - y(d))
      .attr("width", x.bandwidth())
      .style("fill", "steelblue");
  }, [data]);

  return (
    <svg ref={svgRef} width={400} height={300}>
      <g transform="translate(40,20)"></g>
    </svg>
  );
}

export default BarChart;
