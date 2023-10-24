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
  Button,
  Typography,
} from "@mui/material";
import "./Train.css";

// import Stack from "@mui/material/Stack";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   height: 60,
//   lineHeight: "60px",
// }));

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
  const [darkMode, setDarkMode] = useState(false); // Default to light mode

  const history = useHistory();

  const theme = darkMode ? darkTheme : lightTheme;
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
    <Grid container spacing={3}>
      <ThemeProvider theme={theme}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 3,
              borderRadius: 8,
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paper elevation={6} style={{ padding: theme.spacing(4) }}>
              <Typography variant="h4" style={{ marginBottom: theme.spacing(2) }}>
                Start Training
              </Typography>
              <Button onClick={toggleDarkMode} variant="contained" color="primary">
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </Button>
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
                  <Item elevation={4}>
                    <img
                      id="three-ring-game"
                      src="images/three-ring.png"
                      alt="A Three Ring Target"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/3-ring");
                      }}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item elevation={4}>
                    <img
                      id="four-ring-game"
                      src="images/four-ring.png"
                      alt="A Four Ring Target"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/4-ring");
                      }}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item elevation={4}>
                    <img
                      id="five-ring-game"
                      src="images/five-ring.png"
                      alt="A Five Ring Target"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/5-ring");
                      }}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item elevation={4}>
                    <img
                      id="trap-game"
                      src="images/clay.png"
                      alt="A Trap Clay Target, Shattering"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/trap");
                      }}
                    />
                  </Item>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </ThemeProvider>
    </Grid>
  </div>
  );
}
