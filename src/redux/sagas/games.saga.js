import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchGameSaga() {
  try {
    const items = yield axios.get("/api/games");
    console.log(
      "FETCH request from games.saga",
      "GAME_ID = ",
      items.data[0].game_id
    );
    yield put({ type: "SET_GAMES", payload: items.data });
  } catch {
    console.log("error in fetchTargetsSaga");
  }
}

function* addGameSaga(action) {
  try {
    const response = yield axios.post("/api/games", action.payload);
    console.log("GAME_ID = ", response.data.game_id);
    yield put({ type: "FETCH_GAMES" });
  } catch (error) {
    console.log("error in addTargetSaga", error);
  }
}

function* deleteGameSaga(action) {
  try {
    yield axios.delete(`/api/games/${action.payload}`);
    alert("Game Deleted!");
    yield put({ type: "FETCH_GAMES" });
  } catch (error) {
    console.log("error with DELETE saga request", error);
  }
}

function* editGameSaga(action) {
  console.log("ACTION IS: ", action);
  try {
    yield axios.put(`/api/games/${action.payload}`, action.payload);
    alert("Game Edited!");
    yield put({ type: "FETCH_GAMES" });
  } catch (error) {
    console.log("error with EDIT saga request", error);
  }
}

export default function* itemsSaga() {
  yield takeEvery("FETCH_GAMES", fetchGameSaga);
  yield takeEvery("ADD_GAME", addGameSaga);
  yield takeEvery("DELETE_GAME", deleteGameSaga);
  yield takeEvery("EDIT_GAME", editGameSaga);
}
