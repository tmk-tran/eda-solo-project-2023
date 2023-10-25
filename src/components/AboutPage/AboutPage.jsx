import React from "react";
import { Card, CardContent, Box, Paper, Typography } from "@mui/material";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Box
      className="page-container"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card elevation={6} style={{ height: "100%" }}>
        <CardContent>
          <Typography variant="h4" color="primary" gutterBottom>
            About ScoreMark
          </Typography>
          <Typography variant="body1">
            Welcome to ScoreMark! This app is designed to help target shooters
            track their shooting performance and improve their skills on the
            range.
          </Typography>
          <br />
          <Typography variant="body1">Features:</Typography>
          <ul>
            <li>Record and store your shooting scores</li>
            <li>Track your progress over time</li>
            <li>
              View detailed statistics and analysis of your shooting performance
            </li>
            <li>Record notes/goals to further measure your improvement</li>
          </ul>
          <Typography variant="body1">
            Whether you're a novice or an experienced shooter, ScoreMark can
            assist you in honing your skills and achieving your shooting goals.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutPage;
