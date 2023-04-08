import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: null,
  error: null,
  kidInfo:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("kidInfo"))
      : null,
};

const userSlice = createSlice({
  name: "kid",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setStatus: (state, { payload }) => {
      state.status = payload;
      state.isLoading = false;
    },
    setKidInfo: (state, { payload }) => {
      state.kidInfo = payload;
      state.isLoading = false;
    },
  },
});

export const { setLoading, setKidInfo, setError } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state) => state.user;
