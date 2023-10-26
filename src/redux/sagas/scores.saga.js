import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchScoreSaga() {
  try {
    const items = yield axios.get("/api/scores");
    console.log("FETCH request from scores.saga", items.data);
    yield put({ type: "SET_ROUND_SCORES", payload: items.data });
  } catch {
    console.log("error in fetchScoreSaga");
  }
}

function* addScoreSaga(action) {
  try {
    const response = yield axios.post("/api/scores", action.payload);
    console.log("ROUND_SCORE from addScoreSaga = ", response);
    yield put({ type: "FETCH_ROUND_SCORES" });
  } catch (error) {
    console.log("error in addScoreSaga", error);
  }
}

export default function* roundScoreSaga() {
  yield takeEvery("FETCH_ROUND_SCORES", fetchScoreSaga);
  yield takeEvery("ADD_ROUND_SCORE", addScoreSaga);
}
