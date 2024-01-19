import { useState } from "react";
import { QuestionResponse } from "@/api/types/quiz";
import Arrow from "./Arrow";
import { useAtom, useAtomValue } from "jotai";
import { currTermAtom, quizLengthAtom, updateCurrTermAtom } from "@/atoms/quiz";
import { twMerge } from "tailwind-merge";

interface FlashcardProps {
  questions: QuestionResponse[];
  style: string;
}

export default function Flashcard({ questions, style }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const currTerm = useAtomValue(currTermAtom);
  const [, updateCurrTerm] = useAtom(updateCurrTermAtom);
  const length = useAtomValue(quizLengthAtom);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const decrement = () => {
    updateCurrTerm({ value: -1, length: length });
  };

  const increment = () => {
    updateCurrTerm({ value: 1, length: length });
  };

  return (
    <>
      <div
        className={twMerge(
          "flex items-center justify-center [perspective:1000px]",
          style
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
              {length > 0
                ? questions[currTerm].question
                : "No questions available"}
            </p>
          </div>
          <div className="bg-secondary flex items-center justify-center rounded-md p-4 w-full h-full overflow-auto [backface-visibility:hidden] [transform:rotateX(180deg)]">
            <p className="text-xl sm:text-2xl xl:text-3xl">
              {length > 0
                ? questions[currTerm].answers[0].text
                : "No questions available"}
            </p>
          </div>
        </button>
      </div>

      {length > 0 && (
        <div className="flex items-center justify-center gap-8">
          <Arrow onClick={decrement} dir="left" />
          <p>{`${currTerm + 1} / ${length}`}</p>
          <Arrow onClick={increment} dir="right" />
        </div>
      )}
    </>
  );
}
