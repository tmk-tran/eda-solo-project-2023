import React, { useState } from "react";
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
import SettingsIcon from "@mui/icons-material/Settings";
import "./Profile.css";
import BarChart from "../Chart/Chart";
import LineDot from "../LineDot/LineDot";
// import PieChart from "../AreaChart/AreaChart";
// ~~~~~~~~~~~~~~~ Hooks ~~~~~~~~~~~~~~~~~~
import getCookie from "../../hooks/cookie";

export default function Profile() {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [newProfileName, setNewProfileName] = useState(getCookie("name") || "");

  const user = useSelector((store) => store.user);
  const currentUser = user.username;

  const userRounds = useSelector((store) => store.totalRounds);

  const profileEdit = () => {
    console.log("WIRE ME FOR PROFILE EDIT");
    setEdit(!edit);
  };

  const inputClick = (e) => {
    e.stopPropagation();
  };

  const saveProfileName = (e) => {
    e.preventDefault();
    document.cookie = `name=${newProfileName}`;
    setEdit(false);
  };

  const saveEdit = () => {
    console.log("clicked saveEdit");
    if (newProfileName === "") {
      // update later, when decided on what score is used for
      setNewProfileName(currentUser);
    }

    const editedItem = {
      username: newProfileName,
    };

    dispatch({ type: "EDIT_USER", payload: editedItem });

    setEdit(false);
  };

  return (
    <div>
      <Card>
        <CardContent>
          <SettingsIcon onClick={() => console.log("WIRE ME FOR SETTINGS")} />
          <Typography variant="h5">Profile</Typography>
          <div
            className="profile-head"
            onClick={profileEdit}
            onBlur={inputClick}
          >
            {!edit ? (
              <>
                {" "}
                <div className="profile-name-icon">
                  <AccountCircleIcon style={{ marginRight: "5px" }} />
                  {currentUser}
                  <br />
                  {userRounds.map((rounds, index) => (
                    <p key={index}>
                      Total Rounds Played: {rounds.total_rounds_played}
                    </p>
                  ))}
                </div>
                <Button onClick={profileEdit}>
                  <ArrowForwardIosIcon />
                </Button>
              </>
            ) : (
              <>
                <div>
                  <AccountCircleIcon />
                  <input
                    placeholder="New Profile Name"
                    type="text"
                    value={newProfileName}
                    onChange={(e) => setNewProfileName(e.target.value)}
                    onClick={inputClick}
                    onBlur={saveProfileName}
                  />
                  <Button onClick={saveEdit}>save</Button>
                </div>
              </>
            )}
          </div>
          <br />
          <Typography variant="caption">User Info Here</Typography>
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
