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
  console.log("req.body from rounds.router:", req.body);
  pool
    .query(`SELECT * FROM "rounds";`)
    .then((result) => {
      // console.log("GAME_ID = ", result.rows[0].game_id); // logging the game_id, for later use
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
  let roundId;
  pool
    .query(queryText, [item.game_id, item.round_number])
    .then((result) => {
      roundId = result.rows[0].round_id; // Access the round_id from the result
      console.log("Returned round_id from rounds.router: ", roundId); // Log the round_id
      res.send({ round_id: roundId }).status(201);
      // .json({ message: "Values inserted!", roundId: roundId }); // Send the round_id in the response
    })
    .catch((error) => {
      console.log("Error in POST: ", error);
      res.sendStatus(500);
    });
});

// router.post("/", rejectUnauthenticated, (req, res) => {
//   const item = req.body;
//   const user = req.user;
//   console.log("ITEM in combined router: ", item);
//   console.log("USER in combined router: ", user);

//   // Initialize variables to capture the round_id and newRoundId
//   let roundId;
//   let newRoundId;

//   // First, insert a new round into the "rounds" table
//   const roundQueryText = `
//     INSERT INTO "rounds" ("game_id", "round_number")
//     VALUES ($1, $2)
//     RETURNING "round_id";
//   `;

//   // Perform the round insertion
//   pool
//     .query(roundQueryText, [item.game_id, item.round_number])
//     .then((roundResult) => {
//       roundId = roundResult.rows[0].round_id; // Capture the round_id
//       console.log("Returned round_id from combined router: ", roundId);

//       // Now, insert the score data into the "scores" table
//       const scoreQueryText = `
//         INSERT INTO "scores" ("round_id", "round_score")
//         VALUES ($1, $2);
//       `;

//       // Perform the score insertion using the round_id
//       pool
//         .query(scoreQueryText, [roundId, item.round_score])
//         .then((result) => {
//           res.sendStatus(201);
//         })
//         .catch((error) => {
//           console.log("Error in combined POST for scores and rounds: ", error);
//           res.sendStatus(500);
//         });
//       // Catch for first query
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });

// router.post("/", (req, res) => {
//   console.log(req.body);
//   // RETURNING "id" will give us back the id of the created movie
//   const insertMovieQuery = `
//   INSERT INTO "movies" ("title", "poster", "description")
//   VALUES ($1, $2, $3)
//   RETURNING "id";`;

//   // FIRST QUERY MAKES MOVIE
//   pool
//     .query(insertMovieQuery, [
//       req.body.title,
//       req.body.poster,
//       req.body.description,
//     ])
//     .then((result) => {
//       console.log("New Movie Id:", result.rows[0].id); //ID IS HERE!

//       const createdMovieId = result.rows[0].id;

//       // Now handle the genre reference
//       const insertMovieGenreQuery = `
//       INSERT INTO "movies_genres" ("movie_id", "genre_id")
//       VALUES  ($1, $2);
//       `;
//       // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
//       pool
//         .query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id])
//         .then((result) => {
//           //Now that both are done, send back success!
//           res.sendStatus(201);
//         })
//         .catch((err) => {
//           // catch for second query
//           console.log(err);
//           res.sendStatus(500);
//         });

//       // Catch for first query
//     })
//     .catch((err) => {
//       console.log(err);
//       res.sendStatus(500);
//     });
// });


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
