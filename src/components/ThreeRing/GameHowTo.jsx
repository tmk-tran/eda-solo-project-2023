import React from "react";
import { List, ListItem, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function GameHowTo() {
  return (
    <>
      <Typography variant="h6" style={{ textAlign: "center" }}>How to Play:</Typography>
      <List>
        <ListItem>
          - Click a zone on the picture as you hit your target down range
        </ListItem>
        <ListItem>
          - When finished with a round, click the 'ADD ROUND' button to log the
          round score
        </ListItem>
        <ListItem>
          - For more options, click the button with the three dots in the top right
          corner
        </ListItem>
      </List>
    </>
  );
}
