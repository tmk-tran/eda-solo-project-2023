import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

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
      <form className="formPanel" onSubmit={login}>
        <h2>Login</h2>
        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">Username:</label>
          <TextField
            variant="outlined"
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
        </div>
        <div>
          <input className="btn" type="submit" name="submit" value="Log In" />
        </div>
      </form>
      <Card id="login-card">
        <CardContent>
          <Typography variant="h5">Login</Typography>
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
              <input
                className="btn"
                type="submit"
                name="submit"
                value="Log In"
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}

export default LoginForm;
