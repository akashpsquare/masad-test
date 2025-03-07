// Author Name Aayush Malviya

// deleted filter data get from local db or non deleted data get from local db flag redux flag

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isDeleted } from "../../../Interfaces/Modules/Reuseable/Reuseable";

const initialState: isDeleted = {
  isDeleted: false,
  isDeletedNext: false,
};

const isDeletedSlice = createSlice({
  name: "isdeleted",
  initialState,
  reducers: {
    setIsDeleted(state, action: PayloadAction<boolean>) {
      state.isDeleted = action.payload;
    },
    setisDeletedNext: (state, action: PayloadAction<isDeleted>) => {
      state.isDeletedNext = action.payload.isDelete;
    },
  },
});

export const { setIsDeleted, setisDeletedNext } = isDeletedSlice.actions;
export default isDeletedSlice.reducer;
