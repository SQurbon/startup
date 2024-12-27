import { configureStore } from "@reduxjs/toolkit";
import { registerApi } from "./Register";

export const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(registerApi.middleware)
});