import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchRoundTotal() {
  try {
    const items = yield axios.get("/api/sum-round");
    console.log("FETCH request from bestRound.saga", "ITEMS: ", items);
    yield put({ type: "SET_ROUND_TOTAL", payload: items.data });
  } catch {
    console.log("error in bestRoundSaga");
  }
}

export default function* sumRound() {
  yield takeEvery("FETCH_TOTAL", fetchRoundTotal);
}