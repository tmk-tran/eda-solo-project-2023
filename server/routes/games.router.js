const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get all of the games from DB
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("req.user:", req.user);
  pool
    .query(`SELECT * FROM "games" ORDER BY game_id ASC;`)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("error in the GET / request for authorized users", err);
      res.sendStatus(500);
    });
});

/**
 * Add a game for the logged in user
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  const item = req.body;
  const user = req.user;
  const queryText = `INSERT INTO "games" ("user_id", "game_date", "game_notes", "total_game_score", "target_name", "target_score_value")
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING game_id;`;
  pool
    .query(queryText, [
      user.user_id,
      item.game_date,
      item.game_notes,
      item.total_game_score,
      item.target_name,
      item.target_score_value,
    ])
    .then((result) => {
      const newGameId = result.rows[0].game_id;
      console.log("new game_id: ", newGameId);
      res.send({ game_id: newGameId }).status(201);
      // .json({ message: "Values inserted!", game_id: newGameId });
    })
    .catch((error) => {
      console.log("Error in POST: ", error);
      res.sendStatus(500);
    });
});

/**
 * Delete a game if it's one the logged in user added
 */
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log("REQ: ", req.params.id);
  console.log("USER: ", req.user.user_id);
  pool
    .query(`DELETE FROM "games" WHERE "game_id" = $1 AND "user_id" = $2`, [
      req.params.id,
      req.user.user_id,
    ])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in DELETE with id", error);
      res.sendStatus(500);
    });
});

/**
 * Update a game if it's one the logged in user added
 */
router.put("/:id", rejectUnauthenticated, (req, res) => {
  const game = req.body;
  console.log("REQ ID FOR EDIT: ", game.game_id);
  console.log("USER IS: ", req.user.user_id);
  console.log("GAME IS: ", game);
  const queryText = `UPDATE "games" SET game_date = $1, game_notes = $2, target_name = $3, target_score_value = $4, total_game_score = $5 WHERE game_id = $6 AND user_id = $7;`;
  pool
    .query(queryText, [
      game.game_date,
      game.game_notes,
      game.target_name,
      game.target_score_value,
      game.total_game_score,
      game.game_id,
      req.user.user_id,
    ])
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("error saving to database", err);
      res.sendStatus(500);
    });
});

module.exports = router;
