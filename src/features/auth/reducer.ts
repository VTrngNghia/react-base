import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthTokens, IState } from "./types";

const initialState: IState = {
  accessToken: null,
  refreshToken: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucceed(state, { payload }: PayloadAction<IAuthTokens>) {
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
    logout(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

export const authActions = slice.actions;
export default slice.reducer;
