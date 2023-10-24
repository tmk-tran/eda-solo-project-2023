const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get all of the roundScores for the logged in user
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  pool
    .query(`SELECT * FROM "scores";`)
    .then((result) => {
      console.log("FROM scores.router: ", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("error in the GET / request for roundScores", err);
      res.sendStatus(500);
    });
});

/**
 * Add an score for the logged in user to the roundScores area
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  const item = req.body;
  const user = req.user;
  console.log("ITEM in scores.router: ", item.round_id);
  console.log("USER in scores.router: ", user);
  const queryText = `INSERT INTO "scores" ("round_id", "round_score")
                                    VALUES ($1, $2) RETURNING round_id;`;

  // Extract the roundId from the response of the first route
  const roundId = req.body.round_id;
  console.log("ROUND_ID in scores.router: ", roundId);
  pool
    .query(queryText, [item.round_id, item.round_score])
    .then((result) => {
      const newRoundId = result.rows[0].round_id;
      res.status(201).send(`New Round ID: ${newRoundId}`);
      // res.status(201).json({
      //   message: "Values inserted into scores!",
      //   round_id: newRoundId,
      // });
    })
    .catch((error) => {
      console.log("Error in POST for scores: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
