import { categories } from "../data/flashcards";

type CategorySelectionPageProps = {
  mode: "study" | "quiz";
};

const CategorySelectionPage = ({ mode }: CategorySelectionPageProps) => {
  const title =
    mode === "study" ? "Choose a study category" : "Choose a quiz category";

  return (
    <section className="page">
      <h1>{title}</h1>
      <p>Select a category to get started.</p>
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

export default CategorySelectionPage;
