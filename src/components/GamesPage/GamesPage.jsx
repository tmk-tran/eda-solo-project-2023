import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Box,
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
      <div>
        <Typography
          variant="h4"
          style={{ textAlign: "center", color: "white" }}
        >
          Games:
        </Typography>
        <Grid id="grid-games" container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card id="games-page-card">
              <br />
              <br />
              <CardContent>
                <Typography style={{ textAlign: "center" }}>
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
                <br />
                <Card elevation={5}>
                  <CardContent>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                      The Three Ring Target Game Mode is perfect for those
                      looking to refine their shooting precision. Concentrate on
                      hitting the different rings to score points. This mode
                      offers a great way to enhance your aim and enjoy the
                      satisfaction of hitting your target. Are you up for the
                      challenge? Give it a shot!
                    </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card id="games-page-card">
              <br />
              <br />
              <CardContent>
                <Typography style={{ textAlign: "center" }}>
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
                <br />
                <Card elevation={5}>
                  <CardContent>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                      Sharpen your shooting accuracy with the Four Ring Target
                      Game Mode. Focus on hitting the smaller target areas to
                      earn higher scores. Challenge yourself to aim for the
                      center and achieve the elusive bullseye. Whether you're a
                      beginner or a seasoned shooter, this mode offers an
                      exciting test of your marksmanship skills.
                    </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card id="games-page-card">
              <br />
              <br />
              <CardContent>
                <Typography style={{ textAlign: "center" }}>
                  <img
                    id="five-ring-game"
                    src="images/five-ring.png"
                    alt="A Five Ring Target"
                    onClick={() => {
                      dispatch({ type: "ADD_GAME" });
                      history.push("/5-ring");
                    }}
                  ></img>
                </Typography>
                <br />
                <Card elevation={5}>
                  <CardContent>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                      Experience the thrill of precision shooting with the
                      5-Ring Target Game Mode. Test your accuracy and focus as
                      you aim for the center of the target. Hit the bullseye to
                      maximize your score. Perfect for both novice and expert
                      marksmen, this mode will challenge your shooting skills
                      and keep you coming back for more.
                    </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card id="games-page-card">
              <CardContent>
                <Typography style={{ textAlign: "center" }}>
                  <img
                    id="hits-game"
                    src="images/crosshair.png"
                    alt="An image of a crosshair target"
                    onClick={() => {
                      dispatch({ type: "ADD_GAME" });
                      history.push("/quickround");
                    }}
                    style={{ borderRadius: "50%" }}
                  ></img>
                </Typography>
                <Card elevation={5}>
                  <CardContent>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                      Record Hits/Misses on a target
                    </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card id="games-page-card">
              <CardContent>
                <Typography style={{ textAlign: "center" }}>
                  <img
                    id="trap-game"
                    src="images/clay.png"
                    alt="An image of two orange clay targets"
                    onClick={() => {
                      dispatch({ type: "ADD_GAME" });
                      history.push("/trap");
                    }}
                  ></img>
                </Typography>
                <Card elevation={5}>
                  <CardContent>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                      Record your shooting scores for each round of trap
                      shooting
                    </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card id="games-page-card">
              <CardContent>
                <Typography style={{ textAlign: "center" }}>
                  <img
                    id="hits-game"
                    src="images/bullseye.png"
                    alt="An icon of a bullseye target"
                    onClick={() => {
                      dispatch({ type: "ADD_GAME" });
                      history.push("/bulls");
                    }}
                  ></img>
                </Typography>
                <Card elevation={5}>
                  <CardContent>
                    <Typography variant="body1" style={{ textAlign: "center" }}>
                      Record your shooting scores for bullseye hits only
                    </Typography>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
