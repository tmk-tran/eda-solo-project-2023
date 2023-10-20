
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

----------------------------------------------------------------
CREATE TABLE "user" (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    profile_picture VARCHAR (200) NULL
);

SELECT * FROM "user";

DROP TABLE "user" CASCADE;


CREATE TABLE games (
    game_id serial PRIMARY KEY,
    user_id INTEGER REFERENCES "user"(user_id),
    game_date DATE,
    game_notes VARCHAR NULL,
    total_game_score INTEGER NULL,
    target_name VARCHAR,
    target_score_value INTEGER
);

SELECT * FROM games;



CREATE TABLE user_games (
    score_id serial PRIMARY KEY,
    user_id INTEGER REFERENCES "user"(user_id),
    game_id INTEGER REFERENCES games(game_id)
);

SELECT * FROM user_games;



CREATE TABLE rounds (
    round_id serial PRIMARY KEY,
    game_id INTEGER REFERENCES games(game_id) ON DELETE CASCADE,
    round_number INTEGER NOT NULL
);

SELECT * FROM rounds;



CREATE TABLE scores (
    score_id serial PRIMARY KEY,
    round_id integer REFERENCES rounds(round_id) ON DELETE CASCADE,
    round_score integer
);

SELECT * FROM scores;




DROP TABLE games CASCADE;
DROP TABLE user_games CASCADE;
DROP TABLE rounds CASCADE;
DROP TABLE scores CASCADE;



-- Retrieve all user-game associations and their details
SELECT u.username, g.game_date, g.target_name
FROM "user" u
JOIN user_games ug ON u.user_id = ug.user_id
JOIN games g ON ug.game_id = g.game_id;

-- Retrieve all games for a specific user
SELECT *
FROM games
WHERE user_id = 1;


-- Retrieve all games for a specific user (by user_id), including round details
SELECT g.game_id,
       g.game_date,
       g.game_notes,
       g.total_game_score,
       r.round_id,
       r.round_number,
       s.round_score
FROM games g
JOIN rounds r ON g.game_id = r.game_id
JOIN scores s ON r.round_id = s.round_id
WHERE g.user_id = 1;



-- Retrieve the best round data of games played by a specific user
SELECT u.username AS user_name,
       g.game_id,
       MAX(s.round_score) AS best_round_score
FROM "user" u
JOIN games g ON u.user_id = g.user_id
JOIN rounds r ON g.game_id = r.game_id
JOIN scores s ON r.round_id = s.round_id
WHERE u.username = 'Mark'
GROUP BY u.username, g.game_id
ORDER BY best_round_score DESC
LIMIT 1;


-- Retrieve the game with the highest average round score
SELECT g.game_id,
       AVG(s.round_score) AS average_round_score
FROM games g
JOIN rounds r ON g.game_id = r.game_id
JOIN scores s ON r.round_id = s.round_id
GROUP BY g.game_id
ORDER BY average_round_score DESC
LIMIT 1;


-- Retrieve the highest total game score for each user:
SELECT u.user_id, 
       u.username,
       MAX(g.total_game_score) AS highest_total_game_score
FROM "user" u
JOIN games g ON u.user_id = g.user_id
GROUP BY u.user_id, u.username;


-- Retrieve the average total game score for all users:
SELECT AVG(g.total_game_score) AS average_score
FROM games g;

-- Retrieve the number of rounds played in each game:
SELECT g.game_id, COUNT(r.round_id) AS num_rounds
FROM games g
LEFT JOIN rounds r ON g.game_id = r.game_id
GROUP BY g.game_id;

-- Retrieve the average round score for each game
SELECT g.game_date, g.target_name, AVG(s.round_score) AS average_round_score
FROM games g
JOIN rounds r ON g.game_id = r.game_id
JOIN scores s ON r.round_id = s.round_id
GROUP BY g.game_date, g.target_name
ORDER BY g.game_date;



UPDATE "games" SET "game_date" = '10-10-2023' WHERE "game_id" = 36 AND user_id = 1;
