import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type CoursePlannerState, type Lesson } from "./types";

const initialState: CoursePlannerState = {
  selectedWeek: 1,
  lessons: [
    {
      id: crypto.randomUUID(),
      week: 1,
      day: "Tisdag",
      title: "Introduktion till React",
      completed: true,
    },
    {
      id: crypto.randomUUID(),
      week: 2,
      day: "Torsdag",
      title: "Redux Toolkit",
      completed: false,
    },
  ],
};

const courseSlice = createSlice({
  name: "coursePlanner",
  initialState,

  reducers: {
    addLesson: (state, action: PayloadAction<Omit<Lesson, "id">>) => {
      state.lessons.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });
    },

    toggleLesson: (state, action: PayloadAction<string>) => {
      const lesson = state.lessons.find(
        l => l.id === action.payload
      );

      if (lesson) {
        lesson.completed = !lesson.completed;
      }
    },

    changeWeek: (state, action: PayloadAction<number>) => {
      state.selectedWeek = action.payload;
    },
  },
});

export const { addLesson, toggleLesson, changeWeek } =
  courseSlice.actions;

export default courseSlice.reducer;