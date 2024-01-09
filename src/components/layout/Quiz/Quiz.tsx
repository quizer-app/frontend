import { api } from "@/api/axios";
import { QuizResponse } from "@/api/types/quiz";
import NotFound from "@/components/status/NotFound";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import QuizView from "./QuizView";

export default function Quiz() {
  const { userName, quizSlug } = useParams();
  
  const { isLoading, isError, data } = useQuery({
    queryKey: ["quizes"],
    queryFn: () => api.get<QuizResponse>(`/api/v1/Quiz/${userName}/${quizSlug}`),
  });

  return ( 
    <>
      {isError && <NotFound />}
      {isLoading && <div className="text-red-600">Loading...</div>}
      {!isError && !isLoading && data?.data && <QuizView quiz={data?.data} />}
    </>
  );
}
