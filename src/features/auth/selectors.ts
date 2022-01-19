import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../common/reducer";

const selectAuthState = (state: State) => state.auth;

export const selectAccessToken = createSelector(
  selectAuthState,
  state => state.accessToken,
);
