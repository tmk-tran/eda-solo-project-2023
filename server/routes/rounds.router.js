const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

/**
 * Get all of the rounds for the logged in user
 */
router.get("/", rejectUnauthenticated, (req, res) => {
  console.log("req.body:", req.body);
  pool
    .query(`SELECT * FROM "rounds";`)
    .then((result) => {
      console.log("GAME_ID = ", result.rows[0].game_id); // logging the game_id, for later use
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("error in the GET / request for ROUND information", err);
      res.sendStatus(500);
    });
});

/**
 * Add a round for the logged in user to the Rounds page
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  const item = req.body;
  const user = req.user;
  console.log("ITEM: ", item, "USER: ", user);
  const queryText = `
    INSERT INTO "rounds" ("game_id", "round_number")
    VALUES ($1, $2)
    RETURNING "round_id";
  `;
  pool
    .query(queryText, [item.game_id, item.round_number])
    .then((result) => {
      const roundId = result.rows[0].round_id; // Access the round_id from the result
      console.log("Returned round_id: ", roundId); // Log the round_id
      res.send({ round_id: roundId }).status(201);
      // .json({ message: "Values inserted!", roundId: roundId }); // Send the round_id in the response
    })
    .catch((error) => {
      console.log("Error in POST: ", error);
      res.sendStatus(500);
    });
});

router.delete("/:id", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  console.log("REQ: ", req.params.id);
  pool
    .query(`DELETE FROM "rounds" WHERE "game_id" = $1`, [req.params.id])
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("Error in ROUND DELETE with id", error);
      res.sendStatus(500);
    });
});

module.exports = router;
