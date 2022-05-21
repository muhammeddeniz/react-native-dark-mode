import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: { theme: "dark" | "light" | "system" } = {
  theme: "light",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: INITIAL_STATE,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export const { changeTheme } = settingsSlice.actions;
export default settingsSlice.reducer;
