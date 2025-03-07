/*  AUTHOR NAME : CHARVI */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FloatingLabelState } from "../../../Interfaces/Modules/Reuseable/Reuseable";


const initialState: FloatingLabelState = {
  inputValues: {},
  inputHeights: {},
  selectedUnit: "",
};

const floatingLabelSlice = createSlice({
  name: "floatingLabel",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<Record<string, string>>) => {

      state.inputValues = { ...state.inputValues, ...action.payload };
    },
    setInputHeight: (state, action: PayloadAction<Record<string, string>>) => {
      state.inputHeights = { ...state.inputHeights, ...action.payload };
    },
    setSelectedUnit: (state, action: PayloadAction<string>) => {
      state.selectedUnit = action.payload;
    },
    resetInputValues: (state) => {
      // Reset action
      state.inputValues = {};
      state.inputHeights = {};
      state.selectedUnit = "";
    },
  },
});

export const {
  setInputValue,
  setInputHeight,
  setSelectedUnit,
  resetInputValues,
} = floatingLabelSlice.actions;
export default floatingLabelSlice.reducer;
