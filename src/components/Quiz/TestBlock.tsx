import { FormFields } from "@/routes/_quizLayout/$username/$quizSlug/test";
import { UseFormRegister } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface TestBlockProps {
  question: string;
  number: number;
  max: number;
  register: UseFormRegister<FormFields>;
  isSubmitted: boolean;
  isCorrect: boolean;
}

export default function TestBlock({
  question,
  number,
  max,
  register,
  isSubmitted,
  isCorrect,
}: TestBlockProps) {
  return (
    <div className="bg-secondary flex flex-col justify-between rounded-sm w-full px-6 py-12 gap-8">
      <div className="flex items-center justify-between font-semibold">
        <p className="text-lg">{question}</p>
        <p className="text-textPrimary">{`${number} / ${max}`}</p>
      </div>
      {!isCorrect && isSubmitted && (
        <input className="bg-input text-textPrimary rounded-sm w-full py-3 pl-6 shadow-md border border-transparent outline-none" />
      )}
      <input
        {...register(number.toString())}
        className={twMerge(
          "bg-input text-textPrimary rounded-sm w-full py-3 pl-6 shadow-md border border-transparent outline-none",
          isSubmitted
            ? isCorrect
              ? "border-green-600"
              : "border-red-600"
            : "focus:border-lightBlue"
        )}
        placeholder={isSubmitted ? "" : "You answer"}
      />
    </div>
  );
}
