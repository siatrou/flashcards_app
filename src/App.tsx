import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategorySelectionPage from "./pages/CategorySelectionPage";
import QuizSelectionPage from "./pages/QuizSelectionPage";
import StatsPage from "./pages/StatsPage";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <Link className="app-title" to="/">
          Spanish Flashcards
        </Link>
      </header>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/study" element={<CategorySelectionPage mode="study" />} />
          <Route path="/quiz" element={<QuizSelectionPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
