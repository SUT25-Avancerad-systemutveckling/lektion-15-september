import { LessonForm, LessonList, WeekFilter } from './features/coursePlanner';

function App() {
  return (
    <main>
      <h1>Kursplanerare</h1>

      <WeekFilter />

      <LessonForm />

      <LessonList />
    </main>
  );
}

export default App;