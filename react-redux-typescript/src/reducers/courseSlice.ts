import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type CoursePlanner, type Lesson } from '../types/types';

const initialState: CoursePlanner = {
    lessons: [],
    selectedWeek: 1,
}

const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
        addLesson: (state, action: PayloadAction<Omit<Lesson, "id">>) => {
            state.lessons.push({
                id: crypto.randomUUID(),
                ...action.payload
            });
        }
    }
});

export const { addLesson } = courseSlice.actions;

export default courseSlice.reducer;
