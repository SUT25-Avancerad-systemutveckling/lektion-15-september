import { useState } from "react"
import { type WeekDay } from '../../types/types';
import { useAppDispatch } from "../../hooks/hooks";
import { addLesson } from "../../reducers/courseSlice";

function LessonForm() {
    const [title, setTitle] = useState<string>("");
    const [week, setWeek] = useState<number>(1);
    const [day, setDay] = useState<WeekDay>("Måndag");

    const dispatch = useAppDispatch();

    function handleSubmit(e: React.ChangeEvent) {
        e.preventDefault();

        dispatch(addLesson({
            title,
            week,
            day,
            completed: false
        }));
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>Lägg till lektion</h1>
            <input type="text" placeholder="Lektionstitel" onChange={(e) => {
                setTitle(e.target.value);
            }} />
            <input type="number" placeholder="Vecka" onChange={(e) => {
                setWeek(Number(e.target.value))
            }} />

            <select name="" id="" onChange={(e) => {
                setDay(e.target.value as WeekDay)
            }}>
                <option value="Måndag">Måndag</option>
                <option value="Tisdag">Tisdag</option>
                <option value="Onsdag">Onsdag</option>
                <option value="Torsdag">Torsdag</option>
                <option value="Fredag">Fredag</option>
            </select>

            <button type="submit">Lägg till</button>
        </form>
    )
}

export default LessonForm;