import { all, fork } from "redux-saga/effects";
import authSagas from "../features/auth/saga";

export default function* sagas() {
  yield all([
    fork(authSagas),
    // More sagas here
  ]);
}
