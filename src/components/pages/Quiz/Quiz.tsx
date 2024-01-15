import Loading from "@/components/pages/Status/Loading";
import NotFound from "@/components/pages/Status/NotFound";
import QuizView from "./QuizView";
import { api } from "@/api/axios";
import { QuizResponse } from "@/api/types/quiz";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { userName, quizSlug } = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["quiz", userName, quizSlug],
    queryFn: () =>
      api.get<QuizResponse>(`/api/v1/Quiz/${userName}/${quizSlug}`),
  });

  // const [{ isLoading, isError, data }] = useAtom(todosAtom)

  return (
    <>
      {isLoading && <Loading />}
      {isError && <NotFound />}
      {data?.data && <QuizView quiz={data.data} />}
    </>
  );
}
