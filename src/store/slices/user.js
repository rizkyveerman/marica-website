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
    userLogin: async (state, { payload }) => {
      console.log("payload", payload);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const { data } = await axios.post(
          "https://marica-backend.vercel.app/api/v1/user/login",
          { identifier: payload.username, password: payload.password },
          config
        );

        state.userInfo = data;
        localStorage.setItem("userInfo", JSON.stringify(data));

        state.isLoading = false;
        state.error = null;
      } catch (error) {
        state.error =
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message
            ? error.message
            : "Aduh ada sedikit masalah, Coba lagi yuk!";
      }
    },
    userLogout: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.userInfo = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export const { setLoading, userLogin, userLogout, setError } =
  userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state) => state.user;
