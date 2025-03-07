import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PopupSliceState } from "../../../Interfaces/Modules/Reuseable/Reuseable";

const initialState: PopupSliceState = {
  popups: {},
  categoryPopup: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openPopup(state, action: PayloadAction<string>) {
      state.popups = {};

      state.popups[action.payload] = true;
    },
    closePopup(state, action: PayloadAction<string>) {
      delete state.popups[action.payload];
    },
    togglePopup(state, action: PayloadAction<string>) {
      state.popups[action.payload] = !state.popups[action.payload];
    },

    openCategoryPopup(state, action: PayloadAction<string>) {
      state.categoryPopup = action.payload;
    },
    clearCategoryPopup(state) {
      state.categoryPopup = null;
    },
  },
});

export const {
  openPopup,
  closePopup,
  togglePopup,
  openCategoryPopup,
  clearCategoryPopup,
} = popupSlice.actions;
export default popupSlice.reducer;
