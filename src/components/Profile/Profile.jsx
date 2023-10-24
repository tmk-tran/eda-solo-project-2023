import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import "./Profile.css";
import BarChart from "../Chart/Chart";
import LineDot from "../LineDot/LineDot";
import AccountMenu from "../AccountMenu/AccountMenu";
// import PieChart from "../AreaChart/AreaChart";
// ~~~~~~~~~~~~~~~ Sweet Alert ~~~~~~~~~~~~~~~~~~
import Swal from "sweetalert2";
// import Swal from 'sweetalert2/dist/sweetalert2.js';

export default function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const currentUser = user.username;

  const userRounds = useSelector((store) => store.totalRounds);

  const showAlert = () => {
    Swal.fire({
      title: "Edit Profile Username",
      input: "text",
      inputValue: currentUser, // Initialize with the current username
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
      inputValidator: (value) => {
        if (!value) {
          return "Username cannot be empty";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const newUsername = result.value;

        // Display a confirmation dialog before saving
        Swal.fire({
          title: "Confirm Save",
          text: `Do you want to save the new username: ${newUsername}?`,
          icon: "question",
          showCancelButton: true,
          confirmButtonText: "Yes, save it!",
          cancelButtonText: "No, cancel!",
        }).then((confirmResult) => {
          if (confirmResult.isConfirmed) {
            // Handle the new username (e.g., save it to your state or send it to the server)
            console.log("New Username:", newUsername);
            // setNewProfileName(newUsername);
            const editedItem = {
              username: newUsername,
            };
            dispatch({ type: "EDIT_USER", payload: editedItem });

            // Display an alert after saving
            Swal.fire(
              "Saved!",
              "Your profile username has been updated.",
              "success"
            );
          }
        });
      }
    });
  };

  return (
    <div>
      <Card>
        <CardContent>
          <AccountMenu />
          <Typography variant="h6">Profile</Typography>
          <br />
          <div className="profile-head">
            <div className="profile-name-icon">
              <AccountCircleIcon
                style={{ fontSize: "30px", marginRight: "5px" }}
              />
              <div className="current-user">
                <Typography variant="body1">{currentUser}</Typography>
                {userRounds.map((rounds, index) => (
                  <div key={index}>
                    <Typography variant="body2">
                      Total Rounds Played: {rounds.total_rounds_played}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
            <Button onClick={showAlert}>
              <ArrowForwardIosIcon />
            </Button>
          </div>
          <Typography variant="h6">Dashboard</Typography>
          <br />
          <Card style={{ backgroundColor: "antiquewhite" }}>
            <CardContent>
              <Typography variant="h6">
                <BarChart />
              </Typography>
            </CardContent>
          </Card>
          <br />
          <Card style={{ backgroundColor: "antiquewhite" }}>
            <CardContent>
              <Typography variant="h6" type="graph">
                <LineDot />
              </Typography>
            </CardContent>
          </Card>
          <br />
          <Card style={{ backgroundColor: "antiquewhite" }}>
            <CardContent>
              <Typography variant="h6">{/* <PieChart /> */}</Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
