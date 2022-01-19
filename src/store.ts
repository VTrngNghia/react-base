import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { createMigrate, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware, logger];

const migrations = {};

const persistConfig = {
  storage,
  key: "rootState",
  version: 1,
  migrate: createMigrate(migrations),
  whitelist: ["auth", "system"],
  // WORKAROUND https://github.com/rt2zz/redux-persist/issues/786#issuecomment-421850652
  timeout: null as any,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});
