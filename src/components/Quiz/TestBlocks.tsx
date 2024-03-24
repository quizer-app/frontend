import {
  AnswerProps,
  FormFields,
} from "@/routes/_quizLayout/$username/$quizSlug/test";
import { QuestionResponse, QuizResponse } from "@/types/types/quiz";
import { RefObject } from "react";
import { UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface TestBlocksProps {
  quiz: QuizResponse | undefined;
  isSubmitted: boolean;
  answers: AnswerProps[];
  register: UseFormRegister<FormFields>;
  inputRefs: RefObject<HTMLInputElement[]>;
}

export default function TestBlocks({
  quiz,
  isSubmitted,
  answers,
  register,
  inputRefs,
}: TestBlocksProps) {
  const setInputRef = (element: HTMLInputElement | null, id: number) => {
    if (inputRefs.current && element) {
      inputRefs.current[id] = element;
    }
  };

  return (
    <>
      {quiz?.questions.map((question: QuestionResponse, id: number) => {
        return (
          <div
            key={id}
            className="bg-secondary flex flex-col justify-between rounded-sm w-full px-6 py-12 gap-8"
          >
            <div className="flex items-center justify-between font-semibold">
              <p className="text-lg">{question.question}</p>
              <p className="text-textPrimary">{`${id + 1} / ${quiz.questions.length}`}</p>
            </div>

            {!(answers[id] ? answers[id].isCorrect : false) && isSubmitted && (
              <input className="bg-input text-textPrimary rounded-sm w-full py-3 pl-6 shadow-md border border-transparent outline-none" />
            )}
            <input
              {...register((id + 1).toString())}
              ref={element => setInputRef(element, id)}
              className={twMerge(
                "bg-input text-textPrimary rounded-sm w-full py-3 pl-6 shadow-md border border-transparent outline-none",
                isSubmitted
                  ? (answers[id] ? answers[id].isCorrect : false)
                    ? "border-green-600"
                    : "border-red-600"
                  : "focus:border-lightBlue"
              )}
              placeholder={isSubmitted ? "" : "You answer"}
            />
          </div>
        );
      })}
    </>
  );
}
