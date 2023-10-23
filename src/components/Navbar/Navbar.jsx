import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import Paper from "@mui/material/Paper";
import InfoIcon from "@mui/icons-material/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

export default function SimpleBottomNavigation() {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        style={{ backgroundColor: "#2c2b2b" }}
        //   value={value}
        //   onChange={(event, newValue) => {
        //     setValue(newValue);
        //   }}
      >
        <BottomNavigationAction
          className="profile-nav"
          label="Profile"
          icon={<PersonIcon />}
          style={{ color: "ghostwhite" }}
          component={Link}
          to="/profile"
        />
        <BottomNavigationAction
          className="profile-nav"
          label="History"
          icon={<RestoreIcon />}
          style={{ color: "ghostwhite" }}
          component={Link}
          to="/history"
        />
        <BottomNavigationAction
          className="profile-nav"
          label="Train"
          icon={<GpsFixedIcon style={{ fontSize: "34px" }} />}
          style={{ color: "ghostwhite" }}
          component={Link}
          to="/train"
        />
        <BottomNavigationAction
          className="profile-nav"
          label="Games"
          style={{ color: "ghostwhite" }}
          component={Link}
          to="/games"
          icon={
            <FontAwesomeIcon
              icon={faBullseye}
              style={{
                fontSize: "21px",
                color: "ghostwhite",
                marginBottom: "2px",
              }}
            />
          }
        />
        <BottomNavigationAction
          className="profile-nav"
          label="Info"
          icon={<InfoIcon />}
          style={{ color: "white" }}
          component={Link}
          to="/about"
        />
      </BottomNavigation>
    </Paper>
  );
}
