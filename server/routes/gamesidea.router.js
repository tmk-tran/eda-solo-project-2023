// Retrieve User's games

// SELECT g.game_id, g.game_date, g.target_name, g.target_score_value
// FROM games g
// JOIN user_games ug ON g.game_id = ug.game_id
// WHERE ug.user_id = $1;

// Replace $1 with the user_id of the user whose games you want to retrieve.

// Scores

// INSERT INTO roundScores (round_id, bulls_score, ring_2_score, ring_3_score, ring_4_score, ring_5_score, trap_score, hit_miss)
// VALUES ($1, $2, $3, $4, $5, $6, $7, $8);
