// Author Name Miss Charvi---

// =========================== toast message open and close logic gloably for warning success and error by charvi ====================================
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastMessageInterface } from "../../../Interfaces/Modules/Reuseable/Reuseable";



const initialState: ToastMessageInterface = {
  isOpen: false,
  messageContent: '',
  type: 'success', 
};

const toastSlice = createSlice({
  name: 'toastmessage',
  initialState,
  reducers: {
    setToast(state, action: PayloadAction<ToastMessageInterface>) {
      state.isOpen = action.payload.isOpen;
      state.messageContent = action.payload.messageContent;
      state.type = action.payload.type;
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;

