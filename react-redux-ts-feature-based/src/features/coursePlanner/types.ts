export interface Lesson {
  id: string;
  week: number;
  day: "Måndag" | "Tisdag" | "Onsdag" | "Torsdag" | "Fredag";
  title: string;
  completed: boolean;
}

export interface CoursePlannerState {
  lessons: Lesson[];
  selectedWeek: number;
}