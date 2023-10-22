import React from "react";
import { Box, Paper, Typography } from "@mui/material";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 400,
            height: 400,
          },
        }}
      >
        <Paper elevation={3}>
          {" "}
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Info Page
          </Typography>
          <img
            src="https://academics.otc.edu/media/uploads/sites/49/2022/06/page-under-construction-icon.jpg"
            alt="under construction"
            // style={{ width: "600px", height: "400px" }}
          />
        </Paper>
      </Box>
    </div>
  );
}

export default AboutPage;
