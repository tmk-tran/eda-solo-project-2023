import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import NewUser from "./NewUser";

import {
  TextField,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <>
      <div style={{ display: "flex" }}>
        <Card id="login-card" elevation={10} style={{ opacity: 0.7 }}>
          <CardContent>
            <Typography variant="h5">Login</Typography>
            {errors.loginMessage && (
              <h3 className="alert" role="alert">
                {errors.loginMessage}
              </h3>
            )}
            <form onSubmit={login}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifiyContent: "center",
                }}
              >
                <TextField
                  variant="outlined"
                  type="username"
                  name="username"
                  label="Username"
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <TextField
                  variant="outlined"
                  type="password"
                  name="password"
                  label="Password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Log In
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
        <NewUser />
      </div>
    </>
  );
}

export default LoginForm;
