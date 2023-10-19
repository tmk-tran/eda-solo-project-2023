import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchRoundsSaga() {
  try {
    const items = yield axios.get("/api/rounds");
    console.log(
      "FETCH request from rounds.saga, GAME_ID = ",
      items.data[0].game_id
    );
    yield put({ type: "SET_ROUNDS", payload: items.data });
  } catch {
    console.log("error in fetchRoundsSaga");
  }
}

function* addRoundSaga(action) {
  try {
    const response = yield axios.post("/api/rounds", action.payload); // this is how we access the round_id from the response to get to the front end
    console.log("ROUND_ID = ", response.data.round_id);
    const roundId = response.data.round_id;
    console.log(
      "ADD_ROUND request from addRoundSaga, ROUND_NUMBER = ",
      roundId
    );
    yield put({ type: "FETCH_ROUNDS" });
  } catch (error) {
    console.log("error in addRoundSaga", error);
  }
}

function* deleteRoundSaga(action) {
  try {
    yield axios.delete(`/api/rounds/${action.payload}`);
    alert("Round Deleted!");
    yield put({ type: "FETCH_ROUNDS" });
  } catch (error) {
    console.log("error with ROUND DELETE saga request", error);
  }
}

export default function* itemsSaga() {
  yield takeEvery("FETCH_ROUNDS", fetchRoundsSaga);
  yield takeEvery("ADD_ROUND", addRoundSaga);
  yield takeEvery("DELETE_ROUND", deleteRoundSaga);
}