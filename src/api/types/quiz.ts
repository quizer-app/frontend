export type QuizResponse = {
    id: string;
    userId: string;
    userName: string;
    name: string;
    slug: string;
    description: string;
    averageRating: number;
    numberOfRatings: number;
    questions: QuestionResponse[];
}

export type QuestionResponse = {
    id: string;
    question: string;
    answers: Answer[];
}

export type Answer = {
    text: string;
    isCorrect: boolean;
}