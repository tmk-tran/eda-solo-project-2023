import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SummarizeIcon from "@mui/icons-material/Summarize";
import BiotechIcon from "@mui/icons-material/Biotech";

const actions = [
  {
    icon: (
      <Link to="/games-admin">
        <AdminPanelSettingsIcon />
      </Link>
    ),
    name: "Games Admin",
  },
  {
    icon: (
      <Link to="/rounds-admin">
        <AdminPanelSettingsIcon />
      </Link>
    ),
    name: "Rounds Admin",
  },
  {
    icon: (
      <Link to="/success">
        <ThumbUpIcon />
      </Link>
    ),
    name: "Success",
  },
  {
    icon: (
      <Link to="/results">
        <SummarizeIcon />
      </Link>
    ),
    name: "Results",
  },
  {
    icon: (
      <Link to="/test">
        <BiotechIcon />
      </Link>
    ),
    name: "Test",
  },
];

export default function BasicSpeedDial() {
  const user = useSelector((store) => store.user);

  return (
    <>
      {/* If no user is logged in, show these links */}
      {user.user_id === null && (
        // If there's no user, show login/registration links
        <Link className="navLink" to="/login">
          Login / Register
        </Link>
      )}

      {/* If a user is logged in, show these links */}
      {user.user_id && (
        <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      )}
    </>
  );
}
