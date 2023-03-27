import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      Cookies.set("token", action.payload.token); // set JWT token as cookie
    },
    logoutSuccess: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      Cookies.remove("token"); // remove JWT token cookie
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;
export default authSlice.reducer;
