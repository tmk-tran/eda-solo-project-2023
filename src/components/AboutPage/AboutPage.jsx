import React from "react";
import { Card, CardContent, Box, Paper, Typography } from "@mui/material";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

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
          <Typography
            variant="h4"
            color="primary"
            gutterBottom
            style={{ fontFamily: "avenir" }}
          >
            About ScoreMark
          </Typography>
          <Typography variant="body1" style={{ fontFamily: "avenir" }}>
            Welcome to ScoreMark! This app is designed to help target shooters
            track their shooting performance and improve their skills on the
            range.
          </Typography>
          <br />
          <Typography variant="body1" style={{ fontFamily: "avenir" }}>
            Features:
          </Typography>
          <ul>
            <li>Record and store your shooting scores</li>
            <li>Track your progress over time</li>
            <li>
              View detailed statistics and analysis of your shooting performance
            </li>
            <li>Record notes/goals to further measure your improvement</li>
          </ul>
          <Typography variant="body1" style={{ fontFamily: "avenir" }}>
            Whether you're a novice or an experienced shooter, ScoreMark can
            assist you in honing your skills and achieving your shooting goals.
          </Typography>
          <br />
          <Card elevation={7} style={{ backgroundColor: "yellow" }}>
            <CardContent>
              <Typography variant="h6">
                <HealthAndSafetyIcon />
                Safety:
              </Typography>
              <Typography variant="body1">Firearms:</Typography>
              <Typography variant="body2" style={{ fontFamily: "avenir" }}>
                Always treat every firearm as if it's loaded, keep it pointed in
                a safe direction, and never touch the trigger until you're ready
                to shoot
              </Typography>
              <br />
              <Typography variant="body1">Archery:</Typography>
              <Typography variant="body2" style={{ fontFamily: "avenir" }}>
                Prioritize safety on the archery range: maintain a safe draw,
                never point an arrow at anyone, and be aware of your
                surroundings before releasing
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutPage;
