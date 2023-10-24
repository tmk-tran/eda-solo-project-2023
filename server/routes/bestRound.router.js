const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Retrieve the best round data of games played by a specific user using USER_ID
 */
// router.get("/", rejectUnauthenticated, (req, res) => {
//   const queryText = `SELECT g.game_id,
//  g.game_date,
//  g.game_notes,
//  g.total_game_score,
//  r.round_id,
//  r.round_number,
//  s.round_score
// FROM games g
// JOIN rounds r ON g.game_id = r.game_id
// JOIN scores s ON r.round_id = s.round_id
// WHERE g.user_id = $1
// ORDER BY game_id DESC;`;
//   pool
//     .query(queryText, [req.user.user_id])
//     .then((result) => {
//       console.log("FROM bestRound.router: ", result.rows);
//       res.send(result.rows);
//     })
//     .catch((err) => {
//       console.log("error in the GET / request for best round data", err);
//       res.sendStatus(500);
//     });
// });

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
