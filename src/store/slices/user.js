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
      state.isLoading = false;
      state.error = null;
      state.userInfo = payload;
    },
    userLogout: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.userInfo = null;
    },
    setError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { setLoading, userLogin, userLogout } = userSlice.actions;
export default userSlice.reducer;
