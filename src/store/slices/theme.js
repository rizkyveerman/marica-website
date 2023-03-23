import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

export const themeSelector = (state) => state.theme;
