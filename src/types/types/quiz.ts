export type PaginatedQuizResponse = {
  items: QuizResponse[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

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
  numberOfQuestions: number;
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

export type GetQuizesQueryParams = {
  pageNumber?: number;
  pageSize?: number;
  sortColumn?: "createdAt" | "name" | "userName";
  sortOrder?: "desc" | "asc";
  searchTerm?: string;
  userName?: string;
};
