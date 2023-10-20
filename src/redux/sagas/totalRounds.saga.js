import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";

function* fetchTotalRounds() {
  try {
    const items = yield axios.get("/api/total-rounds");
    console.log("FETCH request from totalRounds.saga", "ITEMS: ", items);
    yield put({ type: "SET_TOTAL_ROUNDS", payload: items.data });
  } catch {
    console.log("error in totalRoundsSaga");
  }
}

export default function* totalRounds() {
  yield takeEvery("FETCH_TOTAL_ROUNDS", fetchTotalRounds);
}