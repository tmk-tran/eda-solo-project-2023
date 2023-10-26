const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Retrieve the best round data of games played by a specific user using USER_ID
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const queryText = `SELECT u.user_id,
  u.username,
  COUNT(r.round_id) AS total_rounds_played
  FROM "user" u
  LEFT JOIN games g ON u.user_id = g.user_id
  LEFT JOIN rounds r ON g.game_id = r.game_id
  WHERE u.user_id = $1
  GROUP BY u.user_id, u.username;`;
  pool
    .query(queryText, [req.user.user_id])
    .then((result) => {
      console.log("FROM totalRounds.router: ", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("error in the GET / request for best round data", err);
      res.sendStatus(500);
    });
});

module.exports = router;
