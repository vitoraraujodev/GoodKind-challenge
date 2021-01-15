import {
  configureStore,
  getDefaultMiddleware,
  combineReducers
} from "@reduxjs/toolkit";

// @ts-ignore
import { storytellerReducer } from "./reducers/storytellerReducer";

import httpHandler from "./middleware/http-handler";

import { useAppDispatch } from "./types";

const reducers = combineReducers({
  storytellerReducer
});

const store = configureStore({
  reducer: reducers,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    }),
    httpHandler
  ]
});

export default store;
export { useAppDispatch };
