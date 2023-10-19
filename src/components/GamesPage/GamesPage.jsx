import React from "react";
import { Link } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./GamesPage.css";

export default function GamesPage() {
  return (
    <div>
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
            Three Ring Target
            <Link to="/3-ring">3-Ring</Link>
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
            Four Ring Target<Link to="/4-ring">4-Ring</Link>
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
            Five Ring Target<Link to="/5-ring">5-Ring</Link>
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
            Trap Style Game<Link to="/trap">Trap</Link>
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
            Counts Hits Only<Link to="/quickround">Quick Round</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
