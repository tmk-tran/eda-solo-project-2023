import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  TextField,
  FormControl,
  FormControlLabel,
  Button,
  Typography,
  Switch,
} from "@mui/material";
import "./Train.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Train() {
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(true); // Default to light mode

  const history = useHistory();

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="page-container">
      <Box>
        <Paper
          id="train-box"
          elevation={6}
          // style={{ padding: theme.spacing(4) }}
          style={{ width: "100%" }}
        >
          <Typography variant="h5" style={{ marginBottom: theme.spacing(2) }}>
            Start Training
          </Typography>
          <Typography variant="h6" style={{ margin: theme.spacing(2, 0) }}>
            Quick Start
          </Typography>
          <FormControl fullWidth>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/games")}
            >
              Start a Game
            </Button>
          </FormControl>
          <Typography variant="h6" style={{ margin: theme.spacing(2, 0) }}>
            Quick Game
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item elevation={8}>
                <img
                  id="three-ring-game"
                  src="images/three-ring.png"
                  alt="A Three Ring Target"
                  onClick={() => {
                    dispatch({ type: "ADD_GAME" });
                    history.push("/3-ring");
                  }}
                />
                <Typography>Three Ring</Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={8}>
                <img
                  id="four-ring-game"
                  src="images/four-ring.png"
                  alt="A Four Ring Target"
                  onClick={() => {
                    dispatch({ type: "ADD_GAME" });
                    history.push("/4-ring");
                  }}
                />
                <Typography>Four Ring</Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={8}>
                <img
                  id="five-ring-game"
                  src="images/five-ring.png"
                  alt="A Five Ring Target"
                  onClick={() => {
                    dispatch({ type: "ADD_GAME" });
                    history.push("/5-ring");
                  }}
                />
                <Typography>Five Ring</Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={8}>
                <img
                  id="trap-game"
                  src="images/clay.png"
                  alt="A Trap Clay Target, Shattering"
                  onClick={() => {
                    dispatch({ type: "ADD_GAME" });
                    history.push("/trap");
                  }}
                />
                <Typography>Trap</Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={8}>
                <img
                  id="hits-game"
                  src="images/crosshair.png"
                  alt="An image of a crosshair reticle"
                  onClick={() => {
                    dispatch({ type: "ADD_GAME" });
                    history.push("/quickround");
                  }}
                  style={{ borderRadius: "50%" }}
                />
                <Typography>Hit / Miss</Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item elevation={8}>
                <img
                  id="hits-game"
                  src="images/bullseye.png"
                  alt="An image of a target with bullseye hit"
                  onClick={() => {
                    dispatch({ type: "ADD_GAME" });
                    history.push("/bulls");
                  }}
                />
                <Typography>Bullseyes Only</Typography>
              </Item>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
