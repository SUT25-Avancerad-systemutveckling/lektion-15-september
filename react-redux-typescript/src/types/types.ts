export type WeekDay = "Måndag" | "Tisdag" | "Onsdag" | "Torsdag" | "Fredag";

export interface Lesson {
    id: string;
    week: number;
    day: WeekDay;
    title: string;
    completed: boolean;
}

export interface CoursePlanner {
    lessons: Lesson[];
    selectedWeek: number;
}