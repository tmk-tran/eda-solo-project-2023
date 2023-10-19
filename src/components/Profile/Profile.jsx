import React from "react";

import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import "./Profile.css";
import BarChart from "../Chart/Chart";
import LineDot from "../LineDot/LineDot";
import PieChart from "../AreaChart/AreaChart";

export default function Profile() {
  const profileEdit = () => {
    console.log("WIRE ME FOR PROFILE EDIT");
  };

  return (
    <div>
      <h1>Profile</h1>
      <Card>
        <CardContent>
          <div className="profile-head">
            <Typography variant="h5">Profile</Typography>
            <Button onClick={profileEdit}>Settings</Button>
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
              <Typography variant="h6">
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
