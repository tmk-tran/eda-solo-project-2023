import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import { useHistory } from "react-router-dom";

import {
  Typography,
  Card,
  CardContent,
  FormControl,
  Button,
  Paper,
} from "@mui/material";

function LoginPage() {
  const history = useHistory();

  return (
    <Paper id="login-paper" style={{ textAlign: "center" }}>
      <Paper id="login-message">
        <br />
        <Paper id="login-header" elevation={9}>
          <Typography variant="h3">Welcome To ScoreMark</Typography>
        </Paper>
        <br />
        <LoginForm />
        <br />
        <Typography variant="h5">New User?</Typography>

        <Button
          id="register-button"
          onClick={() => {
            history.push("/registration");
          }}
        >
          Sign Up
        </Button>
        <br />
        <br />
      </Paper>
    </Paper>
  );
}

export default LoginPage;
