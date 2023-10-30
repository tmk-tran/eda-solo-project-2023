import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchRoundAvg() {
  try {
    const items = yield axios.get("/api/round-avg");
    console.log("FETCH request from roundScoreAvg.saga", "ITEMS: ", items);
    yield put({ type: "SET_AVG", payload: items.data });
  } catch {
    console.log("error in roundScoreAvgSaga");
  }
}

export default function* roundScoreAvg() {
  yield takeEvery("FETCH_ROUND_AVG", fetchRoundAvg);
}