import useQuizData from "@/hooks/quizes/useQuizData";
import intValue from "@/utils/intValue";
import { useSearchParams } from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";
import Loading from "../../Status/Loading";
import NotFound from "../../Status/NotFound/NotFound";
import Flashcard from "./Flashcard";

export default function Flashcards() {
  const { isLoading, isError, quiz } = useQuizData();

  const [searchParams, setSearchParams] = useSearchParams({ term: "1" });
  const currTerm = intValue(searchParams.get("term"));

  const decrement = () => {
    setSearchParams(
      {
        term: JSON.stringify(
          currTerm !== 1 ? currTerm - 1 : quiz?.questions.length
        ),
      },
      { replace: true }
    );
  };

  const increment = () => {
    setSearchParams(
      {
        term: JSON.stringify(
          currTerm !== quiz?.questions.length ? currTerm + 1 : 1
        ),
      },
      { replace: true }
    );
  };

  if (!quiz) {
    return <>{!quiz && <NotFound />}</>;
  }

  return (
    <>
      {isLoading && <Loading />}
      {isError && <NotFound />}
      <Toaster />
      <div className="bg-primary text-white fixed w-full h-[100vh] px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
          <div className="flex flex-col gap-10 w-full mb-16">
            <Flashcard
              questions={quiz.questions}
              className="h-[420px] sm:h-[460px] md:h-[460px] lg:h-[500px]"
              currTerm={currTerm}
              increment={increment}
              decrement={decrement}
            />
          </div>
        </div>
      </div>
    </>
  );
}
