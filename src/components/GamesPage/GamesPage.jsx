import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./GamesPage.css";

export default function GamesPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="page-container">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>3-Ring</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              id="three-ring-game"
              src="images/three-ring.png"
              alt="A Three Ring Target"
              onClick={() => {
                dispatch({ type: "ADD_GAME" });
                history.push("/3-ring");
              }}
            ></img>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>4-Ring</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              id="four-ring-game"
              src="images/four-ring.png"
              alt="A Four Ring Target"
              onClick={() => {
                dispatch({ type: "ADD_GAME" });
                history.push("/4-ring");
              }}
            ></img>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>5-Ring</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              id="five-ring-game"
              src="images/five-ring.png"
              alt="A Five Ring Target"
              onClick={() => {
                dispatch({ type: "ADD_GAME" });
                history.push("/5-ring");
              }}
            ></img>{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Trap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              id="trap-game"
              src="images/trap_clay.png"
              alt="A Trap Clay Target, Shattering"
              onClick={() => {
                dispatch({ type: "ADD_GAME" });
                history.push("/trap");
              }}
            ></img>{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Hit/Miss</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <img
              id="hits-game"
              src="images/crosshair.png"
              alt="An image of a crosshair target"
              onClick={() => {
                dispatch({ type: "ADD_GAME" });
                history.push("/quickround");
              }}
            ></img>{" "}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
