import {
  Card,
  CardContent,
  TextField,
  FormControl,
  Button,
  Typography,
} from "@mui/material";
import CelebrationIcon from "@mui/icons-material/Celebration";

export default function SuccessPage() {
  return (
    <>
      <h1>Success Page! WooHoo!!</h1>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            <CelebrationIcon /> Congratulations! <CelebrationIcon />
          </Typography>
          <p>Add stuff here</p>
          <Typography variant="body2" color="textSecondary" component="p">
            Your score is:
          </Typography>
          <Button variant="contained" color="secondary">
            Name Me Something
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
