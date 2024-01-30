import Loading from "@/components/pages/Status/Loading";
import NotFound from "@/components/pages/Status/NotFound/NotFound";
import QuizView from "./QuizView";
import useQuizData from "@/hooks/useQuizData";

export default function Quiz() {
  const { isLoading, isError, quiz } = useQuizData();

  return (
    <>
      {isLoading && <Loading />}
      {isError && <NotFound />}
      {quiz && <QuizView quiz={quiz} />}
    </>
  );
}
