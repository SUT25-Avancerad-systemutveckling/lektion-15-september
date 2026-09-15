import { configureStore } from "@reduxjs/toolkit";
import courseReducer from '../reducers/courseSlice';

const store = configureStore({
    reducer: {
        course: courseReducer
    }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {course: CoursePlanner}
export type AppDispatch = typeof store.dispatch;

export default store;