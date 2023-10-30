import React from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@mui/material";
import "./UserPage.css";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="user-page-container">
      <center>
      <Card id="user-card">
        <CardContent>
          <h2>Welcome, {user.username}!</h2>
          <p>Your ID is: {user.user_id}</p>
          <LogOutButton className="btn" />
        </CardContent>
      </Card>
      </center>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
