import './LessonList.css';

import { useAppDispatch, useAppSelector } from '@/app/hooks/hooks';
import { toggleLesson } from '../../courseSlice';

function LessonList() {
  const dispatch = useAppDispatch();

  const { lessons, selectedWeek } = useAppSelector(
    state => state.coursePlanner
  );

  const filteredLessons = lessons.filter(
    lesson => lesson.week === selectedWeek
  );

  return (
    <>
      <h2>Vecka {selectedWeek}</h2>

      {filteredLessons.map(lesson => (
        <article
          key={lesson.id}
          className={`lesson-card ${lesson.completed ? "completed" : ""}`}
        >
          <div className="lesson-header">
            <h3>{lesson.title}</h3>
            <span>Vecka {lesson.week}</span>
          </div>

          <p>{lesson.day}</p>

          <button onClick={() => dispatch(toggleLesson(lesson.id))}>
            {lesson.completed ? "Ångra" : "Markera klar"}
          </button>
        </article>
      ))}
    </>
  );
}

export default LessonList;