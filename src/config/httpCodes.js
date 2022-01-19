// eslint-disable-next-line no-undef
module.exports = {
  OK: 200,
  WAIT_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401, // requires client to /auth/login
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  REQUEST_TIMEOUT: 408,
  ACCESS_TOKEN_EXPIRED: 499, // requires client to /auth/refresh-token
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  SERVICE_UNAVAILABLE: 503,
};
