export type QuizResponse = {
  id: string;
  userId: string;
  userName: string;
  name: string;
  slug: string;
  location: string;
  description: string;
  averageRating: number;
  numberOfRatings: number;
  questions: QuestionResponse[];
  createdAt: string;
};

export type QuestionResponse = {
  id: string;
  question: string;
  answers: Answer[];
};

export type Answer = {
  text: string;
  isCorrect: boolean;
};
