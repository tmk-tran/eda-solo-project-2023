import React from "react";

import { useHistory } from "react-router-dom";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Button, Typography, Card, CardContent } from "@mui/material";

function RegisterPage() {
  const history = useHistory();

  return (
    <div id="login-paper">
      <RegisterForm />

      <center>
        <Card style={{ width: "35%", borderRadius: "15px" }}>
          <CardContent>
            <Typography variant="h6">
              Have an account?{" "}
              <Button
                variant="outlined"
                onClick={() => {
                  history.push("/login");
                }}
              >
                Login
              </Button>{" "}
              Here
            </Typography>
          </CardContent>
        </Card>
      </center>
    </div>
  );
}

export default RegisterPage;
