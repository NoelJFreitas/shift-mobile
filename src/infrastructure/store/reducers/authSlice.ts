import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isLoggingIn(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.isLoading = false;
      state.isLoggedIn = true;
    },
    isAuthenticating(state) {
      state.isLoading = true;
    },
    authenticationError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    resetState(state) {
      state.token = "";
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
    },
  },
});

export const {
  resetState,
  authenticationError,
  isAuthenticating,
  isLoggingIn,
} = authSlice.actions;
export const AuthReducers = authSlice.reducer;
