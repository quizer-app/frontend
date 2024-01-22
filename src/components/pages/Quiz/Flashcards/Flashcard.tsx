import { QuestionResponse } from "@/api/types/quiz";
import { useState } from "react";

interface FlashcardProps {
  question: QuestionResponse | undefined;
}

export default function Flashcard({ question }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  if(!question) return (<></>);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <button
      onClick={handleFlip}
      className={`w-full h-full transition-transform duration-300 [transform-style:preserve-3d] ${
        isFlipped ? `[transform:rotateX(180deg)]` : ``
      }`}
    >
      <div className="bg-secondary flex items-center justify-center rounded-md p-4 absolute w-full h-full [backface-visibility:hidden]">
        <p className="text-xl sm:text-2xl xl:text-3xl">
          {question.question}
        </p>
      </div>
      <div className="bg-secondary flex items-center justify-center rounded-md p-4 w-full h-full overflow-auto [backface-visibility:hidden] [transform:rotateX(180deg)]">
        <p className="text-xl sm:text-2xl xl:text-3xl">
          {question.answers[0].text}
        </p>
      </div>
    </button>
  );
}
