import React from "react";
import {
  Card,
  CardContent,
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import "./AboutPage.css";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
      <Card id="about-card" elevation={6} style={{ height: "100%" }}>
        <CardContent style={{ textAlign: "center" }}>
          <Typography variant="h4" color="primary" gutterBottom>
            About ScoreMark
          </Typography>
          <Typography variant="body1">
            Welcome to ScoreMark! This app is designed to help target shooters
            track their shooting performance and improve their skills on the
            range.
          </Typography>
          <br />
          <br />
          <Typography variant="h6">Features:</Typography>
          <Box
            style={{
              display: "inline-block",
              textAlign: "left",
              justifyContent: "center",
            }}
          >
            <ul>
              <li>
                <Typography>Record and store your shooting scores</Typography>
              </li>
              <li>
                <Typography>Track your progress over time</Typography>
              </li>
              <li>
                <Typography>
                  View detailed statistics and analysis of your shooting
                  performance
                </Typography>
              </li>
              <li>
                <Typography>
                  Record notes/goals to further measure your improvement
                </Typography>
              </li>
            </ul>
          </Box>
          <br />
          <Typography variant="body1">
            Whether you're a novice or an experienced shooter, ScoreMark can
            assist you in honing your skills and achieving your shooting goals.
          </Typography>
          <br />
          <Card elevation={7}>
            <Item elevation={10}>
              <CardContent>
                <Typography variant="h6">
                  <HealthAndSafetyIcon style={{ fontSize: "5vh" }} />
                </Typography>
                <Typography variant="h6">Firearms:</Typography>
                <Typography id="safety-line" variant="body1">
                  Always treat every firearm as if it's loaded, keep it pointed
                  in a safe direction, and never touch the trigger until you're
                  ready to shoot
                </Typography>
                <br />
                <Typography variant="h6">Archery:</Typography>
                <Typography id="safety-line" variant="body1">
                  Prioritize safety on the archery range: maintain a safe draw,
                  never point an arrow at anyone, and be aware of your
                  surroundings before releasing
                </Typography>
              </CardContent>
            </Item>
          </Card>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutPage;
