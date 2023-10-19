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
  console.log("req.user:", req.user);
  pool
    .query(`SELECT * FROM "scores";`)
    .then((result) => {
      console.log(result.rows);
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
  console.log("ITEM: ", item);
  console.log("USER: ", user);
  const queryText = `INSERT INTO "scores" ("round_id", "round_score")
                                    VALUES ($1, $2) RETURNING round_id;`;

  pool
    .query(queryText, [item.round_id, item.round_score])
    .then((result) => {
      const newRoundId = result.rows[0].round_id;
      res.status(201).json({
        message: "Values inserted into scores!",
        round_id: newRoundId,
      });
    })
    .catch((error) => {
      console.log("Error in POST for scores: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
