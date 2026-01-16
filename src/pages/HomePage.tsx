import NavButton from "../components/NavButton";

const HomePage = () => {
  return (
    <section className="page">
      <h1>Welcome to Spanish Flashcards</h1>
      <p>Pick a mode to start learning vocabulary today.</p>
      <div className="button-grid">
        <NavButton to="/study" label="Study Mode" variant="study" />
        <NavButton to="/quiz" label="Quiz Mode" variant="quiz" />
        <NavButton to="/stats" label="Stats Page" variant="stats" />
      </div>
    </section>
  );
};

export default HomePage;
