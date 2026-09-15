import './LessonForm.css';

import { useState, type ChangeEvent } from 'react';
import { useAppDispatch } from '@/app/hooks/hooks';
import { addLesson } from '../../courseSlice';
import { type Lesson } from '../../types';

const days: Lesson["day"][] = [
  "Måndag",
  "Tisdag",
  "Onsdag",
  "Torsdag",
  "Fredag",
];

function LessonForm() {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState<string>("");
  const [week, setWeek] = useState<number>(1);
  const [day, setDay] = useState<Lesson["day"]>("Tisdag");

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addLesson({
        title,
        week,
        day,
        completed: false,
      })
    );

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ny lektion</h2>

      <input
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="Lektionens namn"
      />

      <input
        type="number"
        value={week}
        onChange={(e) => setWeek(Number(e.target.value))}
      />

      <select
        value={day}
        onChange={(e) => setDay(e.target.value as Lesson["day"])}
      >
        {days.map(day => (
          <option key={day}>{day}</option>
        ))}
      </select>

      <button>Lägg till</button>
    </form>
  );
}

export default LessonForm;