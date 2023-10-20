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
  console.log("req.user:", req.user);
  const queryText = `SELECT u.user_id AS user_id,
  g.game_id,
  s.round_score AS best_round_score
  FROM "user" u
  JOIN games g ON u.user_id = g.user_id
  JOIN rounds r ON g.game_id = r.game_id
  JOIN scores s ON r.round_id = s.round_id
  WHERE u.user_id = $1
  ORDER BY s.round_score DESC;`; // removed LIMIT 1 here, let's see what happens LOL
  pool
    .query(queryText, [req.user.user_id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("error in the GET / request for best round data", err);
      res.sendStatus(500);
    });
});

module.exports = router;
