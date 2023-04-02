import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  userInfo:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    userLogin: (state, { payload }) => {
      state.userInfo = payload;
      state.isLoading = false;
      state.error = null;
    },
    userLogout: (state) => {
      state.userInfo = null;
      state.isLoading = false;
      state.error = null;
    },
    userRegister: (state, { payload }) => {
      state.userInfo = payload;
      state.isLoading = false;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { setLoading, userLogin, userLogout, setError, userRegister } =
  userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state) => state.user;
