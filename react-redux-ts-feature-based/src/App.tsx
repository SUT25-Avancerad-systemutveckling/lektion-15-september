import LessonForm from './components/LessonForm/LessonForm';
import LessonList from './components/LessonList/LessonList';
import WeekFilter from './components/WeekFilter/WeekFilter';
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