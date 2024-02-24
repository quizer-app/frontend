import { useState } from "react";
import { QuestionResponse } from "@/api/types/quiz";
import Arrow from "./Arrow";
import { twMerge } from "tailwind-merge";
import { useSearchParams } from "react-router-dom";
import intValue from "@/utils/intValue";

interface FlashcardProps {
  questions: QuestionResponse[];
  className: string;
}

export default function Flashcard({ questions, className }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams({ term: "1" });
  const currTerm = intValue(searchParams.get("term"));

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const decrement = () => {
    setSearchParams(
      {
        term: JSON.stringify(currTerm !== 1 ? currTerm - 1 : questions.length),
      },
      { replace: true }
    );
  };

  const increment = () => {
    setSearchParams(
      {
        term: JSON.stringify(currTerm !== questions.length ? currTerm + 1 : 1),
      },
      { replace: true }
    );
  };

  return (
    <>
      <div
        className={twMerge(
          "flex items-center justify-center [perspective:1000px]",
          className
        )}
      >
        <button
          onClick={handleFlip}
          className={`w-full h-full transition-transform duration-300 [transform-style:preserve-3d] ${
            isFlipped ? `[transform:rotateX(180deg)]` : ``
          }`}
        >
          <div className="bg-secondary flex items-center justify-center rounded-md p-4 absolute w-full h-full [backface-visibility:hidden]">
            <p className="text-xl sm:text-2xl xl:text-3xl">
              {questions.length > 0
                ? questions[currTerm - 1].question
                : "No questions available"}
            </p>
          </div>
          <div className="bg-secondary flex items-center justify-center rounded-md p-4 w-full h-full overflow-auto [backface-visibility:hidden] [transform:rotateX(180deg)]">
            <p className="text-xl sm:text-2xl xl:text-3xl">
              {questions.length > 0
                ? questions[currTerm - 1].answers[0].text
                : "No questions available"}
            </p>
          </div>
        </button>
      </div>

      {questions.length > 0 && (
        <div className="flex items-center justify-center gap-8">
          <Arrow onClick={decrement} dir="left" />
          <p>{`${currTerm} / ${questions.length}`}</p>
          <Arrow onClick={increment} dir="right" />
        </div>
      )}
    </>
  );
}
