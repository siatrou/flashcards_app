import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Flashcard from "../components/Flashcard";
import { categories, flashcards, FlashcardCategory } from "../data/flashcards";
import type { Flashcard as FlashcardData } from "../data/flashcards";

const StudyPage = () => {
  const { category } = useParams();
  const normalizedCategory = category as FlashcardCategory | undefined;
  const isValidCategory = categories.includes(
    normalizedCategory ?? ("animals" as FlashcardCategory)
  );

  if (!normalizedCategory || !isValidCategory) {
    return (
      <section className="page">
        <h1>Choose a valid category</h1>
        <p>That category was not found. Please pick another one.</p>
        <Link className="nav-button nav-button--study" to="/study">
          Back to categories
        </Link>
      </section>
    );
  }

  const categoryCards = useMemo(
    () => flashcards.filter((card) => card.category === normalizedCategory),
    [normalizedCategory]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [wrongCards, setWrongCards] = useState<FlashcardData[]>([]);

  const currentCard = categoryCards[currentIndex];
  const isComplete =
    categoryCards.length > 0 && currentIndex >= categoryCards.length;

  const handleFlip = () => {
    if (!currentCard) {
      return;
    }
    setIsFlipped((prev) => !prev);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (!currentCard) {
      return;
    }

    if (!isCorrect) {
      setWrongCards((prev) => [...prev, currentCard]);
    }

    setIsFlipped(false);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <section className="page">
      <h1>Study: {normalizedCategory}</h1>
      <p>Click the card to flip between Spanish and English.</p>
      <div className="section">
        {categoryCards.length === 0 ? (
          <p>No cards available for this category yet.</p>
        ) : isComplete ? (
          <>
            <p>Nice work! You have reviewed all cards.</p>
            <p>Incorrect cards stored this round: {wrongCards.length}.</p>
            <Link className="nav-button nav-button--study" to="/study">
              Study another category
            </Link>
          </>
        ) : (
          <>
            <Flashcard
              spanish={currentCard.spanish}
              english={currentCard.english}
              isFlipped={isFlipped}
              onFlip={handleFlip}
            />
            {isFlipped && (
              <div className="answer-actions">
                <button
                  className="answer-button answer-button--right"
                  type="button"
                  onClick={() => handleAnswer(true)}
                >
                  ✅ Right
                </button>
                <button
                  className="answer-button answer-button--wrong"
                  type="button"
                  onClick={() => handleAnswer(false)}
                >
                  ❌ Wrong
                </button>
              </div>
            )}
            <p className="progress-text">
              Card {currentIndex + 1} of {categoryCards.length}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default StudyPage;
