const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const sessionMiddleware = require("./modules/session-middleware");
const passport = require("./strategies/user.strategy");

// Route includes
const userRouter = require("./routes/user.router");
const gamesRouter = require("./routes/games.router");
const roundsRouter = require("./routes/rounds.router");
// const scoresRouter = require("./routes/scores.router");
// const bestRoundRouter = require("./routes/bestRound.router");
const totalRoundsRouter = require("./routes/totalRounds.router");

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use("/api/user", userRouter);
app.use("/api/games", gamesRouter);
app.use("/api/rounds", roundsRouter);
// app.use("/api/scores", scoresRouter);
// app.use("/api/best-round", bestRoundRouter);
app.use("/api/total-rounds", totalRoundsRouter);

// Serve static files
app.use(express.static("build"));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
