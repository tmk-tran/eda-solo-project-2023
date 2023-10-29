import React from "react";
import { List, ListItem, Typography } from "@mui/material";

export default function ThreeRingInfo() {
  return (
    <>
      <Typography>How to Play:</Typography>
      <List>
        <ListItem>
          - Click a zone on the picture as you hit your target down range
        </ListItem>
        <ListItem>
          - When finished with a round, click the 'ADD ROUND' button to log the
          round score
        </ListItem>
        <ListItem>
          - For more options, click the button with the 3 dots in the top right
          corner
        </ListItem>
      </List>
    </>
  );
}
