import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Typography,
  Card,
  CardContent,
  FormControl,
  Button,
  Paper,
  TextField,
} from "@mui/material";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <div
      style={{ padding: "50px", display: "flex", justifyContent: "center" }}
    >
      <Card style={{ width: "75%", height: "40vh" }}>
        <CardContent>
          <Typography variant="h5">Register User</Typography>
          <Typography variant="h6">Please Enter Your Information:</Typography>
          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}
          <br />
          <div>
            <FormControl fullWidth>
              <TextField
                type="text"
                label="Username"
                value={username}
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormControl>
          </div>
          <div>
            <FormControl fullWidth>
              <TextField
                type="password"
                label="Password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </FormControl>
          </div>
          <br />
          <FormControl fullWidth>
            <Button variant="contained" onClick={registerUser}>
              Sign Up
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}

export default RegisterForm;
