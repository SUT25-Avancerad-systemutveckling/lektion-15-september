import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "../reducers/courseSlice";

export const store = configureStore({
  reducer: {
    coursePlanner: courseReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {coursePlanner: CoursePlannerState}
export type AppDispatch = typeof store.dispatch;