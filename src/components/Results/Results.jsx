import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import {
    Card,
    CardContent,
    TextField,
    FormControl,
    Button,
    Typography,
  } from "@mui/material";
import "./Results.css";

export default function Results() {
  return (
    <div>
      <h1 className="results-header">Results</h1>
      <Card>
        <CardContent>
            <h2 className="results-display-head"><EmojiEventsOutlinedIcon style={{fontSize: "40px"}}/></h2>
        </CardContent>
      </Card>
    </div>
  );
}
