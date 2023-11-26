import { useState } from "react";
import { TermProps } from "./Term";

interface FlashcardProps {
  currTerm: number;
  terms: TermProps[];
}

export default function Flashcard({ currTerm, terms }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

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
          {terms[currTerm].term}
        </p>
      </div>
      <div className="bg-secondary flex items-center justify-center rounded-md p-4 w-full h-full overflow-auto [backface-visibility:hidden] [transform:rotateX(180deg)]">
        <p className="text-xl sm:text-2xl xl:text-3xl">
          {terms[currTerm].desc}
        </p>
      </div>
    </button>
  );
}
