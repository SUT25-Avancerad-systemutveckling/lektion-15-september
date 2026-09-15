import './WeekFilter.css';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { changeWeek } from '../../reducers/courseSlice';

function WeekFilter() {
  const dispatch = useAppDispatch();

  const selectedWeek = useAppSelector(
    state => state.coursePlanner.selectedWeek
  );

  const weeks = useAppSelector(
    state => state.coursePlanner.lessons
  );

  return (
    <section className="week-filter">
        <label>Välj vecka</label>

        <select
            value={selectedWeek}
            onChange={(e) => dispatch(changeWeek(Number(e.target.value)))}
        >
            {weeks.map((w) => (
            <option key={w.id} value={w.week}>
                Vecka {w.week}
            </option>
            ))}
        </select>
    </section>
  );
}

export default WeekFilter;