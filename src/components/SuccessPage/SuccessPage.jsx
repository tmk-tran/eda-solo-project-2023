import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function SuccessPage() {
  const history = useHistory();

  return (
    <div>
      <h1 className="results-header">Success</h1>
      <Card style={{ width: "50%", margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <CelebrationIcon /> Congratulations! <CelebrationIcon />
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p">
            Your score is: 
          </Typography>
          <Card style={{ width: "80%", margin: "0 auto" }}>
            <CardContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Round Number</TableCell>
                      <TableCell>Round Score</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                   
                      <TableRow >
                        <TableCell># </TableCell>
                        <TableCell>
                          {/* {roundsMatchGameId[i] &&
                            `${roundsMatchGameId[i].round_score} Points`} */}
                        </TableCell>
                      </TableRow>
                  
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          <FormControl fullWidth>
            <Button variant="contained" onClick={() => history.push("/games")}>
              Finish
            </Button>
          </FormControl>
        </CardContent>
      </Card>
    </div>
  );
}
