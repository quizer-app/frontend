import { api } from "@/api/axios";
import { QuizResponse } from "@/api/types/quiz";
import Loading from "@/components/pages/Status/Loading";
import NotFound from "@/components/pages/Status/NotFound";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import QuizView from "./QuizView";

export default function Quiz() {
  const { userName, quizSlug } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["quiz", userName, quizSlug],
    queryFn: () =>
      api.get<QuizResponse>(`/api/v1/Quiz/${userName}/${quizSlug}`),
  });

  return (
    <>
      {isLoading && <Loading />}
      {isError && <NotFound />}
      {data?.data && <QuizView quiz={data.data} />}
    </>
  );
}
