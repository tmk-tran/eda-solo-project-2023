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
                  <Typography variant="h6">Quick Game</Typography>
                </Paper>
                <Button onClick={() => history.push("/games")}>Start</Button>
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
