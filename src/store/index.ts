import { configureStore } from "@reduxjs/toolkit";
import settings from "./settings.slice";

export const store = configureStore({
  reducer: {
    settingsReducer: settings,
  },
});
