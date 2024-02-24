import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/api/axios";
import { QuizResponse } from "@/api/types/quiz";

export default function useQuizData() {
  const { userName, quizSlug } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["quiz", userName, quizSlug],
    queryFn: () =>
      api.get<QuizResponse>(`/api/v1/Quiz/${userName}/${quizSlug}`),
  });
  const quiz = data?.data;

  return { isLoading, isError, quiz };
}
