import React, { useEffect } from "react";
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
import "./Profile.css";
import LineDot from "../LineDot/LineDot";
import HorizontalBars from "../HorizontalBars/HorizontalBars";
import AccountMenu from "../AccountMenu/AccountMenu";
// ~~~~~~~~~~~~~~~ Sweet Alert ~~~~~~~~~~~~~~~~~~
import Swal from "sweetalert2";

export default function Profile({ user }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.user_id) {
      // Fetch games and rounds based on user.user_id
      dispatch({ type: "FETCH_GAMES", payload: user.user_id });
      dispatch({ type: "FETCH_ROUNDS", payload: user.user_id });
    }
  }, [dispatch, user]);

  // const user = useSelector((store) => store.user);
  const currentUser = user.username;
  const userId = user.user_id;
  console.log("FROM PROFILE: ", userId);

  const userRounds = useSelector((store) => store.totalRounds);
  console.log("USER ROUNDS: ", userRounds);

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
    <div className="page-container">
      <Card id="profile-card" elevation={6}>
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
                {/* {userRounds.map((rounds, index) => {
                  if (rounds.user_id === userId) {
                    return (
                      <div key={index}>
                        <Typography variant="body2">
                          Total Rounds Played: {rounds.total_rounds_played}
                        </Typography>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })} */}
                <br />
              </div>
            </div>
            <Button onClick={showAlert}>
              <ArrowForwardIosIcon />
            </Button>
          </div>
          <Typography variant="h6">Dashboard</Typography>
          <br />
          <Card elevation={12}>
            <CardContent>
              <Typography variant="h6">
                <LineDot userId={userId} />
              </Typography>
            </CardContent>
          </Card>
          <br />
          <Card elevation={12}>
            <CardContent>
              <Typography variant="h6" type="graph">
                <HorizontalBars />
              </Typography>
            </CardContent>
          </Card>
          <br />
        </CardContent>
      </Card>
    </div>
  );
}
