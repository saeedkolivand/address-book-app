import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  NationalityValuesTypes,
  SettingsInitialStateReduxTypes,
} from "./settings.types";

const initialState: SettingsInitialStateReduxTypes = {
  nationality: "default",
};

const SettingsSlice = createSlice({
  name: "SettingsSlice",
  initialState,
  reducers: {
    addNationalityAction: (
      state,
      action: PayloadAction<NationalityValuesTypes>
    ) => {
      return {
        nationality: action.payload,
      };
    },
  },
});

export const { addNationalityAction } = SettingsSlice.actions;

export default SettingsSlice;
