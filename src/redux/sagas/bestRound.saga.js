import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchBestRound() {
  try {
    const items = yield axios.get("/api/best-round");
    console.log("FETCH request from bestRound.saga", "ITEMS: ", items);
    yield put({ type: "SET_BEST_ROUND", payload: items.data });
  } catch {
    console.log("error in bestRoundSaga");
  }
}

export default function* bestRoundSaga() {
  yield takeEvery("FETCH_BEST", fetchBestRound);
}