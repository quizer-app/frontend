import { AnswerProps } from "@/routes/_quizLayout/$username/$quizSlug/test";
import { Check, X } from "lucide-react";

interface QuestionNavProps {
  answers: AnswerProps[];
  score: number;
  length: number;
}

export default function QuestionNav({
  answers,
  score,
  length,
}: QuestionNavProps) {
  return (
    <>
      <p className="text-3xl font-bold text-green-600">{`Correct: ${score}`}</p>
      <p className="text-3xl font-bold text-red-600">{`Incorrect: ${length}`}</p>
      <div className="absolute top-0 left-10 flex flex-col gap-1 p-4 bg-secondary rounded-sm border-[1px] border-opacity-10 border-white">
        {answers.map((answer, id) => {
          return (
            <div className="flex gap-2 items-center">
              {answer.isCorrect ? (
                <Check key={id} size={22} className="text-green-600" />
              ) : (
                <X key={id} size={22} className="text-red-600" />
              )}
              <p className="pb-[2px]">{answer.number}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
