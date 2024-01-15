import { Toaster } from "react-hot-toast";
import { useState } from "react";
import Flashcard from "./Flashcard";
import ControlBar from "../ControlBar/ControlBar";
import GetQuizData from "@/hooks/getQuizData";
import Loading from "../../Status/Loading";
import NotFound from "../../Status/NotFound";
import Error from "../../Status/Error";

// interface FlashcardsProps {
//   quiz: QuizResponse;
// }

export default function Flashcards() {
  // error, loading, quiz undefined???

  const { isLoading, isError, quiz } = GetQuizData();
  const [currTerm, setCurrTerm] = useState<number>(0);

  if (isLoading || isError || !quiz) {
    return (
      <>
        {isLoading && <Loading />}
        {isError && <NotFound />}
        {!quiz && <Error msg="Quiz is undefined" />}
      </>
    );
  }

  const increment = () => {
    currTerm === quiz.questions.length - 1
      ? setCurrTerm(0)
      : setCurrTerm(prev => prev + 1);
  };

  const decrement = () => {
    currTerm === 0
      ? setCurrTerm(quiz.questions.length - 1)
      : setCurrTerm(prev => prev - 1);
  };

  return (
    <>
      <Toaster />
      <div className="bg-primary text-white fixed w-full h-[100vh] px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
          <div className="flex flex-col gap-10 w-full mb-16">
            <div className="flex items-center justify-center h-[420px] sm:h-[460px] md:h-[460px] lg:h-[500px] [perspective:1000px]">
              <Flashcard questions={quiz.questions[currTerm]} />
            </div>

            <ControlBar
              curr={currTerm + 1}
              max={quiz.questions.length}
              left={decrement}
              right={increment}
            />
          </div>
        </div>
      </div>
    </>
  );
}
