import { QuizResponse } from "@/api/types/quiz";
import { Link } from "react-router-dom";

interface QuizStripeProps {
  quiz: QuizResponse;
}

export default function QuizStripe({ quiz }: QuizStripeProps) {
  return (
    <Link
      to={`/${location}`}
      className="w-full text-white bg-secondary hover:opacity-90 flex flex-col rounded-md py-5 px-6 gap-3"
    >
      <p className="text-2xl font-bold">{quiz.name}</p>

      <div className="flex gap-6">
        <p className="font-bold text-textPrimary">{`${quiz.numberOfQuestions} questions`}</p>
        <span className="h-auto w-[1px] bg-textPrimary/50"></span>
        <p className="text-textPrimary">{quiz.createdAt}</p>
      </div>
    </Link>
  );
}
