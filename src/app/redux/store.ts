import { configureStore } from "@reduxjs/toolkit";
import SettingsSlice from "pages/settings/settings.slice";

const store = configureStore({
  reducer: {
    settingsReducer: SettingsSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
