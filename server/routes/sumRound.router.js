const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Retrieve the total sum of round data of a game played by a specific user using GAME_ID
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  const game_id = req.query.game_id; // Access the game_id from the query parameters

  const queryText = `SELECT game_id, SUM(round_score) AS total_game_score
FROM rounds
WHERE game_id = $1
GROUP BY game_id;`;
  pool
    .query(queryText, [game_id])
    .then((result) => {
      console.log("FROM sumRound.router: ", result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("error in the GET / request for sumRound data", err);
      res.sendStatus(500);
    });
});

// router.get("/", rejectUnauthenticated, (req, res) => {
//   const game_id = req.query.game_id; // Access the game_id from the query parameters

//   console.log("req.what are you: ", req.user);
//   const queryText = `SELECT r.round_number, s.round_score
//   FROM rounds r
//   JOIN scores s ON r.round_id = s.round_id
//   WHERE r.game_id = $1`;
//   pool
//     .query(queryText, [game_id])
//     .then((result) => {
//       console.log("RESULT: ", result.rows);
//       res.send(result.rows);
//     })
//     .catch((err) => {
//       console.log("error in the GET / request for best round data", err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
