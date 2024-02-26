import { useState } from "react";
import { QuestionResponse } from "@/api/types/quiz";
import Arrow from "./Arrow";
import { twMerge } from "tailwind-merge";
import { Link } from "@tanstack/react-router";
import { Route } from "@/routes/_quizLayout/$username/$quizSlug";

interface FlashcardProps {
  questions: QuestionResponse[];
  className: string;
}

interface FlashcardSearchParams {
  term: number;
}

export default function Flashcard({ questions, className }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const { term } = Route.useSearch();

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const decrease = (prev: FlashcardSearchParams) => {
    if (prev.term === 1) {
      return { term: questions.length };
    }
    return { term: prev.term - 1 };
  };

  const increase = (prev: FlashcardSearchParams) => {
    if (prev.term === questions.length) {
      return { term: 1 };
    }
    return { term: prev.term + 1 };
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
                ? questions[term - 1].question
                : "No questions available"}
            </p>
          </div>
          <div className="bg-secondary flex items-center justify-center rounded-md p-4 w-full h-full overflow-auto [backface-visibility:hidden] [transform:rotateX(180deg)]">
            <p className="text-xl sm:text-2xl xl:text-3xl">
              {questions.length > 0
                ? questions[term - 1].answers[0].text
                : "No questions available"}
            </p>
          </div>
        </button>
      </div>

      {questions.length > 0 && (
        <div className="flex items-center justify-center gap-8">
          <Link from={Route.fullPath} search={decrease}>
            <Arrow dir="left" />
          </Link>

          <p>{`${term} / ${questions.length}`}</p>

          <Link from={Route.fullPath} search={increase}>
            <Arrow dir="right" />
          </Link>
        </div>
      )}
    </>
  );
}
