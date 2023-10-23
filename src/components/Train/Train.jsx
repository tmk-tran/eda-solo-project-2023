import React from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={2} style={{ margin: "0 auto" }}>
        {[lightTheme, darkTheme].map((theme, index) => (
          <Grid item xs={4} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  bgcolor: "background.default",
                  display: "column",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 2,
                }}
              >
                <Paper elevation={7}>
                  {" "}
                  <Typography variant="h5">Start Training</Typography>
                  <Typography variant="h6">Quick Start</Typography>
                  <FormControl fullWidth>
                    <Button
                      variant="contained"
                      style={{ margin: "0 5px" }}
                      onClick={() => history.push("/games")}
                    >
                      Start a Game
                    </Button>
                  </FormControl>
                  <Typography variant="h6">Quick Game</Typography>
                  <Box sx={{ width: "100%" }}>
                    <Grid
                      container
                      rowSpacing={1}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={6}>
                        <Item elevation={4}>
                          <Typography>
                            <img
                              id="three-ring-game"
                              src="images/three-ring.png"
                              alt="A Three Ring Target"
                              onClick={() => {
                                dispatch({ type: "ADD_GAME" });
                                history.push("/3-ring");
                              }}
                            ></img>
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={6}>
                        <Item elevation={4}>
                          <Typography>
                            <img
                              id="four-ring-game"
                              src="images/four-ring.png"
                              alt="A Four Ring Target"
                              onClick={() => {
                                dispatch({ type: "ADD_GAME" });
                                history.push("/4-ring");
                              }}
                            ></img>
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={6}>
                        <Item elevation={4}>
                          <Typography>
                            <img
                              id="five-ring-game"
                              src="images/five-ring.png"
                              alt="A Five Ring Target"
                              onClick={() => {
                                dispatch({ type: "ADD_GAME" });
                                history.push("/5-ring");
                              }}
                            ></img>{" "}
                          </Typography>
                        </Item>
                      </Grid>
                      <Grid item xs={6}>
                        <Item elevation={4}>
                          <Typography>
                            <img
                              id="trap-game"
                              src="images/clay.png"
                              alt="A Trap Clay Target, Shattering"
                              onClick={() => {
                                dispatch({ type: "ADD_GAME" });
                                history.push("/trap");
                              }}
                            ></img>{" "}
                          </Typography>
                        </Item>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
