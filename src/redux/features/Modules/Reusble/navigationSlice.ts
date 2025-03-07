import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  NavigationInterface,
  ToastMessageInterface,
} from "../../../Interfaces/Modules/Reuseable/Reuseable";

const loadFromLocalStorage = (): Array<{ route: string; title: string }> => {
  const storedState = localStorage.getItem("navigateArray");
  return storedState ? JSON.parse(storedState) : [];
};

const initialState: NavigationInterface = {
  navigateArray: loadFromLocalStorage(),
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setNavigate(
      state,
      action: PayloadAction<{ route: string; title: string , isSubtask?: boolean}>
    ) {
      const { title } = action.payload;
      const navIndex = state.navigateArray.findIndex(
        (item) => item.title === title
      );

      // If title already exists in the navigation array, do nothing
      if (navIndex !== -1) return;

      // Remove any existing '/subtask' route if present
      if (state.navigateArray.some((item) => item.route.includes("/subtask"))) {
        state.navigateArray.pop();
      }

      state.navigateArray.push(action.payload);

      // updating localStorage when navigation array has changed
      const updatedNavigateArray = state.navigateArray;
      localStorage.setItem(
        "navigateArray",
        JSON.stringify(updatedNavigateArray)
      );
    },

    resetNavigate(state, action: PayloadAction<{ title: string }>) {
      const navIndex = state.navigateArray.findIndex(
        (item) => item.title === action.payload.title
      );
      if (navIndex !== -1) {
        state.navigateArray = state.navigateArray.slice(0, navIndex + 1);
      }

      localStorage.setItem(
        "navigateArray",
        JSON.stringify(state.navigateArray)
      );
    },

    removeNavigate(state) {
      state.navigateArray.pop();

      localStorage.setItem(
        "navigateArray",
        JSON.stringify(state.navigateArray)
      );
    },

    emptyNavigate(state) {
      state.navigateArray = [];
      localStorage.setItem(
        "navigateArray",
        JSON.stringify(state.navigateArray)
      );
    },

    initializeBreadcrumb(
      state,
      action: PayloadAction<{ title: string; route: string }>
    ) {
      state.navigateArray = [action.payload];
      localStorage.setItem(
        "navigateArray",
        JSON.stringify(state.navigateArray)
      );
    },

    resetTaskName(state, action: PayloadAction<{ title: string }>) {
      state.navigateArray[state.navigateArray.length - 1].title = action.payload.title;;

      localStorage.setItem(
        "navigateArray",
        JSON.stringify(state.navigateArray)
      );
    }
  },
});

export const {
  setNavigate,
  resetNavigate,
  removeNavigate,
  emptyNavigate,
  resetTaskName,
  initializeBreadcrumb,
} = navigationSlice.actions;
export default navigationSlice.reducer;
