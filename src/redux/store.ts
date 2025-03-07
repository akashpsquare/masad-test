import { configureStore } from "@reduxjs/toolkit";
import {
  isEditTaskReducer,
  subtaskReducer,
  taskFormReducer,
} from "./features/Modules/TaskMaster/Slices/TaskMasterSlice";
import {
  categoryReducer,
  FormReducer,
  taskReducer,
} from "./features/Modules/TaskMaster/Slices/CategorySlice";
import floatingLabelReducer from "./features/Modules/Reusble/floatinglabelslice";
import toastSlice from "./features/Modules/Reusble/ToastSlice";
import popupSlice from "./features/Modules/Reusble/popupSlice";
import navigationSlice from "./features/Modules/Reusble/navigationSlice";
import sidebarslice from "./features/Modules/Reusble/sidebarSlice";
import backupSlice from "./features/Modules/Reusble/backupSlice";
import addTriggerEventReducer from "./features/Modules/TaskMaster/Slices/TriggerEventSlice";
import isDeletedSlice from "./features/Modules/Reusble/deletedSlice";
import { taskworkinstrucitonReducer, WorkInstructionReducer } from "./features/Modules/TaskMaster/Slices/WorkInstructionSlice";
import { baseApi } from "./api";
import projectPlanningSlice from "./features/Modules/Billing/ProjectPlanning/Slices/projectPlanningSlice";
import BillingApprovalReducer from "./features/Modules/Billing/BillingApproval/Slices/BillingApprovalSlice";
import { projectReducer } from "./features/Modules/Billing/ProjectPlanning/Slices/ProjectSlice";
import { MethodCurrentTaskReducer } from "./features/Modules/TaskMaster/Slices/TaskMasterSlice";
import authReducer from './features/Modules/Auth/authSlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    form: FormReducer,
    floatingLabel: floatingLabelReducer,
    taskMaster: subtaskReducer,
    taskForm: taskFormReducer,
    toasthandel: toastSlice,
    categoryLocal: categoryReducer,
    taskLocal: taskReducer,
    popup: popupSlice,
    navigateData: navigationSlice,
    currentpaths: sidebarslice,
    backupSlice: backupSlice,
    triggerEvent: addTriggerEventReducer,
    [baseApi.reducerPath]: baseApi.reducer,
    monthlyTarget: BillingApprovalReducer,
    // projectManager: ProjectManagerSlice,
    projectPlanning: projectPlanningSlice,
    isDeletedSLice: isDeletedSlice,
    projectLocalDb: projectReducer,
    WorkInstructionReducer: WorkInstructionReducer,
    MethodCurrentTaskReducer:MethodCurrentTaskReducer,
    taskworkinstrucitonReducer: taskworkinstrucitonReducer,
    isEditTaskReducer:isEditTaskReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
