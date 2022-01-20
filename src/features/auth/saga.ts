import { takeLeading } from "redux-saga/effects";
import { authActions } from "./reducer";
import api from "./api";

export default function* authSagas() {
  yield takeLeading(authActions.logout, function* () {
    yield api.logout();
  });
}
