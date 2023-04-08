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
//TODO: continue how to add kid to api
const kidSlice = createSlice({
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

export const { setLoading, setKidInfo, setError } = kidSlice.actions;
export default kidSlice.reducer;

export const userSelector = (state) => state.user;
