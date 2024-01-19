import { useState } from "react";
import { QuestionResponse } from "@/api/types/quiz";
import Arrow from "./Arrow";
import { useAtom, useAtomValue } from "jotai";
import { currTermAtom, updateCurrTermAtom } from "@/atoms/quiz";

interface FlashcardProps {
  questions: QuestionResponse[];
}

export default function Flashcard({ questions }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const currTerm = useAtomValue(currTermAtom);
  const [, updateCurrTerm] = useAtom(updateCurrTermAtom);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const decrement = () => {
    updateCurrTerm({ value: -1, length: questions.length });
  };

  const increment = () => {
    updateCurrTerm({ value: 1, length: questions.length });
  };

  return (
    <>
      <div className="flex items-center justify-center h-[420px] sm:h-[460px] md:h-[460px] lg:h-[500px] [perspective:1000px]">
        <button
          onClick={handleFlip}
          className={`w-full h-full transition-transform duration-300 [transform-style:preserve-3d] ${
            isFlipped ? `[transform:rotateX(180deg)]` : ``
          }`}
        >
          <div className="bg-secondary flex items-center justify-center rounded-md p-4 absolute w-full h-full [backface-visibility:hidden]">
            <p className="text-xl sm:text-2xl xl:text-3xl">
              {questions ? questions[currTerm].question : ""}
            </p>
          </div>
          <div className="bg-secondary flex items-center justify-center rounded-md p-4 w-full h-full overflow-auto [backface-visibility:hidden] [transform:rotateX(180deg)]">
            <p className="text-xl sm:text-2xl xl:text-3xl">
              {questions ? questions[currTerm].answers[0].text : ""}
            </p>
          </div>
        </button>
      </div>

      {questions.length > 0 && (
        <div className="flex items-center justify-center gap-8">
          <Arrow onClick={decrement} dir="left" />
          <p>{`${currTerm + 1} / ${questions.length}`}</p>
          <Arrow onClick={increment} dir="right" />
        </div>
      )}
    </>
  );
}

// const increment = () => {
//   currTerm === quiz.questions.length - 1
//     ? setCurrTerm(0)
//     : setCurrTerm(prev => prev + 1);
// };

// const decrement = () => {
//   currTerm === 0
//     ? setCurrTerm(quiz.questions.length - 1)
//     : setCurrTerm(prev => prev - 1);
// };

// import Arrow from "./Arrow";

// interface ControlBarProps {
//   curr: number;
//   max: number;
//   left: () => void;
//   right: () => void;
// }

// export default function ControlBar({
//   curr,
//   max,
//   left,
//   right,
// }: ControlBarProps) {
//   return (
//     <>
//       {max > 0 && (
//         <div className="flex items-center justify-center gap-8">
//           <Arrow onClick={left} dir="left" />
//           <p>{`${curr} / ${max}`}</p>
//           <Arrow onClick={right} dir="right" />
//         </div>
//       )}
//     </>
//   );
// }
