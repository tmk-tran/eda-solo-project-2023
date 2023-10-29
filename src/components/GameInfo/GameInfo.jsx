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

export default function GameInfo() {
  return (
    <>
      <Accordion style={{ width: "200px" }}>
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
