import { configureStore } from "@reduxjs/toolkit";
import { AuthReducers } from "./reducers/authSlice";
export const store = configureStore({
  reducer: {
    Auth: AuthReducers,
  },
});
