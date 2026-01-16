import { categories } from "../data/flashcards";

const QuizSelectionPage = () => {
  return (
    <section className="page">
      <h1>Choose a quiz category</h1>
      <p>Quiz modes will be available in the next phase.</p>
      <div className="section">
        <div className="category-list">
          {categories.map((category) => (
            <span key={category} className="category-pill">
              {category}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuizSelectionPage;
