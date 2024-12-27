import { configureStore } from "@reduxjs/toolkit";
import { secondregisterApi, secondRegisterApi } from "./Secondregister";

export const store = configureStore({
  reducer: {
    [secondregisterApi.reducerPath]: secondregisterApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(secondregisterApi.middleware)
});