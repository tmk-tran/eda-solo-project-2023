import { all } from "redux-saga/effects";
import loginSaga from "./login.saga";
import registrationSaga from "./registration.saga";
import userSaga from "./user.saga";
// import itemsSaga from './items.saga';
// import tableItemDescrSaga from './table.item.descr.saga';
import gamesSaga from "./games.saga";
import roundsSaga from "./rounds.saga";
import scoresSaga from "./scores.saga";
import sumRound from "./sumRound.saga";
import totalRounds from "./totalRounds.saga";
// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    gamesSaga(),
    roundsSaga(),
    scoresSaga(),
    sumRound(),
    totalRounds(),
  ]);
}
