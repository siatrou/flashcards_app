export type FlashcardCategory = "animals" | "food" | "verbs";

export type Flashcard = {
  category: FlashcardCategory;
  spanish: string;
  english: string;
  quiz: {
    type: "multiple-choice";
    options: string[];
  };
};

export const flashcards: Flashcard[] = [
  {
    category: "animals",
    spanish: "el gato",
    english: "the cat",
    quiz: {
      type: "multiple-choice",
      options: ["the cat", "the dog", "the horse", "the bird"]
    }
  },
  {
    category: "animals",
    spanish: "el perro",
    english: "the dog",
    quiz: {
      type: "multiple-choice",
      options: ["the cow", "the dog", "the fish", "the rabbit"]
    }
  },
  {
    category: "animals",
    spanish: "el caballo",
    english: "the horse",
    quiz: {
      type: "multiple-choice",
      options: ["the horse", "the turtle", "the lion", "the fox"]
    }
  },
  {
    category: "food",
    spanish: "la manzana",
    english: "the apple",
    quiz: {
      type: "multiple-choice",
      options: ["the bread", "the apple", "the cheese", "the milk"]
    }
  },
  {
    category: "food",
    spanish: "el pan",
    english: "the bread",
    quiz: {
      type: "multiple-choice",
      options: ["the soup", "the bread", "the rice", "the fish"]
    }
  },
  {
    category: "food",
    spanish: "el queso",
    english: "the cheese",
    quiz: {
      type: "multiple-choice",
      options: ["the cheese", "the meat", "the salad", "the egg"]
    }
  },
  {
    category: "verbs",
    spanish: "correr",
    english: "to run",
    quiz: {
      type: "multiple-choice",
      options: ["to run", "to eat", "to sleep", "to drink"]
    }
  },
  {
    category: "verbs",
    spanish: "comer",
    english: "to eat",
    quiz: {
      type: "multiple-choice",
      options: ["to read", "to eat", "to write", "to speak"]
    }
  },
  {
    category: "verbs",
    spanish: "beber",
    english: "to drink",
    quiz: {
      type: "multiple-choice",
      options: ["to swim", "to drive", "to drink", "to listen"]
    }
  }
];

export const categories: FlashcardCategory[] = ["animals", "food", "verbs"];
