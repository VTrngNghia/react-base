export interface IAuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface IState {
  accessToken: null | string;
  refreshToken: null | string;
}
