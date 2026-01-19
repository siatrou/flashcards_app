type FlashcardProps = {
  spanish: string;
  english: string;
  isFlipped: boolean;
  onFlip: () => void;
};

const Flashcard = ({ spanish, english, isFlipped, onFlip }: FlashcardProps) => {
  return (
    <button
      className={`flashcard ${isFlipped ? "flashcard--flipped" : ""}`.trim()}
      type="button"
      onClick={onFlip}
      aria-pressed={isFlipped}
    >
      <span className="flashcard-face flashcard-front">{spanish}</span>
      <span className="flashcard-face flashcard-back">{english}</span>
    </button>
  );
};

export default Flashcard;
