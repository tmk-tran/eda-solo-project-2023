import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Component
import GamesList from "../GamesList/GamesList";

export default function History() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_GAMES" });
  }, []);
  const gameList = useSelector((store) => store.gamesReducer); // possible change of name here
  const reversedGameList = [...gameList].reverse();

  return (
    <div className="page-container">
      <h1>History</h1>
      <div>
        {reversedGameList.map((target) => (
          <div key={target.game_id} style={{ marginBottom: "15px" }}>
            <GamesList target={target} />
          </div>
        ))}
      </div>
    </div>
  );
}
