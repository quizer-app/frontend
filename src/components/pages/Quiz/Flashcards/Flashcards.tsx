import { Toaster } from "react-hot-toast";
import GetQuizData from "@/hooks/GetQuizData";
import Loading from "../../Status/Loading";
import NotFound from "../../Status/NotFound";
import Error from "../../Status/Error";
import Flashcard from "./Flashcard";

export default function Flashcards() {
  const { isLoading, isError, quiz } = GetQuizData();

  if (isLoading || isError || !quiz) {
    return (
      <>
        {isLoading && <Loading />}
        {isError && <NotFound />}
        {!quiz && <Error msg="Quiz is undefined" />}
      </>
    );
  }

  return (
    <>
      <Toaster />
      <div className="bg-primary text-white fixed w-full h-[100vh] px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto rounded-md max-w-[592px] md:max-w-[720px] lg:max-w-[976px]">
          <div className="flex flex-col gap-10 w-full mb-16">
            {/* <div className="flex items-center justify-center h-[420px] sm:h-[460px] md:h-[460px] lg:h-[500px] [perspective:1000px]">
              <Flashcard questions={quiz.questions[currTerm]} />
            </div> */}
            <Flashcard questions={quiz.questions} />
          </div>
        </div>
      </div>
    </>
  );
}
