import Loading from "@/components/pages/Status/Loading";
import NotFound from "@/components/pages/Status/NotFound";
import QuizView from "./QuizView";
import GetQuizData from "@/hooks/GetQuizData";

export default function Quiz() {
  const { isLoading, isError, quiz } = GetQuizData();

  return (
    <>
      {isLoading && <Loading />}
      {isError && <NotFound />}
      {!isLoading && !isError && quiz && <QuizView quiz={quiz} />}
    </>
  );
}
