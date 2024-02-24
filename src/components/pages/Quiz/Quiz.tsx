import { QuestionResponse } from "@/api/types/quiz";
import Loading from "@/components/pages/Status/Loading";
import NotFound from "@/components/pages/Status/NotFound/NotFound";
import useQuizData from "@/hooks/quizes/useQuizData";
import intValue from "@/utils/intValue";
import { useSearchParams } from "@tanstack/react-router";
import Category from "./Category";
import Flashcard from "./Flashcards/Flashcard";
import Term from "./Term";

export default function Quiz() {
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
  return (
    <>
      {isLoading && <Loading />}
      {isError && <NotFound />}
      {quiz && (
        <div className="bg-primary w-full text-white px-4 py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
            <h2 className="text-2xl font-bold mb-10 xl:text-3xl">
              {quiz.name}
            </h2>
            <div className="flex flex-col gap-10 w-full mb-16">
              <Flashcard
                questions={quiz.questions}
                className="h-[280px] sm:h-[320px] md:h-[360px] lg:h-[420px]"
                currTerm={currTerm}
                increment={increment}
                decrement={decrement}
              />

              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <Category
                  text="Flashcards"
                  to={`/${quiz.location}/flashcards?term=${currTerm}`}
                  state={{ term: currTerm }}
                />
                <Category text="Ucz się" />
                <Category text="Test" />
                <Category text="Dopasowania" />
              </div>
            </div>
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-lightBlue rounded-3xl"></div>
                <p className="font-semibold">{quiz.userName}</p>
              </div>
              <p className="overflow-auto">{quiz.description}</p>
            </div>
            <h3 className="text-xl font-bold mb-10 xl:text-2xl">
              Pojęcia w tym zestawie
            </h3>
            <div className="flex flex-col gap-5">
              {quiz.questions.map((el: QuestionResponse, id: number) => {
                return (
                  <Term key={id} term={el.question} desc={el.answers[0].text} />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
