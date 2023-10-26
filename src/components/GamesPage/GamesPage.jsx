import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardContent,
  Grid,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./GamesPage.css";

export default function GamesPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="page-container">
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Card id="games-page-card" elevation={6}>
            <CardContent>
              <Typography variant="h5">Targets</Typography>
              <Accordion elevation={6}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography style={{ marginLeft: "25%" }}>
                    <img
                      id="three-ring-game"
                      src="images/three-ring.png"
                      alt="A Three Ring Target"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/3-ring");
                      }}
                      style={{ width: "70px", height: "70px" }}
                    ></img>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    The Three Ring Target Game Mode is perfect for those looking
                    to refine their shooting precision. Concentrate on hitting
                    the different rings to score points. This mode offers a
                    great way to enhance your aim and enjoy the satisfaction of
                    hitting your target. Are you up for the challenge? Give it a
                    shot!
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion elevation={6}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography style={{ margin: "0 auto" }}>
                    <img
                      id="four-ring-game"
                      src="images/four-ring.png"
                      alt="A Four Ring Target"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/4-ring");
                      }}
                      style={{ width: "70px", height: "70px" }}
                    ></img>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    Sharpen your shooting accuracy with the Four Ring Target
                    Game Mode. Focus on hitting the smaller target areas to earn
                    higher scores. Challenge yourself to aim for the center and
                    achieve the elusive bullseye. Whether you're a beginner or a
                    seasoned shooter, this mode offers an exciting test of your
                    marksmanship skills.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion elevation={6}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography
                    style={{ marginLeft: "auto", marginRight: "25%" }}
                  >
                    <img
                      id="five-ring-game"
                      src="images/five-ring.png"
                      alt="A Five Ring Target"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/5-ring");
                      }}
                      style={{ width: "70px", height: "70px" }}
                    ></img>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ overflowY: "auto" }}>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    Experience the thrill of precision shooting with the 5-Ring
                    Target Game Mode. Test your accuracy and focus as you aim
                    for the center of the target. Hit the bullseye to maximize
                    your score. Perfect for both novice and expert marksmen,
                    this mode will challenge your shooting skills and keep you
                    coming back for more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Grid>
        {/* New Card for displaying items */}
        <Grid item xs={6}>
          <Card id="games-page-card" elevation={6}>
            <CardContent>
              <Typography variant="h5">Game Modes</Typography>
              <Accordion elevation={6}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography style={{ margin: "0 auto" }}>
                    <img
                      id="hits-game"
                      src="images/crosshair.png"
                      alt="An image of a crosshair target"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/quickround");
                      }}
                      style={{ width: "70px", height: "70px" }}
                    ></img>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    Record Hits/Misses on a target
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion elevation={6}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography style={{ margin: "0 auto" }}>
                    <img
                      id="trap-game"
                      src="images/clay.png"
                      alt="An image of two orange clay targets"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/trap");
                      }}
                      style={{ width: "70px", height: "70px" }}
                    ></img>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    Record your shooting scores for each round of trap shooting
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion elevation={6}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography style={{ margin: "0 auto" }}>
                    <img
                      id="hits-game"
                      src="images/bullseye.png"
                      alt="An icon of a bullseye target"
                      onClick={() => {
                        dispatch({ type: "ADD_GAME" });
                        history.push("/trap");
                      }}
                      style={{ width: "70px", height: "70px" }}
                    ></img>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    Record your shooting scores for bullseye hits only
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
