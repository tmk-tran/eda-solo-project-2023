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
SELECT DATE_FORMAT(game_date, '%d/%m/%Y') AS formatted_date FROM games;


CREATE TABLE rounds (
    round_id serial PRIMARY KEY,
    game_id INTEGER REFERENCES games(game_id) ON DELETE CASCADE,
    round_number INTEGER,
    round_score INTEGER
);

SELECT * FROM rounds;


CREATE TABLE scores (
    score_id serial PRIMARY KEY,
    round_id integer REFERENCES rounds(round_id) ON DELETE CASCADE,
    round_score integer
);

SELECT * FROM scores;


DROP TABLE games CASCADE;
DROP TABLE rounds CASCADE;
DROP TABLE scores CASCADE;


-- total score for a game
SELECT game_id, SUM(round_score) AS total_game_score
FROM rounds
WHERE game_id = 69 -- Replace 'your_game_id' with the actual game_id
GROUP BY game_id;



-- Retrieve the round information and their related scores using game_id
SELECT r.round_number, r.round_score
FROM rounds r
WHERE r.game_id = 69;


-- Retrieve all user-game associations and their details
SELECT u.username, g.game_date, g.target_name
FROM "user" u
JOIN user_games ug ON u.user_id = ug.user_id
JOIN games g ON ug.game_id = g.game_id;


-- Retrieve all games for a specific user
SELECT *
FROM games
WHERE user_id = 3;


-- Retrieve all games for a specific user (by user_id), including round details
SELECT g.game_id,
       g.game_date,
       g.game_notes,
       g.total_game_score,
       r.round_id,
       r.round_number,
       r.round_score
FROM games g
JOIN rounds r ON g.game_id = r.game_id
WHERE g.user_id = 1
ORDER BY g.game_id DESC;


-- Retrieve the best round data of games played by a specific user using USERNAME
SELECT u.username AS user_name,
       g.game_id,
       MAX(r.round_score) AS best_round_score
FROM "user" u
JOIN games g ON u.user_id = g.user_id
JOIN rounds r ON g.game_id = r.game_id
WHERE u.username = 'Mark'
GROUP BY u.username, g.game_id
ORDER BY best_round_score DESC;


-- Retrieve the game with the highest average round score
SELECT g.game_id,
       AVG(r.round_score) AS average_round_score
FROM games g
JOIN rounds r ON g.game_id = r.game_id
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
SELECT g.game_id,
       AVG(r.round_score) AS average_round_score
FROM games g
JOIN rounds r ON g.game_id = r.game_id
GROUP BY g.game_id;

-- Retrieve the average round score for each game played by a specific user (replace 'your_user_id' with the actual user_id)
SELECT g.game_id,
       AVG(r.round_score) AS average_round_score
FROM games g
JOIN rounds r ON g.game_id = r.game_id
WHERE g.user_id = 1
GROUP BY g.game_id;



--To retrieve the total rounds played for a user by user_id
SELECT u.user_id,
       u.username,
       COUNT(r.round_id) AS total_rounds_played
FROM "user" u
LEFT JOIN games g ON u.user_id = g.user_id
LEFT JOIN rounds r ON g.game_id = r.game_id
WHERE u.user_id = 1
GROUP BY u.user_id, u.username;

