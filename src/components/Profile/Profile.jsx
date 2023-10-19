import React, { useState, useEffect } from "react";
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
import BarChart from "../Chart/Chart";
import LineDot from "../LineDot/LineDot";
// import PieChart from "../AreaChart/AreaChart";
// ~~~~~~~~~~~~~~~ Hooks ~~~~~~~~~~~~~~~~~~
import getCookie from "../../hooks/cookie";
import { BusAlertTwoTone } from "@mui/icons-material";

export default function Profile() {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [newProfileName, setNewProfileName] = useState(getCookie("name") || "");

  const user = useSelector((store) => store.user);
  const currentUser = user.username;

  const profileEdit = (e) => {
    console.log("WIRE ME FOR PROFILE EDIT");
    setEdit(!edit);
  };

  const inputClick = (e) => {
    e.stopPropagation();
  }

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
          <Typography variant="h5">Profile</Typography>
          <div className="profile-head" onClick={profileEdit} onBlur={inputClick}>
            {!edit ? (
              <>
                {" "}
                <div className="profile-name-icon">
                  <AccountCircleIcon />
                  {currentUser}
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
                  /><Button onClick={saveEdit}>save</Button>
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
