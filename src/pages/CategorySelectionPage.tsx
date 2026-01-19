import { useNavigate } from "react-router-dom";
import { categories } from "../data/flashcards";

type CategorySelectionPageProps = {
  mode: "study" | "quiz";
};

const CategorySelectionPage = ({ mode }: CategorySelectionPageProps) => {
  const navigate = useNavigate();
  const title =
    mode === "study" ? "Choose a study category" : "Choose a quiz category";

  const handleSelect = (category: string) => {
    if (mode === "study") {
      navigate(`/study/${category}`);
      return;
    }

    navigate(`/quiz/${category}`);
  };

  return (
    <section className="page">
      <h1>{title}</h1>
      <p>Select a category to get started.</p>
      <div className="section">
        <div className="category-list">
          {categories.map((category) => (
            <button
              key={category}
              className="category-pill"
              type="button"
              onClick={() => handleSelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySelectionPage;
