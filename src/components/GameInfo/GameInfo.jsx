import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ThreeRingInfo from "../ThreeRing/ThreeRingInfo";
import "./GameInfo.css"

export default function GameInfo() {
  return (
    <>
      <Accordion id="game-menu" style={{ width: "200px" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Game Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <ThreeRingInfo />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
